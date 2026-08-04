# Validação editorial — B03

**Executada em:** 2026-08-04 (retroativa, pelo Claude — B03 não tinha validation.md separado no handoff recebido do Codex)

## Coerência de produto

- Terceiro slot do nível básico: ensina uma "escada de reparo" de
  comunicação (dizer que não entendeu → pedir para repetir mais devagar →
  pedir para escrever → pedir para mostrar no mapa), não frases soltas de
  emergência.
- `moldura: "protege"` é a escolha certa aqui (diferente de B01/B02, que são
  `"ganha"`) — o tema é proteger o aluno de mal-entendidos, coerente com o
  padrão de molduras usado no restante do curso.
- O `aprofundar` explicitamente instrui a não empilhar todos os degraus da
  escada de uma vez ("comece pelo menor reparo") — é um conselho pedagógico
  real, não preenchimento.
- Nenhum vestígio de Espanha/euro/Schengen.

## Coerência com a pesquisa mexicana

- "¿Mande?" tratado de forma consistente com B02 (cortesia, não submissão).
- Não inventa vocabulário: as quatro frases de reparo ("No entendí", "¿Me lo
  puede repetir más despacio?", "¿Me lo puede escribir?", "¿Me lo muestra en
  el mapa?") são de fato progressivamente mais custosas para o interlocutor,
  o que sustenta a lógica de "menor reparo primeiro".

## Validação técnica pré-áudio

- 4 arquivos JSON analisados (episode, phrases, consulta, quiz).
- **24 chaves de áudio usadas** e **24 chaves no `audio-manifest.pre.json`** —
  nenhuma faltando, nenhuma órfã, nenhuma duplicada.

**Veredito:** conteúdo estruturalmente correto e coerente com o produto;
tecnicamente pronto. Áudio já foi gerado, pendente de QA auditivo/ASR.
Imagem `mexico-b03-repair-v2.png` existe mas segue a regra geral: não tratar
como aprovada sem auditoria visual dedicada.
