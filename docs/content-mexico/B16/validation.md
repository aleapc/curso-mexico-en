# Validação editorial — B16

**Executada em:** 2026-08-04

## Coerência de produto

- Cumpre B16: reserva recuperada → preferências antes da chave → checkout
  tardio e custo consultados → falha observável → prazo → troca de quarto.
- O primeiro `responde` recupera a reserva nominal da B04; B16 não refaz a
  preparação da viagem e não antecipa o serviço de lavanderia da B17.
- Quarto silencioso, piso alto e saída tardia são pedidos respondidos por
  disponibilidade e política. Nenhum deles aparece como direito universal.
- A reclamação nomeia objeto e falha, pede um marco temporal e só então sobe um
  nível. A troca não abre a conversa como ameaça.

## Coerência mexicana

- `reservación`, `habitación`, `piso alto`, `cargo adicional`, `mantenimiento`
  e `cambiar la habitación` compõem uma recepção natural no México.
- `Hasta las dos`, o cargo e `veinte minutos` pertencem ao hotel fictício da
  cena; não são apresentados como prazo ou preço nacional.
- As características prometidas do serviço precisam ser claras e verdadeiras;
  uma prestação deficiente tem proteção de consumo, mas a aula treina primeiro
  a resolução operacional verificável.

## Validação técnica pré-áudio

- 5 arquivos JSON analisados com sucesso.
- 40 chaves únicas usadas pelo episódio/quiz e 40 chaves no manifesto.
- Nenhuma chave ausente, duplicada ou órfã.
- 7 frases-alvo, 4 cards de consulta e quiz com 5 questões.
- Nenhum card ultrapassa três turnos.
- O primeiro `responde` recupera nominalmente a reserva da B04.
- Ensaio do gerador: 40 clipes pendentes, 3.144 caracteres e quatro papéis de
  voz reconhecidos.

## Geração e QA estrutural de áudio

- Conta conferida imediatamente antes da geração: plano `growing_business`,
  6.032 de 2.005.257 créditos usados; a API respondeu normalmente.
- 40 clipes gerados com Matilda, Eric, Fernanda MX e Carlos MX.
- 40 MP3 presentes, 3.287.317 bytes, sem arquivo vazio ou assinatura inválida.
- Segunda execução idempotente encontrou zero pendências; o manifesto global
  passou a conter 505 entradas, 40 delas da B16.
- A API registrou 8.056 créditos usados após o lote. Revisão auditiva/ASR e
  validação dos players continuam sendo portões separados.

**Veredito:** conteúdo final estruturado, pesquisado, com áudio estruturalmente
íntegro e imagem v2 aprovada. O herói registra a melhoria antes da chave: a
recepcionista localiza no mapa interno um quarto longe do elevador e em piso
alto enquanto o cartão ainda não foi entregue. QA auditivo/ASR e runtime
continuam pendentes.
