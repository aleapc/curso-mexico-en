#!/usr/bin/env node
// QA pontual dos 13 clipes prioritários apontados pelo Codex (7 por duracao
// longa, 6 por possivel fala rapida) - todos vozes-guia em ingles. Transcreve
// via ElevenLabs Scribe (STT) e compara com o texto esperado do episode.json.
// Nao mexe em qa-asr.mjs (contaminado de mandarim, fora de escopo aqui).

import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const audioRoot = join(root, 'static', 'audio', 'mexico');

function loadKey() {
  const fromEnv = process.env.ELEVENLABS_API_KEY?.trim();
  if (fromEnv) return fromEnv;
  const file = join(root, '.env');
  if (!existsSync(file)) throw new Error('Falta .env com a chave da ElevenLabs.');
  const raw = readFileSync(file, 'utf8').trim();
  const m = raw.match(/^ELEVENLABS_API_KEY\s*=\s*(.+)$/m);
  return (m?.[1] || raw).replace(/^["']|["']$/g, '').trim();
}
const API_KEY = loadKey();

const CLIPS = [
  { key: 'mx-b01-n01', slot: 'B01', expected: "This is not accent removal. It is a four-movement repair kit for the words you already know. Equal taps keep every syllable alive. A flat palm stops English vowels from sliding. One small punch marks the stressed syllable. A finger flick replaces the heavy English R. We will use all four in the three places where your first words matter: the airport taxi, the hotel desk and a market counter." },
  { key: 'mx-b03-n01', slot: 'B03', expected: "The dangerous tourist sentence is the smile that means nothing. You miss a price or a street name, nod anyway and inherit the wrong problem. B03 gives you a four-step ladder: say the break, ask for slower repetition, move the detail into writing, then put the route on a map. You are not asking the person to become your teacher. You are changing the channel until the information survives." },
  { key: 'mx-b04-n02', slot: 'B04', expected: "For a U.S. citizen visiting as a tourist for under one hundred eighty days, Mexico does not require a visa. That number is a ceiling, not a promise: immigration decides the authorised stay when you arrive. At an international airport, do not hunt for an old paper tourist form. The FMM is generated in the entry process; if an e-gate gives you a QR receipt, keep it with the passport." },
  { key: 'mx-b04-n03', slot: 'B04', expected: "Now make the trip survive a dead phone. Save the hotel confirmation, full address and return booking offline. Immigration may ask for booking or itinerary evidence. Install the eSIM according to the provider's instructions and keep the activation steps offline. Carry two payment methods you have checked yourself. These are resilience tasks, not immigration requirements." },
  { key: 'mx-b07-n01', slot: 'B07', expected: "B06 left you at a stable information point. B07 begins with a channel, not a car. Airport systems vary across Mexico, so do not memorise a company, colour or door number. Ask identified staff where authorised transport is, then choose the taxi channel, the app pickup point or another official option before following a person." },
  { key: 'mx-b09-n07', slot: 'B09', expected: "B09 complete. Destination before purchase. Boleto in Mexico. Ask the validation rule instead of guessing. Find the platform. Ask whether transfer belongs to this journey. Confirm the vehicle at the door. The line number can stay on the screen; your job is the sequence." },
  { key: 'mx-b13-n07', slot: 'B13', expected: "B13 complete. Preference is reversible; severe allergy is not. You froze the warning, sent a written card to the kitchen, asked about shared surfaces and utensils, and left on an unsafe or uncertain answer. Before travel, replace peanut with your actual allergen and review the card and emergency plan with your clinician." },
  { key: 'mx-b09-p06', slot: 'B09', expected: "The bus arrives at the platform. Before boarding, confirm that this vehicle goes to the Historic Centre. Speak now." },
  { key: 'mx-b10-n04', slot: 'B10', expected: "Fila tells you where the waiting begins. Taquilla tells you what the window does. If the queue ends at that window, join the back instead of walking to the glass and asking everyone." },
  { key: 'mx-b13-p02', slot: 'B13', expected: "Before ordering, state the severe peanut allergy without adding a long explanation. Speak now." },
  { key: 'mx-b14-n02', slot: 'B14', expected: "The meal is finished. Ask for the bill before asking for the terminal. The paper or screen gives you something you can inspect." },
  { key: 'mx-b14-p02', slot: 'B14', expected: "The plates are clear but no bill has arrived. Ask for it. Speak now." },
  { key: 'mx-b16-n06', slot: 'B16', expected: "A promise without a time leaves you waiting. Ask when someone can check it. You are not demanding a universal service time; you are turning this repair into a checkpoint." }
];

function norm(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function wordDiffPct(a, b) {
  const wa = norm(a).split(' ').filter(Boolean);
  const wb = norm(b).split(' ').filter(Boolean);
  const setB = new Set(wb);
  const missing = wa.filter((w) => !setB.has(w));
  return { pct: wa.length ? Math.round((missing.length / wa.length) * 100) : 0, missing };
}

async function stt(mp3Path) {
  const fd = new FormData();
  fd.append('model_id', 'scribe_v1');
  fd.append('language_code', 'eng');
  fd.append('file', new Blob([readFileSync(mp3Path)], { type: 'audio/mpeg' }), 'clip.mp3');
  const r = await fetch('https://api.elevenlabs.io/v1/speech-to-text', {
    method: 'POST',
    headers: { 'xi-api-key': API_KEY },
    body: fd
  });
  if (!r.ok) throw new Error(`${r.status} ${await r.text()}`);
  const j = await r.json();
  return j.text || '';
}

async function main() {
  console.log(`QA prioritário — ${CLIPS.length} clipes\n`);
  let ok = 0, warn = 0, fail = 0;
  for (const c of CLIPS) {
    const mp3 = join(audioRoot, c.slot, `${c.key}.mp3`);
    if (!existsSync(mp3)) {
      console.log(`✗ ${c.key}: arquivo não existe (${mp3})`);
      fail++; continue;
    }
    if (!c.expected) {
      console.log(`? ${c.key}: sem texto esperado localizado no episode.json (verificar manualmente)`);
      warn++; continue;
    }
    try {
      const heard = await stt(mp3);
      const { pct, missing } = wordDiffPct(c.expected, heard);
      const tag = pct === 0 ? '✓' : pct <= 15 ? '~' : '✗';
      if (tag === '✓') ok++; else if (tag === '~') warn++; else fail++;
      console.log(`${tag} ${c.key} (${c.slot}) — ${pct}% de palavras esperadas ausentes na transcrição`);
      if (pct > 0) {
        console.log(`   esperado: ${c.expected.slice(0, 100)}...`);
        console.log(`   ouvido:   ${heard.slice(0, 100)}...`);
        if (missing.length) console.log(`   faltando: ${missing.slice(0, 12).join(', ')}`);
      }
    } catch (e) {
      console.log(`✗ ${c.key}: erro na chamada STT — ${e.message}`);
      fail++;
    }
  }
  console.log(`\nResumo: ${ok} ok · ${warn} atenção · ${fail} falha/erro`);
}

main();
