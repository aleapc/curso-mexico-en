# Validação editorial — B13

**Executada em:** 2026-08-03

## Coerência de produto

- Cumpre o portão de segurança de `PRODUTO.md`: preferência e alergia grave não
  compartilham a mesma moldura. A B12 abre com modificação reversível; a B13
  congela o alerta, usa um artefato escrito e treina a decisão de sair.
- O cartão não substitui a conversa: ele chega à pessoa que prepara a comida,
  enquanto a fala pergunta pela superfície e pelos utensílios concretos.
- Resposta insegura e resposta incerta conduzem à mesma ação protetora. A aula
  não ensina a pedir garantia, experimentar uma pequena quantidade ou remover
  o alérgeno visível.
- Medicamento prescrito e plano de emergência permanecem acessíveis. O curso
  ensina linguagem de viagem e não oferece aconselhamento médico.

## Coerência mexicana

- `Cacahuate` é o exemplo lexical mexicano do treino, não uma generalização
  sobre a pessoa usuária. O cartão real precisa conter o alérgeno individual.
- `Alergia grave`, `persona que prepara la comida`, `misma superficie` e
  `mismos utensilios` tornam o risco verificável sem depender de jargão.
- A cena é uma taquería possível, não uma promessa de que todo restaurante
  mexicano usa os mesmos processos ou consegue atender alergias graves.
- Não há resíduos de tapas, raciones, menú del día, cuenta europeia ou
  protocolo operacional herdado do curso Espanha.

## Validação técnica pré-áudio

- 5 arquivos JSON analisados com sucesso.
- 35 chaves usadas pelo episódio/quiz e 35 chaves no manifesto.
- Nenhuma chave ausente, duplicada ou órfã.
- 6 frases-alvo, 4 cards de consulta e quiz com 5 questões.
- O primeiro `responde` recupera `La salsa aparte, por favor.` da B12 antes de
  distinguir preferência de alergia.
- Ensaio do gerador: 35 clipes pendentes, 3.246 caracteres, quatro papéis de
  voz reconhecidos.

## Geração e QA estrutural de áudio

- Conta conferida imediatamente antes da geração: plano `growing_business`,
  0 de 2.005.257 créditos usados.
- 35 clipes gerados com Matilda, Eric, Fernanda MX e Carlos MX.
- 35 MP3 presentes, 3.318.869 bytes, sem arquivo vazio ou assinatura inválida.
- Segunda execução idempotente encontrou zero pendências; o manifesto global
  passou a conter 378 entradas.
- A API registrou 1.356 créditos usados após o lote. Revisão auditiva/ASR e
  validação dos players continuam sendo portões separados.

**Veredito:** conteúdo final estruturado, pesquisado e com áudio estruturalmente
íntegro; pronto para imagem e QA auditivo. A imagem precisa mostrar o cartão
atravessando a fronteira entre mesa/balcão e cozinha — não comida mexicana
genérica.
