# QA de áudio — lote prioritário (Claude, 2026-08-04)

**Contexto:** Codex não fez QA auditivo dos 505 clipes (sem retry/telemetria
no gerador). Indicou 13 candidatos como fila inicial: 7 por guia mais longa
(risco de corte/truncamento), 6 por possível fala rápida. Rodei
`scripts/qa-mexico-audio-priority.mjs` — transcrição via ElevenLabs Scribe
(STT) comparada ao texto esperado do `episode.json`, palavra a palavra.

## Resultado

**8/13 limpos** (0% de divergência). **5/13 com diferença mínima**, quatro
delas explicadas por normalização de grafia britânica→americana no STT, não
por defeito de fala:

| Clipe | % divergência | Causa provável |
|---|---:|---|
| `mx-b04-n02` | 7% | "authorised"/"e-gate" — grafia britânica no texto, STT normaliza pro americano |
| `mx-b07-n01` | 5% | "memorise"/"colour"/"authorised" — mesmo padrão |
| `mx-b09-p06` | 5% | "centre" — mesmo padrão |
| `mx-b09-n07` | 2% | "B09" transcrito como "B zero nine" — só forma de escrever o número |
| `mx-b10-n04` | 3% | **"Taquilla" ouvido como "Tequila"** — único caso que não é artefato de grafia |

Nenhum dos 7 candidatos por duração longa mostrou sinal de corte/truncamento
(transcrição completa, do início ao fim do texto esperado). Nenhum dos 6
candidatos por fala rápida mostrou sinais de atropelo (STT capturou o texto
inteiro sem lacunas no meio).

## O único item que precisa de ouvido humano

`static/audio/mexico/B10/mx-b10-n04.mp3` — o STT ouviu "Tequila" onde o
episódio diz "Taquilla" (window/guichê). Pode ser: (a) o STT confundindo uma
palavra em espanhol dentro de uma frase em inglês (explicação mais provável,
já que "tequila" é uma palavra muito mais comum no vocabulário do modelo de
inglês que "taquilla"), ou (b) a voz-guia realmente pronunciou de um jeito
ambíguo. Recomendo ouvir esse clipe especificamente antes de aprovar B10.

## Limite honesto desta QA

Só cobre 13 dos 505 clipes (2,6%), e só a voz-guia em inglês — nenhum dos 218
clipes em espanhol mexicano (Fernanda MX/Carlos MX) foi verificado ainda.
`scripts/qa-mexico-audio-priority.mjs` cobre só esses 13 keys fixos; para
rodar nos 505 seria preciso generalizar pra ler `manifest.json` inteiro e
decidir uma métrica de comparação pro espanhol (o `qa-asr.mjs` existente é
inútil aqui — é hardcoded pra mandarim).
