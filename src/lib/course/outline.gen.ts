import type { ModuloOutline } from '../types';

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  ARQUIVO GERADO — não edite à mão.                                       │
// │  Fonte: os ep-*.json (título) + slots.json (ordem e módulo).             │
// │  Regenerar: npm run outline   ·   Conferir: npm run outline:conferir     │
// │                                                                          │
// │  O título vivia aqui E no episódio. Duas canônicas para a mesma string   │
// │  é o defeito que fez duas partes reescritas aparecerem na tela com o     │
// │  título antigo e duas partes novas não aparecerem. Agora deriva.         │
// └──────────────────────────────────────────────────────────────────────────┘

export const outline: ModuloOutline[] = [
  {
    nivel: 'basico',
    nome: 'Basic · Get by',
    descricao: 'The Spanish that gets the day done: arriving, ordering, paying, moving, and getting help.',
    cor: 'terracota',
    licoes: [
      { id: 'b01', titulo: 'Five vowels, one clean beat', pronta: true },
      { id: 'b02', titulo: 'Hello before anything else', pronta: true },
      { id: 'b03', titulo: 'Move it out of your ears and onto the map', pronta: true },
      { id: 'b04', titulo: 'The four files that board with you', pronta: true },
      { id: 'b05', titulo: 'Three answers, then stop', pronta: true },
      { id: 'b06', titulo: 'Do not leave the hall with five loose problems', pronta: true },
      { id: 'b07', titulo: 'Choose the channel before the car', pronta: true },
      { id: 'b08', titulo: 'Ask the question whose answer fits in your head', pronta: true },
      { id: 'b09', titulo: 'Ticket, rule, vehicle — in that order', pronta: true },
      { id: 'b10', titulo: 'Read the decision before you ask', pronta: true },
      { id: 'b11', titulo: 'Two people, one table, the first drink', pronta: true },
      { id: 'b12', titulo: 'Two tacos, two different builds', pronta: true },
      { id: 'b13', titulo: 'The card reaches the kitchen', pronta: true },
      { id: 'b14', titulo: 'The extra line before the terminal', pronta: true },
      { id: 'b15', titulo: 'The tag comes back to the counter', pronta: true },
      { id: 'b16', titulo: 'Before the room number is printed', pronta: true },
      { id: 'b17', titulo: 'The wall behind the pharmacy counter', pronta: true },
      { id: 'b18', titulo: 'The last morning, before the bag is out of your hands', pronta: true },
    ]
  },
  {
    nivel: 'intermediario',
    nome: 'Intermediate · Get the good stuff',
    descricao: 'Eat where they eat, when they eat, at the price they pay.',
    cor: 'oliva',
    licoes: [
      { id: 'i01', titulo: 'Their clock, not the one on your phone', pronta: true },
      { id: 'i02', titulo: 'Nine seconds at a busy counter', pronta: true },
      { id: 'i03', titulo: 'The dish you weren\'t going to order', pronta: true },
      { id: 'i04', titulo: 'Who invited whom', pronta: true },
      { id: 'i05', titulo: 'The five questions everyone asks you', pronta: true },
      { id: 'i06', titulo: 'Where you went yesterday', pronta: true },
      { id: 'i07', titulo: 'Está buenísimo — and the cook hears about it', pronta: true },
      { id: 'i08', titulo: 'Someone invites you home', pronta: true },
      { id: 'i09', titulo: 'An afternoon doing what they do', pronta: true },
      { id: 'i10', titulo: 'Money without the drama', pronta: true },
    ]
  },
  {
    nivel: 'avancado',
    nome: 'Advanced · Read the room',
    descricao: 'The humour, the pride, the old argument, and what their silence means.',
    cor: 'indigo',
    licoes: [
      { id: 'a01', titulo: 'How they talk when it isn\'t to you', pronta: true },
      { id: 'a02', titulo: 'What they laugh at, and the joke you get to make', pronta: true },
      { id: 'a03', titulo: 'Who they think they are', pronta: true },
      { id: 'a04', titulo: 'The old argument', pronta: true },
      { id: 'a05', titulo: 'The other language', pronta: true },
      { id: 'a06', titulo: 'Their calendar', pronta: true },
      { id: 'a07', titulo: 'Signals: welcome, uncomfortable, and time to go', pronta: true },
      { id: 'a08', titulo: 'The goodbye', pronta: true },
    ]
  },
];

// Gerado de static/img/ — a home só pede imagem que existe.
export const COM_IMAGEM = new Set(["a01","a02","a03","a05","a06","a07","a08","b06","b08","b10","b15","b18","c01","c02","c03","e01","e02","e03","e04","e05","e06","e07","e08","i02","i03","i04","i05","i06","i07","i08","i09","i10","mexico-a01-listening","mexico-b01-pronunciation-v2","mexico-b02-greeting-v2","mexico-b03-repair-v2","mexico-b04-ready-v2","mexico-b05-immigration-v2","mexico-b06-arrival-pickup","mexico-b06-arrival-pickup-v2","mexico-b07-transport-v2","mexico-b08-directions-v2","mexico-b09-metro-v2","mexico-b10-signs-v2","mexico-b11-taqueria-order","mexico-b11-taqueria-order-v2","mexico-b12-taco-build-v2","mexico-b13-allergy-card-v2","mexico-b14-extra-charge-v2","mexico-b14-payment-check","mexico-b15-size-exchange-v2","mexico-b16-hotel-resolution","mexico-b16-quiet-room-v2","mexico-b17-pharmacy","mexico-b18-checkout-transfer","mexico-i01-local-time","mexico-i02-counter-order","mexico-i03-local-recommendation","mexico-i04-night-plan","mexico-i05-questions","mexico-i06-story","mexico-i07-feedback","mexico-i08-invitation","mexico-i09-observe","mexico-i10-cash"]);
