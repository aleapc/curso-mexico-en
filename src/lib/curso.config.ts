// A CONFIG DE CURSO — o que muda entre EN/DE/FR/IT→Espanha (e o futuro →França)
// mora AQUI e só aqui. Componentes agnósticos de língua (busca, tradutor,
// bolso do viajante) leem daqui; nenhum deles tem par de idioma ou moeda
// hard-coded. Derivar um SKU novo = copiar este arquivo e trocar os valores.

export const curso = {
  /**
   * Identidade do SKU, e ela NÃO é cosmética: é o namespace de
   * localStorage. Todos os cursos servem de aleapc.github.io/<curso>/, e
   * localStorage é por ORIGEM, não por caminho — sem isto, os cursos leem e
   * sobrescrevem o progresso uns dos outros.
   */
  sku: 'curso-mexico-en',
  /** Idioma do comprador (a voz-guia). */
  buyerLang: 'en',
  /** Idioma do destino (a fala nativa ensinada). */
  targetLang: 'es',
  /** Par para o link do Google Tradutor: sl = comprador, tl = destino. */
  translatorPair: { sl: 'en', tl: 'es' },
  /** Moeda do destino. */
  destCurrency: 'MXN',
  /**
   * Moedas de "casa" do comprador que vale converter no bolso do viajante.
   * Vazio quando o comprador já usa a moeda do destino (ex.: DE/FR/IT→Espanha,
   * todos em EUR) — nesse caso o /bolso mostra a nota "mesma moeda", sem conversor.
   */
  homeCurrencies: ['USD'] as string[],
  timeZone: 'America/Mexico_City',
  /** Nome de exibição do destino pra faixa "NOW" (ex.: "12:28 · Ciudad de México"). */
  cidadeExibicao: 'Ciudad de México',
  /**
   * Faixas do dia pra tela "NOW" (src/lib/consulta/ambiente.ts), do começo de
   * cada uma — a última cobre a virada da meia-noite. PROVISÓRIO: ao contrário
   * do relógio espanhol (c01a, evidência citada), este ainda não passou por um
   * research dedicado equivalente — são horários de refeição amplamente
   * documentados pra México urbano (desayuno de manhã, comida como refeição
   * principal de meio de tarde, cena mais leve e tardia), não uma cultural fact
   * com fonte específica como as fichasCulturais dos episódios. Revisar antes
   * de tratar como padrão definitivo do curso.
   */
  faixasNow: [
    { de: 0, linha: 'Kitchens are closed, but a street stall or an all-night taquería is not.' },
    { de: 5 * 60, linha: 'Nothing is open yet. The first coffee carts appear around six.' },
    { de: 7 * 60, linha: 'Desayuno: coffee, pan dulce or eggs. Most people eat this standing or in a hurry.' },
    { de: 9 * 60 + 30, linha: 'A mid-morning torta or tamal is completely normal — it is not really a snack.' },
    { de: 11 * 60, linha: 'Kitchens are prepping for the main event. Comida is still a couple of hours off.' },
    { de: 14 * 60, linha: 'La comida — the main meal of the day — is happening now, and it runs long.' },
    { de: 16 * 60 + 30, linha: 'Comida is winding down. Kitchens take a breather before the evening.' },
    { de: 18 * 60, linha: 'Too early for cena. A café de olla and pan dulce fills the gap nicely.' },
    { de: 20 * 60, linha: 'Cena is light here — often just something from a stall, not a sit-down meal.' },
    { de: 22 * 60, linha: 'Taco stands are in full swing. This is prime late-night eating in most cities.' },
    { de: 23 * 60 + 30, linha: 'Late, but plenty of taquerías keep going well past midnight in bigger cities.' }
  ] as { de: number; linha: string }[]
} as const;

export type CursoConfig = typeof curso;
