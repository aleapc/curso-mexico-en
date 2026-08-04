# Gap de integração ao runtime — México (Claude, 2026-08-04)

**Resumo em uma frase:** o conteúdo do México não está "quase pronto, só falta
plugar" — ele foi autorado num formato mais simples que não é compatível com o
contrato de 36 slots que o app realmente consome, e cobre menos da metade
dele.

## O que existe

`docs/content-mexico/B01..B16/` tem 16 pacotes (`episode.json`, `phrases.json`,
`consulta.json`, `quiz.json`, `audio-manifest.pre.json`, `visual-brief-v2.md`),
com 505 áudios já gerados e 16 imagens (5 delas em regeneração — ver
`IMAGE-AUDIT-MEXICO-V2-CLAUDE.md`). `curso.config.ts` está corretamente
adaptado (moeda MXN, fuso `America/Mexico_City`). Esse conteúdo é real,
coerente e bem pesquisado (`docs/pesquisa-mexico.md`,
`docs/DERIVACAO-EN-esMX.md`) — não é lixo, é trabalho genuíno.

## Por que ele não roda hoje

O app não lê `docs/content-mexico/`. Ele lê `src/lib/course/ep-*.json`, que
hoje é **100% cópia idêntica do curso Espanha** (confirmado byte a byte). Isso
significa duas coisas ao mesmo tempo:

1. **Cobertura:** `slots.json` (o contrato, travado por versão, verificado por
   `scripts/valida-estrutura.mjs`) exige EXATAMENTE 36 slots: 18 em `básico`
   (B01–B18), 10 em `intermediário` (I01–I10), 8 em `avançado` (A01–A08).
   México só tem B01–B16 autorado — **16 de 36**. B17, B18 e todo I01–A08
   nunca foram escritos.
2. **Formato:** mesmo os 16 que existem usam um schema mais simples
   (`steps[]` + `aprofundar`) que não tem equivalente para campos que o
   contrato real exige por slot: `moldes` (padrões geradores), `clique`
   (gancho de retenção), `permissao` (a frase que licencia o erro),
   `fichasCulturais` (cartões de insight cultural com `evidencia` citada —
   ex. `"evidencia": "CONSENSO"` em B06 de Espanha). Não é um `map()`
   mecânico de um formato pro outro — são campos que **não existem** na
   pesquisa/conteúdo atual do México porque o brief que gerou B01-B16 nunca
   pediu por eles.

Consequência prática: rodei `npm run build` no worktree canônico. Ele passa
`outline:conferir` e `estrutura:estrito` (depois que corrigi o outline
desatualizado — ver commit `05829f4`), mas falha em `audio:check` com
**2467 clipes faltando** — porque o build está validando os 2467 clipes que
o conteúdo-Espanha-copiado exige, não o conteúdo México. Isto é: o build
"passa" hoje só porque ele está checando a coisa errada.

## O que os 505 áudios do México não são um desperdício

As frases-alvo em `docs/content-mexico/B01-B16/phrases.json` (ex. "Tengo una
reservación", "¿Me lo puede escribir?") são prováveis candidatas a
sobreviver numa reescrita para o contrato real — o conteúdo linguístico em
si é bom. O que falta não é regravar áudio, é: (a) reestruturar essas 16
partes no formato `ep-*.json` com `moldes`/`clique`/`permissao` reais, e
(b) autorar do zero as 20 partes que não existem (B17–A08), incluindo
pesquisa cultural com evidência citada nas `fichasCulturais` — a mesma barra
que Espanha cumpriu (`"evidencia": "CONSENSO"` etc.).

## Tamanho do trabalho restante, honestamente

Isso não é um ajuste técnico de uma sessão — é um projeto de autoria
comparável ao que já foi feito para Espanha (que tem `pesquisa-espanha.md`,
`GRADE-36-ESPANHA.md`, `SESSAO-COMPLETA-2026-08-01.md` documentando várias
sessões de trabalho). Não decidi prosseguir com isso sem alinhar escopo:
regravar 16 slots + autorar 20 do zero, cada um com pesquisa cultural
evidenciada, é semanas de trabalho editorial, não um "ajuste".

## Recomendação

Três caminhos, não mutuamente exclusivos:

1. **MVP fiel ao contrato, só com o que já existe:** reestruturar B01–B16
   para o formato real (`moldes`/`clique`/`permissao`/`fichasCulturais`
   mínimos), publicar só o módulo `básico` incompleto (16/18) — o
   `valida-estrutura.mjs` provavelmente bloqueia isso (contrato exige os 36),
   então precisaria de uma exceção/flag explícita ou aceitar que o build
   falha até B17/B18 existirem.
2. **Completar o básico primeiro (B01–B18), depois intermediário/avançado**
   — meta menor e mais realista que os 36 de uma vez.
3. **Tratar como projeto separado**, fora do escopo desta sessão de retomada,
   e no curto prazo só publicar Espanha + deixar México em desenvolvimento
   visível internamente (não publicado), o que já é o estado atual de fato.

Não escolhi nenhum dos três sozinho — é uma decisão de escopo/prioridade do
dono do produto, não uma correção técnica.
