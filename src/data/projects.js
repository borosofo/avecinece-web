const BASE = import.meta.env.BASE_URL

const imgs = (folder, count, captions = {}) =>
  Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, '0')
    return {
      src: `${BASE}images/${folder}/${n}.jpg`,
      caption: captions[i + 1] || '',
    }
  })

export const projects = [
  {
    id: 'feria-ambulante',
    title: 'Feria Ambulante',
    subtitle: 'Tejiendo comunidad en el espacio público',
    place: 'El Parkway · Bogotá',
    date: 'Octubre 2020',
    year: '2020',
    category: 'Feria',
    color: '#f2a413',
    description:
      'Nuestro primer gran paso. Llevamos al Parkway un espacio de arte y encuentro: mediante carritos ambulantes hechos de sofás reciclados, invitamos a artistas emergentes a difundir su obra, promoviendo la sostenibilidad y redefiniendo el uso del espacio público. Esta iniciativa rompió el aislamiento producto de la pandemia, fomentando la conexión y el diálogo entre la comunidad. Más que una muestra artística, fue un acto de unión y celebración de la creatividad colectiva: el arte tiene el poder de revitalizar nuestros espacios y tejer lazos de pertenencia.',
    photos: imgs('feria-ambulante', 4, {
      2: 'Apropiación del espacio público',
      3: 'Emprendimientos en la feria ambulante',
      4: 'Encuentro en el Parkway',
    }),
  },
  {
    id: 'mural-vereda',
    title: 'El mural de mi vereda',
    subtitle: 'Convocatoria Jóvenes en Movimiento · Ministerio de Cultura',
    place: 'Vereda Peña Negra, Cachipay · Cundinamarca',
    date: 'Diciembre 2021',
    year: '2021',
    category: 'Mural',
    color: '#5da03c',
    description:
      'Viajamos al corazón de Peña Negra, Cachipay, para infundir identidad y orgullo en la comunidad a través del arte. Con la colaboración de jóvenes locales, nuestro proyecto cobró vida al ser seleccionados por la convocatoria "Jóvenes en Movimiento 2021" del Ministerio de Cultura. Este reconocimiento nos permitió llevar a cabo talleres de fotografía y stencil, realizar una cartografía social y, finalmente, crear un mural en la calle principal que se convirtió en el alma del pueblo.',
    video: 'https://youtu.be/U-0ZuoVyq0I',
    videoEmbed: 'https://www.youtube.com/embed/U-0ZuoVyq0I',
    photos: imgs('mural-vereda', 3, {
      1: 'Taller de exploración y representación del territorio',
      2: 'Jornada de pintura · 10 de diciembre, 2021',
      3: 'Mural en la calle principal',
    }),
  },
  {
    id: 'ferrocarril',
    title: 'Memoria del Ferrocarril de Colombia',
    subtitle: 'Pasado, presente y futuro · Intervención en el Campamento Férreo',
    place: 'Facatativá · Cundinamarca',
    date: 'Mayo 2022',
    year: '2022',
    category: 'Mural',
    color: '#2e7dbd',
    description:
      'Intervención artística en uno de los muros del espacio público en el Campamento Férreo de Facatativá, en colaboración con el INVIAS para el programa "Vive Colombia — Vías Verdes". Transformamos edificaciones férreas en emblemas culturales y turísticos junto a jóvenes del territorio, plasmando lo ancestral, el alma del ferrocarril, la biodiversidad y las vías verdes en una jornada colectiva de pintura.',
    photos: imgs('ferrocarril', 4, {
      1: 'Mural del Campamento Férreo, Facatativá',
      2: 'Lo ancestral y el alma del ferrocarril',
      3: 'El alma del ferrocarril y vías verdes',
      4: 'Biodiversidad y vías verdes',
    }),
  },
  {
    id: 'tejido-hiphop',
    title: 'Festival Tejido Hip Hop',
    subtitle: 'Festival itinerante · 49 años del hip hop',
    place: 'Teusaquillo · Bogotá',
    date: 'Agosto 2022',
    year: '2022',
    category: 'Festival',
    color: '#e2482e',
    description:
      'Festival itinerante que nace del deseo de conmemorar los 49 años del nacimiento del hip hop, en juntanza y organización colectiva de cuatro parches artísticos de Teusaquillo: Avecínece, Discos Melcocha, La Melómana y La Hoguera. Talleres de stencil por Afasio, cine-foro sobre la historia del hip hop en Estados Unidos y Bogotá, muestras de rap con Black Woman, breakdance, scratch y graffiti.',
    photos: imgs('tejido-hiphop', 12, {
      1: 'Hip Hop Festival · graffiti conmemorativo',
      2: 'Taller de stencil por Afasio',
      3: 'Cine-foro de la historia del hip hop',
      4: 'Muestra de rap · Black Woman',
    }),
  },
  {
    id: 'movilizarte',
    title: 'MovilizArte',
    subtitle: 'Laboratorios de creación itinerante · En la búsqueda de identidades bogotanas',
    place: 'Bogotá D.C.',
    date: 'Agosto – Octubre 2023',
    year: '2023',
    category: 'Laboratorio',
    color: '#8752a3',
    description:
      'Financiado con la Beca de Estrategias Novedosas de la Secretaría de Cultura, Recreación y Deporte, MovilizArte plasmó — mediante dibujo, collage, stencil, graffiti, serigrafía y videomapping — algunas de las interpretaciones de la identidad bogotana. A través de cuatro laboratorios artísticos móviles realizamos talleres y espacios pedagógicos en el espacio público, buscando ser accesibles para cualquier persona y llevar los espacios culturales a los transeúntes.',
    quote:
      '"Si sumercé está aquí hoy, esperamos que se deje llevar por Bogotá y las diversas maneras de descubrir esta ciudad. Ya sea para verla, escucharla, o interpretarla desde lo más efímero y absurdo, hasta la vastedad de su territorio."',
    video: 'https://www.youtube.com/watch?v=Nm3XR4cUYK0',
    videoEmbed: 'https://www.youtube.com/embed/Nm3XR4cUYK0',
    photos: imgs('movilizarte', 9, {
      1: 'Laboratorio móvil en el espacio público',
      5: 'Taller de serigrafía',
      8: 'Laboratorios en el espacio público',
      9: 'Carritos-laboratorio de creación itinerante',
    }),
  },
  {
    id: 'memorias-color',
    title: 'Festival Memorias a Color',
    subtitle: 'Reinterpretando espacios · Barrio Libertador',
    place: 'Ibagué · Tolima',
    date: 'Noviembre 2023',
    year: '2023',
    category: 'Festival',
    color: '#f2a413',
    description:
      'Festival de graffiti y arte en el Barrio Libertador, punto clave camino al Nevado del Tolima. Se intervinieron alrededor de 16 muros y fachadas para darle otro significado y un atractivo turístico al barrio, plasmando la esencia del territorio y elementos relevantes para sus habitantes. El proceso incluyó talleres con los niños y jóvenes del barrio, incentivando las prácticas artísticas y la apropiación del territorio.',
    photos: imgs('memorias-color', 14, {
      1: 'Fachada intervenida · Barrio Libertador',
      2: 'Talleres con la comunidad',
      5: 'Mapa de las 16 intervenciones',
    }),
  },
  {
    id: 'aectr',
    title: 'AECTR Filipinas, Arauca',
    subtitle: 'Mural con personas reincorporadas · Casa de los Derechos Humanos',
    place: 'Vereda Filipinas, Arauquita · Arauca',
    date: 'Noviembre 2023',
    year: '2023',
    category: 'Mural',
    color: '#5da03c',
    description:
      'Contratados por la Agencia Nacional de Reincorporación (ARN), viajamos a Arauca para realizar un mural en la casa de los Derechos Humanos de la comunidad de Filipinas. Hicimos un ejercicio de cartografía con la comunidad y personas reincorporadas para co-crear el diseño: la palabra "juntanza" y la imagen de dos personas abrazándose. De la mano de personas de diferentes edades pintamos el mural durante dos días, acompañados por representantes de Naciones Unidas y ONG con procesos en la región. Un proceso inspirador que cumple la misión de Avecínece: llevar el arte a diferentes partes del país promoviendo una cultura de paz y comunidad.',
    photos: imgs('aectr', 12, {
      1: 'Casa de los Derechos Humanos · Filipinas',
      2: 'Jornada de pintura · noviembre 2023',
      3: 'Cartografía social con la comunidad',
    }),
  },
]

export const site = {
  name: 'Colectivo Avecínece',
  tagline: 'Arte · Comunidad · Transformación',
  years: '2020 – 2025',
  about: [
    'Somos un grupo interdisciplinario de jóvenes unidos por la pasión de utilizar el arte como vehículo de cambio social. Tendemos puentes a través del conocimiento artístico para enriquecer la vida comunitaria, promoviendo la activación cultural y fortaleciendo los lazos sociales.',
    'Creemos firmemente en el poder del arte para inspirar, conectar y transformar comunidades, impulsando iniciativas que fomentan el diálogo, la inclusión y el desarrollo sostenible.',
  ],
  vision: [
    'Consolidarnos como una red creativa y cultural que propone y gestiona diversidad de eventos para la expansión de la influencia del arte y las colectividades en la sociedad.',
    'El sueño de Avecínece es lograr que proyectos independientes de todo el país tengan un espacio para difundir sus ideas — el arte como herramienta de reparación del tejido social.',
  ],
  founders: [
    'Juan Sebastián Méndez',
    'Laura Bernal Tabares',
    'Paula Andrea Trujillo',
    'Santiago Carrillo',
    'Mateo Polanco Bernal',
    'Javier Arias',
  ],
  contact: {
    instagram: 'https://instagram.com/avecinece',
    instagramHandle: '@avecinece',
    email: 'jalixariasvega@gmail.com',
    youtube: [
      { label: 'El mural de mi vereda (documental)', url: 'https://youtu.be/U-0ZuoVyq0I' },
      { label: 'MovilizArte (documental)', url: 'https://www.youtube.com/watch?v=Nm3XR4cUYK0' },
    ],
    web: 'avecinece.org',
  },
}
