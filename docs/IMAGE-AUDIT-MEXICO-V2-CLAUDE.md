# Auditoria visual independente — acervo v2 México (Claude, 2026-08-04)

**Contexto:** o proprietário revogou a aprovação anterior de todas as 16
imagens `-v2` em 2026-08-04, alegando desvio conceitual persistente. Cada
`visual-brief-v2.md` já continha uma seção "Resultado aprovado" com
`Veredito: APROVADA` escrita pelo próprio Codex — ou seja, 16/16 imagens
estavam auto-aprovadas por quem as gerou. Esta auditoria ignora esses
vereditos e reavalia cada imagem, de forma independente, contra o beat
específico descrito no próprio brief (não contra a "situação" genérica).

## Resumo

| Slot | Veredito Claude | Motivo |
|---|---|---|
| B01 | **Aprovada** | Confirmação de destino antes de o carro sair; ambíguo se lê como táxi autorizado, mas dentro do aceitável |
| B02 | **Ressalva** | Cenário lê como rua mediterrânea/espanhola, não claramente mexicana |
| B03 | **Aprovada** | Troca de canal (escrever no bloco) bem representada |
| B04 | **Aprovada** | Transferência do endereço da tela para o cartão junto ao passaporte, telefone apagado |
| B05 | **Ressalva** | Farda escura tática + dispositivo circular na cabine lembram vagamente scanner/EES, que o brief pedia para evitar |
| B06 | **Aprovada** | Gesto aberto da funcionária, mala junto ao corpo, celular baixo |
| B07 | **Aprovada** | Endereço e cotação comparados antes do veículo, sem preço legível |
| B08 | **Aprovada** | Ponto único marcado no mapa, esquina real e arquitetura claramente mexicana ao fundo |
| B09 | **REJEITADA** | A imagem mostra uma catraca/borboleta de validação — item explicitamente listado em "Evitar: catraca ou arquitetura que identifique um sistema específico". O dedo da funcionária aponta na direção do viajante, não para o leitor. |
| B10 | **Aprovada** | Placa `JALE`, mão puxando a porta, fluxo de pessoas não bloqueado — brief cumprido à risca |
| B11 | **Ressalva** | Ação principal (caderneta antes da comida) está correta, mas a "acompanhante" e a "mesa vazia para dois" do brief não aparecem claramente — há uma mulher sentada sozinha ao fundo, não um par |
| B12 | **REJEITADA** | O dedo do viajante aponta diretamente para os tacos, não para "o espaço ao lado" como o brief exige (“evitar: … apontar para a comida”). O trompo de carne ao pastor em primeiro plano e o prato preenchendo o quadro tornam a comida protagonista — exatamente o "close gastronômico glamouroso" que o brief pede para evitar. |
| B13 | **Aprovada** | Cartão nitidamente em trânsito para a cozinha, nenhuma comida servida |
| B14 | **Aprovada** | Dedo aponta linha específica da conta, cartão retido pelo viajante, terminal afastada — cumpre os 5 critérios do brief |
| B15 | **Aprovada** | Camisa, etiqueta e recibo voltam juntos; segunda peça visualmente equivalente |
| B16 | **Aprovada** | Chave ainda na mão da recepcionista, mapa esquemático com andar alto indicado |

**Contagem:** 11 aprovadas, 3 com ressalva (revisão recomendada antes de
publicar), 2 rejeitadas (regenerar).

## Padrão identificado

As duas rejeições e ao menos uma ressalva (B02) repetem o mesmo tipo de erro
que motivou a ordem de parada original: a IA geradora tende a entregar a
"cena mais fotogênica e genérica" da situação (turnstile de metrô por reflexo
ao ouvir "validar boleto"; comida em destaque por reflexo ao ouvir "taqueria";
rua bonita genérica por reflexo ao ouvir "loja de bairro") em vez do beat
textual específico do brief — mesmo quando o próprio brief já continha uma
lista explícita de "evitar" que cobria exatamente esse erro. Isso sugere que
o processo de geração no Mac não está de fato checando a imagem final contra
a lista de "evitar" do brief antes de escrever "aprovada" — a auto-aprovação
parece automática/otimista, não uma verificação real.

## Recomendação

Antes de qualquer nova geração em lote (B17–A08), recomendo:

1. Regenerar B09 e B12 com o mesmo brief, mas reforçando explicitamente os
   itens da lista "evitar" que falharam (sem catraca/borboleta; dedo aponta
   para o espaço ao lado do prato, nunca para a comida).
2. Decidir com o proprietário se B02, B05 e B11 precisam regeneração ou se a
   ressalva é aceitável (nenhuma delas quebra uma regra "evitar" de forma tão
   direta quanto B09/B12 — são leituras de ambiguidade, não violações
   explícitas).
3. Adicionar uma etapa de verificação real (visual, não apenas textual) antes
   de qualquer imagem futura ser marcada "aprovada" no próprio brief — a
   auto-aprovação demonstrou não ser confiável.
