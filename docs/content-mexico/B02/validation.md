# Validação editorial — B02

**Executada em:** 2026-08-04 (retroativa, pelo Claude — B02 não tinha validation.md separado no handoff recebido do Codex)

## Coerência de produto

- Segundo slot do nível básico: ensina timing de cortesia (cumprimento antes
  do pedido, "con permiso" antes do corpo se mover, "gracias"/"hasta luego"
  antes de fechar a porta), não vocabulário de cortesia isolado.
- `moldura: "ganha"` é adequada — não há risco físico ou legal envolvido, é
  puramente social.
- Introduz "dígame", "pásele" e "que le vaya bien" como itens **receptivos**
  (reconhecer, não produzir), deixando claro no `aprofundar` — evita a
  armadilha de pedir ao aluno para produzir expressões regionais complexas
  cedo demais.
- Nenhum vestígio de Espanha/euro/Schengen.

## Coerência com a pesquisa mexicana

- Trata "¿mande?" como marcador de cortesia (citando a Academia Mexicana),
  não como "submissão colonial" — mesma posição adotada em B03. Consistente.
- Distingue "con permiso" (antes de cruzar espaço físico) de "perdón" (depois
  de um erro/esbarrão) — distinção real e útil, não uma simplificação
  didática vazia.

## Validação técnica pré-áudio

- 4 arquivos JSON analisados (episode, phrases, consulta, quiz).
- **29 chaves de áudio usadas** e **29 chaves no `audio-manifest.pre.json`** —
  nenhuma faltando, nenhuma órfã, nenhuma duplicada.

**Veredito:** conteúdo estruturalmente correto e coerente com o produto;
tecnicamente pronto. Áudio já foi gerado, pendente de QA auditivo/ASR.
Imagem `mexico-b02-greeting-v2.png` existe mas segue a regra geral: não
tratar como aprovada sem auditoria visual dedicada.
