# Pesquisa de destino — México (EN→ES mexicano)

## Decisão de catálogo

**SKU inicial:** inglês americano → espanhol mexicano, para viagem ao México.

O corredor EUA→México soma 14,148 milhões no mapa comercial: é a maior
oportunidade compradora ainda sem produto. O destino exige acervo próprio:
sons, vocabulário, cenas, preços, segurança, imagens e fala nativa mexicana
não são derivados do produto Espanha.

## Fatos operacionais confirmados

- **911** é o número nacional único de emergência, gratuito, 24 horas por dia,
  em todo o México. Encaminha para polícia, ambulância, bombeiros ou proteção
  civil. Fonte oficial: <https://www.gob.mx/segob/es/articulos/que-es-9-1-1?idiom=es>.
- **078** é a linha nacional de assistência turística, segundo o portal oficial
  Visit Mexico. Fonte: <https://visitmexico.com/en/pagina/emergencias>.
- O bolso do viajante deve usar MXN como moeda local e USD como moeda de casa
  deste SKU. Dados de tomada, água, gorjeta, transporte e câmbio exigem fontes
  próprias e revisão antes de entrarem no curso.

## Guardrails

1. O corpus herdado de EN→Espanha permanece apenas como referência estrutural;
   não pode ser publicado como México.
2. Antes de geração de áudio: 36 slots reescritos, índice de consulta mexicano,
   manifestos, imagens e revisão de variedade regional.
3. A geração fica aguardando a liberação da ElevenLabs e passa por ASR e todos
   os validadores antes de qualquer deploy.

## B01 — base fonética verificada para EN-US → espanhol mexicano

**Estado:** suficiente para autoria do slot B01; revisão 2026-08-03.

### O que muda em relação ao curso Espanha

- O modelo mexicano é **seseante**: `s`, `z` e `c` antes de `e/i` convergem no
  som /s/. Portanto `gracias`, `cincuenta` e `zapato` não usam o `th` de
  *think* ensinado no SKU Espanha. A Academia Mexicana da Língua confirma que
  na América não há a oposição /s/ × /θ/ usada em grande parte da Espanha.
- O modelo mexicano é **yeísta**: `ll` e `y` não formam dois fonemas distintos.
  Para este comprador, a aproximação inicial é o `y` de *yes*, sem importar a
  pronúncia rioplatense de `ll/y` para o SKU México.
- O inventário descrito pela Academia Mexicana da Língua conserva cinco
  fonemas vocálicos. O programa motor de palma plana e vogal sem deslizamento
  continua válido para o anglófono americano.
- Tap e vibrante (`pero` × `perro`), J/G forte, ritmo silábico e acento lexical
  continuam úteis, mas a aula deve prometer inteligibilidade, nunca apagar o
  sotaque do comprador.

### Programa motor do SKU

1. **Batidas iguais:** uma batida por sílaba; impede o anglófono de reduzir as
   sílabas fracas a schwa.
2. **Palma plana:** cinco vogais estáveis; denuncia o deslizamento de *no* e
   *México* produzido com vogal inglesa.
3. **Um soco por palavra:** marca a sílaba tônica; âncoras da viagem:
   `Mé-xi-co`, `ho-TEL`, `cho-co-LA-te`, `na-tu-RAL`.
4. **Flick curto:** tap de `r` em `pero`, `gracias` e `quiero`; a vibrante de
   `perro` é bônus e não condição para ser entendido.

### Cenas que B01 deve usar

- táxi autorizado: `Al hotel, por favor`;
- recepção: `Tengo una reservación`;
- mercado ou balcão: `No, gracias` e `Quiero chocolate`;
- contraste auditivo mexicano obrigatório: `gracias` com /s/, nunca com /θ/.

Essas cenas dão uso imediato aos gestos e impedem que B01 vire uma aula
abstrata de fonética. A imagem só poderá nascer depois que uma dessas trocas
governar o episódio final.

### Fontes

- Academia Mexicana de la Lengua, *Lengua oficial*, capítulo “El español
  mexicano”, José G. Moreno de Alba: sistema de cinco vogais; espanhol mexicano
  seseante e yeísta.
  <https://academia.org.mx/aml_static/publicaciones/muestras/Lengua-oficial-muestra.pdf>
- Academia Mexicana de la Lengua, consulta “Diferencia entre s y z”: na América
  não se realiza a distinção /s/ × /θ/.
  <https://academia.org.mx/consultas/consultas-frecuentes/item/diferencia-entre-s-y-z>
- CEPE-UNAM, “Retos de la pronunciación del español de México”: descrição
  pedagógica de `ll/y`, J, tap e vibrante no espanhol mexicano.
  <https://floresdenieve.cepe.unam.mx/articulo.php?id_art=456>

### Limites da evidência

O México tem variação regional real. B01 usa um modelo nacional neutro de
viagem e não apresenta qualquer realização como “o sotaque mexicano”. Redução
vocálica regional, assibilação de `r` e outros traços locais ficam fora do
módulo básico; quando necessários, entram receptivamente em A01.

## B02 — cortesia de entrada, passagem e saída

**Estado:** suficiente para autoria do slot B02; revisão 2026-08-03.

O núcleo produtivo permanece curto: `buenos días/tardes`, `con permiso`,
`gracias`, `hasta luego` e `igualmente`. A diferença mexicana entra sobretudo
no que volta: `pásele`, `dígame` e `que le vaya bien` devem ser reconhecidos sem
obrigar o viajante a performar fórmulas locais.

`¿Mande?` entra apenas como ficha receptiva. A Academia Mexicana da Língua o
registra como resposta cortês a um chamado, não como submissão colonial; o uso
é mexicano, ainda comum, mas não precisa ser produzido pelo visitante.

Fonte: Academia Mexicana de la Lengua, Concepción Company, “¿Mande?: qué tanto
hay de sumisión en esta respuesta de cortesía tan usada en México”.
<https://academia.org.mx/academicos-2017/item/mande-que-tanto-hay-de-sumision-en-esta-respuesta-de-cortesia-tan-usada-en-mexico>

## B03 — escada de reparo

**Estado:** suficiente para autoria do slot B03; revisão 2026-08-03.

A escada é operacional e não depende de fato datado:

1. `No entendí.` — sinaliza a quebra sem fingir que acompanhou.
2. `¿Me lo puede repetir más despacio?` — mantém a conversa no ouvido, mas
   reduz velocidade e tamanho.
3. `¿Me lo puede escribir?` — transfere nome, número, endereço ou horário do
   ouvido para a tela/papel.
4. `¿Me lo muestra en el mapa?` — quando escrever ainda não resolve a direção.

No México, `¿mande?` pode aparecer como retorno cortês a algo não ouvido, mas
o viajante não precisa adotá-lo. B03 prioriza fórmulas transparentes, úteis em
balcão, recepção, transporte e telefone.

## B04 — documentos e confirmação antes do voo

**Estado:** suficiente para autoria do slot B04; verificado em 2026-08-03;
revalidar até 2026-11-01.

- Para entrada aérea, o viajante dos EUA precisa do **passport book** válido;
  o passport card não serve para embarque aéreo. A orientação consular mexicana
  é que o passaporte cubra toda a viagem, mas a companhia aérea também deve ser
  consultada sobre sua própria regra de embarque.
- Cidadãos dos EUA não precisam de visto mexicano para turismo sem atividade
  remunerada em visita inferior a 180 dias. Isso não promete 180 dias: a
  autoridade migratória define o período autorizado na chegada.
- Em aeroportos internacionais, a FMM é gerada no processo de entrada; o
  viajante não deve ensinar ou esperar um formulário de papel como regra geral.
  Se usar e-gate, deve guardar o recibo com QR code junto do passaporte.
- O INM pode pedir hotel, bilhete de retorno ou itinerário para confirmar o
  motivo da viagem. Por isso B04 manda salvar a reserva e o retorno também
  offline, sem transformar essa preparação em uma falsa garantia de entrada.

**Fontes oficiais:**

- Instituto Nacional de Migración, “Países y regiones que no requieren visa”:
  <https://www.inm.gob.mx/gobmx/word/index.php/paises-no-requieren-visa-para-mexico/>
- Embaixada do México nos EUA, informação consular em inglês:
  <https://consulmex.sre.gob.mx/washington/index.php/servicios-para-extranjeros-visas?id=182>
- U.S. Department of State, requisitos de entrada e saída do México:
  <https://travel.state.gov/en/international-travel/travel-advisories/mexico.html>

eSIM, cartões e cópias offline entram como **tarefas de robustez**, não como
requisitos migratórios: instalar conforme as instruções do provedor, conservar
o procedimento de ativação offline, levar dois meios de pagamento que o próprio
viajante verificou e manter endereço/reserva acessíveis sem sinal.

## B05 — a fronteira e as três respostas

**Estado:** suficiente para autoria do slot B05; verificado em 2026-08-03;
revalidar até 2026-11-01.

O roteiro mexicano não herda foto, quatro digitais, EES, quiosques europeus ou
registro hoteleiro espanhol. A cena trabalha apenas com o que as fontes do INM
permitem à autoridade confirmar: motivo da viagem, duração/endereço de estadia,
reserva, retorno ou itinerário e dados pessoais solicitados.

As três respostas produtivas são curtas e verdadeiras:

1. `Vengo de vacaciones.` — motivo;
2. `Diez días.` — duração do exemplo, substituída pelo prazo real do viajante;
3. `Me hospedo en este hotel.` — hospedagem, acompanhada da reserva quando
   solicitada;
4. `Aquí tiene mi reservación.` — entrega a prova sem inventar explicação.

A autoridade migratória define o período autorizado na entrada. A aula não
promete 180 dias, não ensina a decorar informação falsa e não apresenta reserva
ou passagem de volta como garantia de admissão.

**Fontes oficiais:** as mesmas fontes de B04, sobretudo a lista do Instituto
Nacional de Migración sobre documentos e informações que podem ser solicitados
para corroborar o motivo da viagem.

## B06 — os primeiros 60 minutos

**Estado:** suficiente para autoria do slot B06; revisão 2026-08-03.

A aula não importa a regra financeira espanhola de Euronet, euros, DCC ou
tarifas de ATM. A primeira hora mexicana é organizada por dependência:

1. resolver bagagem ausente ainda na área/guichê da companhia;
2. testar a conexão instalada em B04 e pedir wifi se necessário;
3. descobrir se a próxima compra aceita cartão antes de procurar dinheiro;
4. resolver banheiro e ponto de encontro com um humano identificado;
5. só então sair do saguão para o transporte, que pertence a B07.

O molde produtivo da aula é `¿Puedo + infinitivo?`, ensinado com três ações reais:
`usar el baño`, `pagar con tarjeta` e `esperar aquí`. `¿Hay wifi?` e
`¿Dónde está el baño?` aparecem como prévias inteiras; os contrastes de `hay` e
`está` só serão ensinados em B08. A aula não afirma que todo banheiro é restrito
nem que todo estabelecimento aceita cartão: ela ensina a perguntar.

## B07 — do aeroporto até a hospedagem

**Estado:** suficiente para autoria do slot B07; revisão 2026-08-03.

O sistema de táxi, aplicativo e transporte autorizado varia por aeroporto e
cidade mexicana. B07 não congela uma empresa, preço, tarifa fixa, cor de carro,
terminal ou regra municipal. Ensina uma sequência que continua válida quando o
canal muda:

1. perguntar a funcionário identificado onde fica o transporte autorizado;
2. para aplicativo, localizar o ponto de encontro indicado;
3. mostrar o endereço completo e confirmar o custo antes de entrar quando o
   canal permitir cotação;
4. confirmar o destino com o motorista;
5. encerrar com `Aquí está bien` e pedir recibo.

Foram excluídos da herança espanhola: VTC como categoria jurídica, tarifas de
Madri/Barcelona, taxímetro como regra universal, metro/Cercanías, suplemento de
aeroporto e ZBE. A aula também não promete que todo aeroporto autoriza coleta
por aplicativo na mesma porta; por isso pergunta pelo `punto de encuentro`.

## B08 — existência, lugar e escotilha

**Estado:** suficiente para autoria do slot B08; revisão 2026-08-03.

A habilidade não é acumular vocabulário de rua; é escolher uma pergunta cuja
resposta o iniciante consiga usar:

- `¿Hay + [coisa] + por aquí?` começa binário: existe ou não existe;
- `¿Dónde está + [lugar conhecido]?` procura uma coisa definida;
- `¿Dónde hay + [categoria]?` procura qualquer instância útil;
- `¿Está lejos?` reduz uma explicação longa a uma decisão de distância;
- `¿Me lo muestra en el mapa?` transfere a rota para o suporte visual já
  treinado em B03.

Vocabulário mexicano do slot: `baño`, não o `aseos` central da pesquisa
espanhola; `cuadra` para bloco/quarteirão e respostas de rua como `derecho`,
`en la esquina` e `a dos cuadras` entram receptivamente. Nenhuma delas exige
que o viajante reproduza uma sequência inteira de instruções.

## B09 — boleto, regra e veículo certo

**Estado:** suficiente para autoria do slot B09; revisão 2026-08-03.

México não oferece um único sistema nacional de metrô/ônibus. Bilhete físico,
cartão, aplicativo, validação, catraca e transbordo variam por cidade e operador.
A aula não congela preço, cartão, cor de máquina ou regra local; ensina a
descobrir o contrato da viagem antes de bloquear a fila:

1. confirmar se o transporte vai ao destino;
2. pedir `un boleto`, léxico mexicano mais natural que o `billete` espanhol;
3. perguntar `¿Tengo que validar el boleto?` e seguir o gesto para a máquina;
4. localizar o `andén` quando houver plataforma;
5. perguntar se precisa fazer `transbordo`;
6. confirmar novamente o veículo antes de entrar.

`¿Tengo que + infinitivo?` recebe duas ações (`validar`, `hacer transbordo`) e
fica como ferramenta de obrigação operacional. Números entram do lado
receptivo: o viajante pode ler tela, apontar ou mostrar o destino, sem produzir
tarifa, linha ou plataforma de memória.

## B10 — a placa termina numa ação

**Estado:** suficiente para autoria do slot B10; verificado em 2026-08-03;
revalidar até 2028-08-03.

O espanhol usa escrita transparente para o comprador anglófono, mas isso não
torna a decisão automática. O slot é integralmente receptivo: seis superfícies
curtas ficam ligadas a movimentos ou escolhas, sem ditado, cópia ou produção:

1. `ENTRADA · SALIDA` — escolher o fluxo antes de cruzar;
2. `JALE · EMPUJE` — puxar ou empurrar uma porta manual;
3. `FILA · TAQUILLA` — localizar a fila e a função do guichê;
4. `SANITARIOS · BAÑOS` — seguir palavra, pictograma e seta;
5. `HORARIO · CERRADO` — conferir o dia ou mudar o plano;
6. `ÚLTIMO ACCESO · SOLO PERSONAL` — respeitar prazo ou limite de acesso.

A aula não congela horário nacional, pausa de almoço, regra de museu, termo de
uma única cidade ou convenção espanhola. Normas mexicanas confirmam o papel de
sinalização curta e contrastante para acessos, saídas e sanitários; a ação do
curso continua apoiada por seta, pictograma e fluxo real de pessoas.

**Fontes oficiais:**

- NOM-001-SSA2-1993, sinalização em áreas de acesso, trânsito e sanitários:
  <https://www.salud.gob.mx/unidades/cdi/nom/001ssa23.html>
- Gaceta Oficial da Cidade do México, símbolos para entradas, saídas, acessos
  e sanitários acessíveis (28/jun/2024):
  <https://transparencia.cdmx.gob.mx/storage/app/uploads/public/669/5d4/b5c/6695d4b5cfe37687994563.pdf>
- NOM-003-SEGOB-2011, classificação nacional de sinais de proteção civil:
  <https://www.dof.gob.mx/normasOficiales/4583/sg/sg.htm>

## B11 — entrar, descobrir o canal e abrir a mesa

**Estado:** suficiente para autoria do slot B11; verificado em 2026-08-03;
revalidar até 2028-08-03.

Taquerías mexicanas não compartilham um único fluxo de atendimento. Há serviço
em mesa, mostrador, caixa e combinações desses canais. A aula transforma essa
variação numa pergunta portátil, em vez de escolher um formato como regra:

1. `Buenas tardes. Somos dos.` torna visível o grupo;
2. `¿Hay mesa para dos?` pede o recurso, sem presumir autoatendimento;
3. `¿Nos sentamos aquí?` confirma a mesa indicada;
4. `¿Ordeno aquí o en la mesa?` descobre onde a comanda nasce;
5. `Un agua mineral, por favor.` abre a primeira rodada;
6. `Eso es todo por ahora, gracias.` fecha a rodada, não a refeição.

B11 não escolhe taco, carne, salsa, cebola, coentro ou gelo: esses encaixes são
o contrato da B12. Também não antecipa conta, cartão ou gorjeta, que pertencem à
B14. A imagem será derivada da descoberta do canal, não de uma mesa genérica
com comida.

**Evidência operacional:** sistemas mexicanos de gestão para taquerías descrevem
explicitamente operações em mesa, mostrador e caixa, sustentando a decisão de
perguntar o canal em vez de universalizá-lo:

- Ordenla, formatos de taquería de mostrador e serviço com mesas:
  <https://ordenla.com/>
- Parrot México, cobrança em mesa ou mostrador e fluxo de fila:
  <https://parrotsoftware.com.mx/tipos-de-restaurante/taqueria>
- Profeco, obrigação de exibir preços claramente em restaurantes:
  <https://www.gob.mx/profeco/prensa/profeco-recuerda-a-restaurantes-exhibir-claramente-sus-precios?idiom=es-MX>

## B12 — a base e os seis controles

**Estado:** suficiente para autoria do slot B12; verificado em 2026-08-03;
revalidar até 2028-08-03.

B12 começa no canal descoberto em B11 e separa a comanda em uma base mais seis
controles. O prato do exemplo é `dos tacos al pastor`; o encaixe real vem do
menu ou da fala do estabelecimento:

1. `con cebolla y cilantro` acrescenta ingredientes nomeados;
2. `sin cebolla` remove uma preferência de um item identificado;
3. `la salsa aparte` mantém a primeira prova reversível;
4. `¿Cuál salsa pica menos?` pergunta pela preparação atual;
5. `más limón` pede mais do acompanhamento visível;
6. `sin hielo` reaplica a retirada numa bebida.

`¿Con todo?` entra como retorno provável, não como receita nacional: o conteúdo
de “todo” varia e o visitante responde nomeando o que quer. Cor também não vira
escala de picância. Fontes mexicanas descrevem salsas vermelhas e verdes por
ingrediente/preparo, com chiles de intensidade variável; portanto a aula
pergunta pela salsa atual em vez de declarar que uma cor é sempre mais suave.

Preferência não é alergia. Nenhuma frase de B12 promete ausência de ingrediente,
contato cruzado ou segurança de cozinha. Esse risco muda a linguagem e o
artefato em B13.

**Fontes:**

- Secretaría de Agricultura y Desarrollo Rural, ingredientes e variação das
  salsas mexicanas:
  <https://www.gob.mx/agricultura/es/articulos/mexico-a-traves-de-sus-salsas>
- Sistema de Información Cultural, Secretaría de Cultura, salsa, cebola e
  coentro em preparações mexicanas:
  <https://sic.cultura.gob.mx/ficha.php?table=gastronomia&table_id=56>
- Turismo da Cidade do México, permissão explícita para pedir comida sem queijo
  ou creme e variedade da comida de rua:
  <https://mexicocity.cdmx.gob.mx/e/food-basics/street-food/>

## B13 — alergia grave, cartão e decisão de sair

B13 separa explicitamente preferência de alergia grave. A pessoa viajante
nomeia a gravidade e o alérgeno antes de pedir, entrega um cartão escrito para
que a pessoa que prepara a comida o veja e pergunta por vias concretas de
contato — mesma superfície ou mesmos utensílios. Uma resposta insegura ou
incerta encerra o pedido: a aula não treina o visitante a negociar uma garantia
que o estabelecimento não pode oferecer.

O cacahuate é um exemplo mexicano para o treino, não um cartão universal. O
artefato real precisa ser personalizado com o alérgeno da pessoa, revisado
antes da viagem e usado junto do medicamento prescrito e do plano de ação. O
curso ensina linguagem e decisão; não substitui orientação médica.

A arquitetura segue recomendações públicas convergentes: autoridades mexicanas
tratam alergia alimentar como risco capaz de produzir anafilaxia; orientações
de viagem recomendam manter medicação e plano acessíveis, carregar cartão no
idioma local e avaliar se o restaurante consegue atender; cartões de chef são
um complemento escrito para comunicar alérgenos à cozinha. Por isso, o momento
central não é “pedir sem” — é fazer o alerta chegar à pessoa que prepara a
comida e aceitar que incerteza também é uma resposta.

**Fontes:**

- Secretaría de Salud do México, alergia alimentar e risco de anafilaxia:
  <https://www.gob.mx/salud/articulos/alergia-alimentaria-problema-de-salud-comun-en-ninos>
- COFEPRIS, informação sobre alérgenos e risco de reação anafilática:
  <https://www.gob.mx/cofepris/acciones-y-programas/programa-de-alimentos>
- CDC Yellow Book, viajantes com alergia grave, medicação, plano, cartão e
  avaliação do restaurante:
  <https://www.cdc.gov/yellow-book/hcp/travelers-with-additional-considerations/severely-allergic-travelers.html>
- Food Allergy Research & Education, cartões de chef e versão em espanhol:
  <https://www.foodallergy.org/resources/food-allergy-chef-cards>
  <https://www.foodallergy.org/resources/chef-card-spanish>
- Secretaría de Salud do México, prevenção de contaminação de alimentos:
  <https://www.gob.mx/salud/articulos/enfermedades-transmitidas-por-alimentos>

## B14 — conta, total autorizado e gorjeta voluntária

B14 coloca a revisão antes do pagamento: pedir a conta, tornar o total visível,
identificar uma linha desconhecida, corrigir o que não foi autorizado e só
então trazer a terminal. O recibo fecha a cena como evidência verificável.

A Profeco reafirmou em 2026 que restaurantes e bares devem exibir preços claros,
com impostos incluídos e em moeda nacional; devem entregar comprovante e
informar as formas de pagamento. A gorjeta é voluntária e não pode ser exigida
nem incluída sem consentimento. O mesmo comunicado orienta revisar a conta para
descartar cobranças abusivas e trata a comissão por cartão como prática
indevida. A aula transforma isso em comportamento observável, não em palestra:
o dedo para numa linha, pergunta `¿Qué es este cargo?` e o cartão espera.

O curso não prescreve porcentagem de gorjeta. O valor depende do serviço, do
estabelecimento e da escolha do viajante; ensinar um número como regra nacional
seria fabricar precisão. Para números produtivos, vale a licença do produto:
mostrar a conta, a tela da terminal ou a calculadora. Os números entram do lado
receptivo, como `ochocientos cuarenta pesos`.

**Fontes:**

- Profeco, direitos em restaurantes e bares, preços, moeda, comprovante,
  formas de pagamento e gorjeta voluntária (15 fev. 2026):
  <https://www.gob.mx/profeco/prensa/profeco-recuerda-a-la-poblacion-consumidora-sus-derechos-en-restaurantes-y-bares?idiom=es-MX>
- Profeco, revisão da conta, gorjeta voluntária e comissão por cartão
  (4 jul. 2026):
  <https://www.gob.mx/profeco/prensa/las-y-los-aficionados-protegidos-al-consumir-alimentos-y-bebidas-en-establecimientos?idiom=es>
- Profeco, cargo extra sem autorização como prática abusiva (2 jan. 2025):
  <https://www.gob.mx/profeco/prensa/la-propina-es-obligatoria-profeco-te-responde?idiom=es>

## B15 — preço, ajuste, política de troca e comprovante

B15 acompanha uma camisa visível por quatro decisões: preço, ajuste, política e
retorno. A pessoa experimenta antes de comprar, pede tamanhos pela direção que
o ajuste precisa mover (`más grande`, `más chica`) e pergunta a política de
troca antes do pagamento. No retorno, recibo e etiqueta voltam ao balcão.

A precisão importante é não transformar toda troca em direito universal. A
Profeco diferencia proteção por produto defeituoso, de má qualidade ou que não
corresponde ao prometido — situações com reparação, reposição ou devolução — de
uma troca comum por ajuste, cujas condições devem ser consultadas. O episódio
faz a pergunta e deixa a própria loja responder prazo e documentos. O número
`treinta días` é a resposta daquele estabelecimento na cena, não regra nacional.

A recomendação de guardar comprovante é operacionalmente sólida: materiais da
Profeco o tratam como necessário para reclamação, troca ou devolução. A etiqueta
entra porque foi a condição verbalizada por esta loja, não porque o curso a
declara requisito legal mexicano em todos os casos.

**Fontes:**

- Profeco, direitos básicos e reposição/devolução por produto de má qualidade
  (1 fev. 2026):
  <https://www.gob.mx/profeco/documentos/derechos-basicos-del-consumidor>
- Profeco, garantia, reparação, reposição ou devolução por falha ou produto que
  não cumpre características oferecidas (22 mai. 2026):
  <https://www.gob.mx/profeco/prensa/la-garantia-es-un-derecho-profeco-orienta-a-las-personas-consumidoras-sobre-como-hacerla-efectiva?idiom=es-MX>
- Profeco, ticket/comprovante para reclamação, troca ou devolução e recomendação
  de experimentar roupas antes de pagar:
  <https://www.gob.mx/profeco/articulos/uniformes-escolares?idiom=es>
- Profeco, comprovante necessário para compensação e devolução pela mesma forma
  de pagamento quando aplicável:
  <https://www.gob.mx/profeco/es/articulos/la-compensacion-es-tu-derecho>

## B16 — preferências antes da chave e falha com marco de reparo

B16 separa dois momentos. Antes da atribuição, a pessoa pergunta por quarto
mais silencioso, piso alto e checkout tardio; a recepção responde conforme a
disponibilidade e política daquele hotel. Depois, uma falha observável no
ar-condicionado recebe objeto, descrição, prazo de revisão e escalada somente
se continuar. Essa ordem melhora primeiro e repara depois.

A Profeco recomenda conhecer termos e condições do hotel e exige que
características e equipamentos anunciados sejam claros e verdadeiros. O curso
não transforma preferência em garantia: `hasta las dos`, o cargo adicional e
`veinte minutos` são retornos do hotel fictício. Também não converte proteção
por serviço deficiente em confronto inicial; o episódio ensina uma resolução
operacional mensurável antes de qualquer via posterior de consumo.

**Fontes:**

- Profeco, características e equipamentos do hospedaje devem ser claros e
  verdadeiros; preço exibido inclui impostos e cargos (23 jun. 2026):
  <https://www.gob.mx/profeco/prensa/profeco-emite-recomendaciones-para-el-uso-seguro-de-plataformas-de-hospedaje-durante-la-copa-mundial?idiom=es>
- Profeco, informação turística e recomendação de conhecer termos e condições
  do hotel:
  <https://www.gob.mx/profeco/documentos/informacion-para-las-y-los-consumidores-turistas?state=published>
- Profeco, reserva e características do serviço de hotel como informação que a
  agência deve entregar:
  <https://www.gob.mx/profeco/prensa/agencias-de-viajes-profeco-senala-cuales-son-sus-obligaciones-con-las-y-los-consumidores?idiom=es>
- Profeco, compensação por serviço deficiente quando aplicável:
  <https://www.gob.mx/profeco/es/articulos/la-compensacion-es-tu-derecho>
