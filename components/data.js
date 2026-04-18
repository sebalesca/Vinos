// Central data store — loaded before Babel components so all constants are global.

window.BRAND = {
  name: 'Encuentros Wine',
  initials: 'EW',
  legalName: 'CARILILA',
  location: 'Mendoza, AR',
  email: 'hola@carilila.com.ar',
  phone: '+54 261 555 0123',
  whatsapp: '+54 261 555 0123',
  year: 2026,
  legal: 'BEBER CON MODERACIÓN · PROHIBIDA SU VENTA A MENORES DE 18',
};

window.PRICE = {
  base: 28,
  currency: 'USD',
  display: 'USD 28',
  label: 'USD 28 · envío incluido',
};

window.WINES = [
  { id: 'malbec',    name: 'Malbec Reserva',      region: 'Mendoza',    year: 2023, color: '#5C1A1B', notes: 'Ciruela · cacao · roble' },
  { id: 'cabernet',  name: 'Cabernet Sauvignon',   region: 'Uco Valley', year: 2022, color: '#451115', notes: 'Pimiento · casis · tabaco' },
  { id: 'blend',     name: 'Blend de autor',        region: 'Mendoza',    year: 2023, color: '#6B1F20', notes: 'Especias · mora · vainilla' },
  { id: 'chardonnay',name: 'Chardonnay',            region: 'Tupungato',  year: 2024, color: '#C8A85A', notes: 'Manzana · cítrico · miel' },
];

window.GLASSES = [
  { id: 'cabernet', name: 'Cabernet', desc: 'Cuerpo amplio, tinto robusto' },
  { id: 'burgundy', name: 'Borgoña',  desc: 'Balón grande, aromático' },
  { id: 'flute',    name: 'Flauta',   desc: 'Esbelta, para espumantes' },
];

window.PRESETS = ['Para Sofía', 'Felices 10', '12 · 04 · 2026', 'Gracias, papá', 'Salud, amor & dinero'];

window.HERO_PHOTOS = {
  main:      'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=1200&q=80&auto=format&fit=crop',
  lifestyle: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80&auto=format&fit=crop',
  detail:    'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=1200&q=80&auto=format&fit=crop',
  couple:    'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=1200&q=80&auto=format&fit=crop',
  darkMoody: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=1200&q=80&auto=format&fit=crop',
  gift:      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=80&auto=format&fit=crop',
};

window.SECTION_PHOTOS = {
  process:  'https://images.unsplash.com/photo-1569919659476-f0852f6834b7?w=800&q=80&auto=format&fit=crop',
  gallery1: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80&auto=format&fit=crop',
  gallery2: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&q=80&auto=format&fit=crop',
  gallery3: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&q=80&auto=format&fit=crop',
  gallery4: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80&auto=format&fit=crop',
  cta:      'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=1400&q=80&auto=format&fit=crop',
};

// iconKey references Icon.* by string — data.js loads before Icons.jsx so we can't use references directly.
window.PROCESS_STEPS = [
  { n: '01', t: 'Armala en 3 minutos',       d: 'Elegís vino, copas y tu frase. Vas viendo la caja en tiempo real. Sin vueltas, sin llamados.',                                                                              iconKey: 'Wine' },
  { n: '02', t: 'La hacemos a mano',          d: 'Cortamos la madera, grabamos con láser y seleccionamos el vino en nuestro taller en Mendoza.',                                                                              iconKey: 'Engrave' },
  { n: '03', t: 'La envolvemos con amor',     d: 'Papel kraft, sello de lacre y una tarjeta escrita a mano. Llega como un regalo de verdad, no como un paquete de Mercado Libre.',                                            iconKey: 'Box' },
  { n: '04', t: 'Te hace quedar como un rey', d: '4-6 días hábiles a todo el país. Vos la entregás. Ellos nunca la olvidan.',                                                                                                  iconKey: 'Truck' },
];

window.GALLERY_BOXES = [
  { title: 'La Clásica',  sub: 'Malbec Reserva · Cabernet', tag: '★ La más pedida',    engraving: 'Felices 10 años', photo: 'gallery1', price: 'USD 28' },
  { title: 'La Esencial', sub: 'Malbec · Borgoña',          tag: 'Más accesible',       engraving: 'M & L · 2026',   photo: 'gallery2', price: 'USD 28' },
  { title: 'La de Verano',sub: 'Chardonnay · Flautas',      tag: 'Nuevo',               engraving: 'Salud, Sofi',    photo: 'gallery3', price: 'USD 32' },
  { title: 'La de Autor', sub: 'Blend Premium · Cabernet',  tag: 'Edición limitada',    engraving: '¡30, al fin!',   photo: 'gallery4', price: 'USD 38' },
];

window.STORIES = [
  {
    quote: 'La cara de mi viejo cuando leyó "Gracias por todo, pa" grabado en la caja — no tiene precio. El Malbec se lo tomó esa misma noche con mi vieja. Le saqué foto a la caja. La mejor plata que gasté en años.',
    name: 'Martín G.', city: 'Buenos Aires', occasion: 'Día del padre',
  },
  {
    quote: 'La pedí para nuestros 10 años. Cuando ella abrió y vio nuestras iniciales y la fecha grabada, lloró. Literalmente lloró. Nunca me habían funcionado tan bien USD 28. La caja sigue en el living.',
    name: 'Joaquín R.', city: 'Córdoba', occasion: 'Aniversario',
  },
  {
    quote: 'Mi jefa me regaló una cuando me fui del laburo. Dos años después todavía la tengo en casa como decoración. Es de esos regalos que te dan y te acordás para siempre de quien te lo dio.',
    name: 'Ana P.', city: 'Rosario', occasion: 'Despedida',
  },
];

window.FAQS = [
  { q: '¿Y si no le gusta?',            a: 'Imposible. Pero si llega roto o con algún problema, te reponemos la caja completa sin cargo. Garantía total.' },
  { q: '¿En cuánto tiempo llega?',      a: '4-6 días hábiles de producción + 2-4 de envío según ciudad. Si necesitás algo urgente (cumple mañana, etc.) escribinos por WhatsApp — casi siempre lo resolvemos.' },
  { q: '¿Qué puedo grabar?',            a: 'Lo que quieras, hasta 22 caracteres. Nombre, fecha, iniciales, una frase corta. Si es para empresa también grabamos logos. El grabado es láser real — permanente, no se borra.' },
  { q: '¿Las copas son frágiles?',      a: 'Cristal de verdad, no plástico barato. Van con espuma anti-golpe y doble embalaje. En 1.200 envíos no se nos rompió ninguna. De verdad.' },
  { q: '¿Puedo elegir otro vino?',      a: 'Tenemos 4 vinos mendocinos seleccionados. Si querés una marca específica, escribinos antes — generalmente la conseguimos sin costo extra.' },
  { q: '¿Hacen regalos corporativos?',  a: 'Sí, desde 10 cajas con el logo de tu empresa grabado. Descuento por volumen. Escribinos a hola@carilila.com.ar y te pasamos presupuesto en el día.' },
];
