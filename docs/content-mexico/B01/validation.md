# Validação editorial — B01

**Executada em:** 2026-08-04 (retroativa, pelo Claude — B01 não tinha validation.md separado no handoff recebido do Codex)

## Coerência de produto

- Primeiro slot do nível básico: introduz o modelo de som mexicano (5 vogais
  estáveis, seseo, yeísmo, acento de intensidade) como "kit de reparo", não
  como aula de fonética acadêmica.
- Usa três cenários de chegada (mercado, táxi, recepção do hotel) que
  reaparecem em slots posteriores — coerente com a progressão do curso.
- `moldura: "ganha"` é adequada: o slot fecha com uma vitória concreta (abrir
  a reserva no hotel), não com um alerta de risco.
- Nenhum vestígio de Espanha, castelhano peninsular, euro ou referência a
  Schengen/ETIAS.

## Coerência com o modelo de som mexicano

- Seseo (`gracias`, `cincuenta`) e yeísmo (`ayuda`, `llave`) descritos
  corretamente e de forma consistente com o `aprofundar` de B02/B03.
- Pinyin/transliteração fonética (ex. `oh-TEL`, `reh-sehr-bah-SYOHN`) é
  consistente internamente e não usa convenções do espanhol peninsular.

## Validação técnica pré-áudio

- 4 arquivos JSON analisados (episode, phrases, consulta, quiz — B01–B03 não
  têm arquivo `validation.md` de origem, mas têm os mesmos 4 artefatos que os
  demais slots).
- **29 chaves de áudio usadas** (`audioKey` + `promptAudioKey` +
  `introAudioKey`, somando episode.json e quiz.json) e **29 chaves no
  `audio-manifest.pre.json`** — nenhuma faltando, nenhuma órfã.
- Nenhuma chave duplicada.

**Veredito:** conteúdo estruturalmente correto e coerente com o produto;
tecnicamente pronto. Áudio já foi gerado (505 clipes, incluindo os de B01) e
está pendente apenas de QA auditivo/ASR — ver seção de áudio do handoff geral.
Imagem `mexico-b01-pronunciation-v2.png` existe mas segue a regra geral: não
tratar como aprovada sem auditoria visual dedicada.
