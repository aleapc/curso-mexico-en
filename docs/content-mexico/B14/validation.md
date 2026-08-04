# Validação editorial — B14

**Executada em:** 2026-08-04

## Coerência de produto

- Cumpre o slot B14: conta, número receptivo, cobrança indevida, gorjeta
  voluntária, cartão e recibo formam uma única sequência de autorização.
- O beat de golpe/cobrança entra dentro de B14, conforme `PRODUTO.md`, sem virar
  episódio defensivo separado.
- O primeiro `responde` recupera `¿Puedo pagar con tarjeta?` da B06. B14 não
  reapresenta o molde; acrescenta conta → revisão → terminal → comprovante.
- Números produtivos recebem a escotilha prevista: mostrar papel, tela ou
  calculadora. O número falado aparece do lado receptivo.
- Não há porcentagem universal de gorjeta. Remover uma linha não autorizada e
  escolher uma gratificação voluntária são ações separadas.

## Coerência mexicana

- `cuenta`, `cargo`, `propina`, `terminal`, `recibo`, `pesos` e `tarjeta`
  descrevem objetos e decisões observáveis na cena.
- A orientação está ancorada em comunicados da Profeco de 2025–2026: preços em
  moeda nacional com impostos, comprovante, gorjeta voluntária e revisão de
  cobranças não autorizadas.
- A aula não presume que todo estabelecimento aceite cartão; essa pergunta
  ocorre antes do consumo e permanece recuperável no modo consulta.
- Não importa porcentagem norte-americana, euro, tapas, raciones ou práticas do
  curso Espanha.

## Validação técnica pré-áudio

- 5 arquivos JSON analisados com sucesso.
- 42 chaves usadas pelo episódio/quiz e 42 chaves no manifesto.
- Nenhuma chave ausente, duplicada ou órfã.
- 8 frases-alvo, 5 cards de consulta e quiz com 5 questões.
- Todos os cards têm no máximo três turnos e terminam com ação utilizável.
- Ensaio do gerador: 42 clipes pendentes, 3.267 caracteres e quatro papéis de
  voz reconhecidos.

## Geração e QA estrutural de áudio

- Conta conferida imediatamente antes da geração: plano `growing_business`,
  2.081 de 2.005.257 créditos usados.
- 42 clipes gerados com Matilda, Eric, Fernanda MX e Carlos MX.
- 42 MP3 presentes, 3.370.579 bytes, sem arquivo vazio ou assinatura inválida.
- Segunda execução idempotente encontrou zero pendências; o manifesto global
  passou a conter 420 entradas.
- A leitura da API permaneceu em 2.081 após o lote. Revisão auditiva/ASR e
  validação dos players continuam sendo portões separados.

**Veredito:** conteúdo final estruturado, pesquisado e com áudio estruturalmente
íntegro; pronto para imagem e QA auditivo. A imagem deve mostrar o dedo parado
na linha extra enquanto a terminal espera — não uma pessoa genericamente
pagando.
