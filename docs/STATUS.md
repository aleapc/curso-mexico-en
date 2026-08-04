# Estado do SKU EN→México

**Fase A — pesquisa, configuração e autoria. Não publicar.**

Este worktree foi derivado apenas para preservar a arquitetura, o contrato dos
36 slots e as telas. Conteúdo, consulta, imagens e áudio ainda são do destino
Espanha e precisam ser substituídos por material mexicano revisado.

## Correção de sequência — 2026-08-03

As 17 imagens `mexico-*.png` geradas antes da autoria dos episódios são
**rascunhos não aprovados**. Elas não contam como cobertura visual e não devem
ser ligadas à interface. Foram produzidas a partir do syllabus, que define a
situação, mas não contém ainda os beats concretos de cada aula.

Ordem obrigatória por slot:

1. autorar e validar episódio, aprofundar, consulta, quiz e manifesto pré-áudio;
2. extrair do episódio o acontecimento visual específico que representa a aula;
3. escrever o brief visual citando esses beats;
4. gerar a imagem com sufixo `-v2`, sem sobrescrever o rascunho;
5. validar relação com a aula, coerência da coleção e corte no card-herói;
6. somente então converter/integrar no nome canônico usado pela interface.

Direção visual canônica: `docs/IMAGE-DIRECTION-MEXICO.md`.

## Áudio — ElevenLabs liberada em 2026-08-03

- Casting do SKU fechado: Matilda e Eric para a guia em inglês americano;
  Fernanda e Carlos Garza para o espanhol mexicano.
- B01–B16 geradas a partir dos manifestos pré-áudio validados: **505 clipes**.
- QA estrutural aprovado: 505 entradas no manifesto; na B16, 40 chaves
  esperadas, 40 MP3 e 3.287.317 bytes, sem chave ausente, arquivo vazio ou
  assinatura inválida. O acervo B01–B15 permanece preservado.
- O gerador específico `scripts/generate-mexico-audio.mjs` é idempotente por
  texto, voz e slot; uma nova execução encontra zero pendências.
- **Billing restaurado e conferido pela API em 2026-08-03:** plano
  `growing_business`, status `active`, 0 usados de 2.005.257 créditos e extensão
  habilitada. O marco anterior, durante a correção do suporte, era `payg` com
  4.743/10.000; fica preservado aqui para auditoria.
- **Portão ainda aberto:** revisão auditiva/ASR, integração controlada no runtime
  e validação dos players. Não publicar antes desses três passos.

## Progresso de autoria

- **B01:** pacote pré-áudio completo e validado em `docs/content-mexico/B01/`:
  episódio, 5 frases-alvo, aprofundar, 2 cards de consulta, quiz com 5 questões,
  manifesto de 29 clipes e brief visual v2. Imagem v2 aprovada em
  `static/img/mexico-b01-pronunciation-v2.png`. Ainda não integrado ao runtime;
  aguarda vozes, áudio/QA e migração controlada.
- **B02:** pacote pré-áudio completo e validado em `docs/content-mexico/B02/`:
  episódio, 6 frases-alvo, aprofundar, 3 cards de consulta, quiz com 5 questões,
  manifesto de 29 clipes e brief visual v2. Imagem v2 aprovada em
  `static/img/mexico-b02-greeting-v2.png`.
- **B03:** pacote pré-áudio completo e validado em `docs/content-mexico/B03/`:
  episódio, 4 frases-alvo, aprofundar, 3 cards de consulta, quiz com 5 questões,
  manifesto de 24 clipes e brief visual v2. Imagem v2 aprovada em
  `static/img/mexico-b03-repair-v2.png`.
- **B04:** pacote pré-áudio completo e validado em `docs/content-mexico/B04/`:
  episódio, 4 frases-alvo, aprofundar, 3 cards de consulta, quiz com 5 questões,
  manifesto de 25 clipes, 4 fatos datados e brief visual v2. Imagem v2 aprovada
  em `static/img/mexico-b04-ready-v2.png`.
- **B05:** pacote pré-áudio completo e validado em `docs/content-mexico/B05/`:
  episódio, 4 frases-alvo, aprofundar, 3 cards de consulta, quiz com 5 questões,
  manifesto de 25 clipes, 2 fatos datados e brief visual v2. Imagem v2 aprovada
  em `static/img/mexico-b05-immigration-v2.png`.
- **B06:** pacote pré-áudio completo e validado em `docs/content-mexico/B06/`:
  episódio, 5 frases-alvo, aprofundar, 4 cards de consulta, quiz com 5 questões,
  manifesto de 28 clipes e brief visual v2. Imagem v2 aprovada em
  `static/img/mexico-b06-arrival-pickup-v2.png`.
- **B07:** pacote pré-áudio completo e validado em `docs/content-mexico/B07/`:
  episódio, 5 frases-alvo, aprofundar, 4 cards de consulta, quiz com 5 questões,
  manifesto de 28 clipes e brief visual v2. Imagem v2 aprovada em
  `static/img/mexico-b07-transport-v2.png`.
- **B08:** pacote pré-áudio completo e validado em `docs/content-mexico/B08/`:
  episódio, 6 frases-alvo, aprofundar, 4 cards de consulta, quiz com 5 questões,
  manifesto de 31 clipes e brief visual v2. Imagem v2 aprovada em
  `static/img/mexico-b08-directions-v2.png`.
- **B09:** pacote pré-áudio completo e validado em `docs/content-mexico/B09/`:
  episódio, 6 frases-alvo, aprofundar, 4 cards de consulta, quiz com 5 questões,
  manifesto de 33 clipes e brief visual v2. Imagem v2 aprovada em
  `static/img/mexico-b09-metro-v2.png`.
- **B10:** pacote pré-áudio completo e validado em `docs/content-mexico/B10/`:
  episódio integralmente receptivo, 6 alvos de reconhecimento, aprofundar,
  4 cards de consulta, quiz com 5 questões, manifesto de 21 clipes e brief
  visual v2. Imagem v2 aprovada em `static/img/mexico-b10-signs-v2.png`.
- **B11:** pacote pré-áudio completo e validado em `docs/content-mexico/B11/`:
  episódio, 6 frases-alvo, aprofundar, 4 cards de consulta, quiz com 5 questões,
  manifesto de 33 clipes e brief visual v2. Imagem v2 aprovada em
  `static/img/mexico-b11-taqueria-order-v2.png`.
- **B12:** pacote pré-áudio completo e validado em `docs/content-mexico/B12/`:
  episódio, 7 frases-alvo, aprofundar, 4 cards de consulta, quiz com 5 questões,
  manifesto de 37 clipes e brief visual v2. Imagem v2 aprovada em
  `static/img/mexico-b12-taco-build-v2.png`; não integrado ao runtime.
- **B13:** pacote editorial completo e validado em
  `docs/content-mexico/B13/`: episódio, 6 frases-alvo, aprofundar, 4 cards de
  consulta, quiz com 5 questões, manifesto de 35 clipes, pesquisa de segurança
  e brief visual v2. Os 35 clipes foram gerados e passaram no QA estrutural. A
  imagem v2 foi aprovada em `static/img/mexico-b13-allergy-card-v2.png`; QA
  auditivo/ASR e integração no runtime permanecem pendentes.
- **B14:** pacote editorial completo e validado em
  `docs/content-mexico/B14/`: episódio, 8 frases-alvo, aprofundar, 5 cards de
  consulta, quiz com 5 questões, manifesto de 42 clipes, pesquisa oficial e
  brief visual v2. Os 42 clipes foram gerados e passaram no QA estrutural. A
  imagem v2 foi aprovada em `static/img/mexico-b14-extra-charge-v2.png`; QA
  auditivo/ASR e integração no runtime permanecem pendentes.
- **B15:** pacote editorial completo e validado em
  `docs/content-mexico/B15/`: episódio, 9 frases-alvo, aprofundar, 4 cards de
  consulta, quiz com 5 questões, manifesto de 45 clipes, pesquisa oficial e
  brief visual v2. Os 45 clipes foram gerados e passaram no QA estrutural. A
  imagem v2 foi aprovada em `static/img/mexico-b15-size-exchange-v2.png`; QA
  auditivo/ASR e integração no runtime permanecem pendentes.
- **B16:** pacote editorial completo e validado em
  `docs/content-mexico/B16/`: episódio, 7 frases-alvo, aprofundar, 4 cards de
  consulta, quiz com 5 questões, manifesto de 40 clipes, pesquisa oficial e
  brief visual v2. Os 40 clipes foram gerados e passaram no QA estrutural. A
  imagem v2 foi aprovada em `static/img/mexico-b16-quiet-room-v2.png`; QA
  auditivo/ASR e integração no runtime permanecem pendentes.
- **B17–A08:** ainda em roteiro editorial; não prontos para imagem ou voz.
