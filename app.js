/* ==========================================================================
   LA CARGAISON — LOGIQUE DU PORTAIL V5 (SOUS-PAGES, 99 MEMBRES & 23 OUTILS)
   ========================================================================== */

const STORAGE_KEY = 'lacargaison_portal_v5_complete';

const INITIAL_DATA = {
  currentRole: 'member', // 'public' | 'member' | 'admin'
  currentMemberId: 'evan-patruno',
  activeCapsuleId: 'cap-1',
  themeMode: 'galerie', // 'galerie' (clair) | 'nef' (sombre #20)

  // #1 : Les 99 artistes réels extraits de https://www.lacargaison.org/membres/
  artists: window.CARGAISON_MEMBERS || [],

  // #9 : Journal d'atelier par artiste (Notes datées)
  studioJournals: {
    'evan-patruno': [
      {
        date: 'Automne 2026',
        text: 'Recherche picturale en atelier et participation au développement des outils de rayonnement des membres au sein du C.A. de La Cargaison.'
      }
    ],
    'roger-alexandre': [
      {
        date: '2025 — 2026',
        text: 'Rétrospective « Du concret vers l’immatériel – 50 ans de création » présentée en projection architecturale à la cathédrale Saint-Jean-l’Évangéliste.'
      }
    ],
    'clement-boucher': [
      {
        date: '2025',
        text: 'Création des environnements interactifs M.O.N.A II, Carignan en couleurs, La belle échappée – Phase 2 et L’Art et la nature.'
      }
    ],
    'dominique-paul': [
      {
        date: '2024 — 2025',
        text: 'Développement et diffusion des séries Silent Fall / Silent Spring et Talk-to-Me: interactive bird autour du déclin de la biodiversité.'
      }
    ]
  },

  // #10 : Capsules thématiques
  capsules: [
    {
      id: 'cap-1',
      title: 'Capsule I — Arts visuels, Photographie & Matière',
      curator: 'Œuvres et portfolios réels des membres',
      statement: 'Peinture, photographie, dessin, installation engagée et rétrospective de création des artistes visuels du collectif.'
    },
    {
      id: 'cap-2',
      title: 'Capsule II — Création numérique, Multimédia & Projection',
      curator: 'Œuvres et portfolios réels des membres',
      statement: 'Projection architecturale, expériences interactives, environnements 2D/3D et créations immersives.'
    },
    {
      id: 'cap-3',
      title: 'Capsule III — Musique, Chanson, Histoire & Scène',
      curator: 'Œuvres et portfolios réels des membres',
      statement: 'Récits historiques en chansons, interprétation musicale, bande dessinée et dramaturgie.'
    }
  ],

  // ŒUVRES 100 % RÉELLES avec #5 : Co-créateurs membres & #10 : Fiche technique (techRider)
  works: [
    {
      id: 'work-real-1',
      artistId: 'roger-alexandre',
      coArtistIds: ['philippe-corriveau', 'jessyca-viens-gaboriau'],
      capsuleId: 'cap-1',
      title: 'Du concret vers l’immatériel – Roger Alexandre, 50 ans de création',
      year: '2025',
      discipline: 'Arts visuels & Photographie',
      medium: 'Œuvres picturales de Roger Alexandre transposées en création immersive (25 min)',
      formatType: 'Peinture & Projection (5 vues)',
      availability: 'Exposition / Archive',
      priceIndication: 'Rétrospective 50 ans de carrière',
      sourceUrl: 'https://www.lacargaison.org/creation/du-concret-vers-limmateriel-roger-alexandre-50-ans-de-creation/',
      images: [
        'https://www.lacargaison.org/wp-content/uploads/2025/04/Du_concret_vers_l_immateriel_visuel_pour_Creations_site-1500x1500-px.png',
        'https://www.lacargaison.org/wp-content/uploads/2025/04/Cargaison_Concret_avantpremiere_JessycaVG_49-1024x683.jpg',
        'https://www.lacargaison.org/wp-content/uploads/2025/04/Cargaison_Concret_avantpremiere_JessycaVG_29-1024x683.jpg',
        'https://www.lacargaison.org/wp-content/uploads/2025/04/Cargaison_Concret_avantpremiere_JessycaVG_31-1024x683.jpg',
        'https://www.lacargaison.org/wp-content/uploads/2025/04/Cargaison_Concret_avantpremiere_JessycaVG_54-1024x683.jpg'
      ],
      embedUrl: '',
      description: 'Création célébrant les 50 ans de carrière du peintre Roger Alexandre (membre de La Cargaison) au cœur de la cathédrale Saint-Jean-l’Évangéliste. Photographies d’avant-première : Jessyca Viens-Gaboriau.',
      techRider: {
        spaceRequired: 'Nef architecturale ou salle immersive (plafond min. 5 m) + cimaises pour tableaux originaux',
        lightingAudio: 'Dispositif multi-projecteurs HD (14 canaux Mur [à] mur) + diffusion sonore spatialisée',
        setupDuration: 'Durée : 25 min en boucle — Montage et calibrage : 1 journée',
        insuranceTransport: 'Assurance exposition clou à clou pour les toiles originales + licence de diffusion numérique'
      }
    },
    {
      id: 'work-real-2',
      artistId: 'clement-boucher',
      coArtistIds: ['louis-philippe-tardif'],
      capsuleId: 'cap-2',
      title: 'M.O.N.A II, Carignan en couleurs & La belle échappée (LeGars)',
      year: '2025',
      discipline: 'Arts numériques & 3D',
      medium: 'Expériences interactives, visuels génératifs et intégration multimédia (TouchDesigner, MadMapper, Resolume)',
      formatType: 'Art numérique (5 vues)',
      availability: 'Disponible (Diffusion / Spectacle)',
      priceIndication: 'Portfolio officiel clementboucher.com & Behance',
      sourceUrl: 'https://www.clementboucher.com/',
      images: [
        'https://framerusercontent.com/images/zoemmnhrnT6EFEGJ5Sb6N7LvOUM.jpg',
        'https://framerusercontent.com/images/4r7iWw5Oy27BDTDhCFZZUaQodVs.jpg',
        'https://framerusercontent.com/images/vEIxiCJIXxRpI0t7Eg71SEcrE.jpg',
        'https://framerusercontent.com/images/4RsSbYDKmmzA6zhGXiuyvTKr9Gk.jpg',
        'https://framerusercontent.com/images/ACZBPMzASfr8GFaNhOyAFyTu7s.jpg'
      ],
      embedUrl: '',
      description: 'Œuvres et installations interactives réalisées par Clément Boucher (LeGars), créateur multimédia membre de La Cargaison : M.O.N.A II (2025), Ratattck (2025), L’Art et la nature (2025), Carignan en couleurs (2025) et La belle échappée – Phase 2 (2025).',
      techRider: {
        spaceRequired: 'Surface de projection intérieure ou façade architecturale extérieure (obscurité contrôlée)',
        lightingAudio: 'Serveur média TouchDesigner / MadMapper, capteurs interactifs et vidéoprojecteurs laser 10 000+ lumens',
        setupDuration: 'Montage et mapping : 6 h à 12 h selon le lieu — Diffusion continue ou événementielle',
        insuranceTransport: 'Équipement informatique et capteurs fournis ou intégrés au parc technique du diffuseur'
      }
    },
    {
      id: 'work-real-3',
      artistId: 'dominique-paul',
      coArtistIds: [],
      capsuleId: 'cap-1',
      title: 'Silent Fall / Talk-to-Me: Interactive Bird & Birds at Risk',
      year: '2024',
      discipline: 'Arts visuels & Photographie',
      medium: 'Photographie, collage, performance, œuvre portable interactive (wearable) et vidéo',
      formatType: 'Arts visuels & Performance (3 vues)',
      availability: 'Disponible (Diffusion / Spectacle)',
      priceIndication: 'Portfolio officiel dominiquepaul.net',
      sourceUrl: 'https://dominiquepaul.net/',
      images: [
        'https://img-cache.oppcdn.com/fixed/38715/assets/TPKaMIsDO97vJKcl.jpg',
        'https://img-cache.oppcdn.com/fixed/38715/assets/Mx3sk0CVEMKfniNw.jpg',
        'https://img-cache.oppcdn.com/fixed/38715/assets/58bR4_ZE_1pqzwCa.jpg'
      ],
      embedUrl: '',
      description: 'Séries réalisées par Dominique Paul, PhD (membre de La Cargaison) autour du déclin de la biodiversité, des migrations et des enjeux géopolitiques : Silent Fall / Silent Spring, Talk-to-Me: interactive bird, Birds at Risk, Bumble Bees at Risk et Insects of Surinam.',
      techRider: {
        spaceRequired: 'Salle d’exposition (cimaises 10 m linéaires) + espace central dégagé pour sculpture/œuvre portable',
        lightingAudio: 'Éclairage directionnel de galerie + alimentation électrique 15A pour dispositif interactif sonore',
        setupDuration: 'Installation : 1 journée — Performance d’ouverture possible avec l’artiste',
        insuranceTransport: 'Caisses de transport muséales — Barèmes CARFAC applicables'
      }
    },
    {
      id: 'work-real-4',
      artistId: 'thomas-hodgson',
      coArtistIds: ['marianne-quintal-emard'],
      capsuleId: 'cap-3',
      title: 'Hommage à Leonard Cohen — Voix, guitare et scénographie numérique',
      year: '2026',
      discipline: 'Musique & Son',
      medium: 'Spectacle musical (voix, guitare, contrebasse) et projections immersives',
      formatType: 'Musique & Scène (4 vues)',
      availability: 'Disponible (Diffusion / Spectacle)',
      priceIndication: 'Spectacle en diffusion',
      sourceUrl: 'https://www.lacargaison.org/creation/hommage-a-cohen/',
      images: [
        'https://www.lacargaison.org/wp-content/uploads/2026/03/Cargaison_hommage_Leonard_Cohen_MQE_couverture-1.png',
        'https://www.lacargaison.org/wp-content/uploads/2026/03/Cargaison_hommage_Leonard_Cohen_MQE_1-683x1024.jpg',
        'https://www.lacargaison.org/wp-content/uploads/2026/03/Cargaison_hommage_Leonard_Cohen_MQE_3-683x1024.jpg',
        'https://www.lacargaison.org/wp-content/uploads/2026/03/Cargaison_hommage_Leonard_Cohen_MQE_4-1024x683.jpg'
      ],
      embedUrl: '',
      description: 'Interprétation des œuvres de Leonard Cohen par Thomas Hodgson (voix et guitare) accompagné de Frédéric Samson à la contrebasse, dans une scénographie numérique à la cathédrale Saint-Jean-l’Évangéliste. Crédits photo : Marianne Quintal-Émard.',
      techRider: {
        spaceRequired: 'Scène minimale 5 m × 4 m avec écran de fond ou surface architecturale de projection',
        lightingAudio: 'Console numérique (1 micro voix dynamique/condensateur, 2 DI guitare/contrebasse, 2 retours de scène)',
        setupDuration: 'Durée : 75 min (sans entracte) — Balance de son et raccord vidéo : 3 h',
        insuranceTransport: 'Équipe en tournée : 2 musiciens + 1 régisseur multimédia'
      }
    },
    {
      id: 'work-real-5',
      artistId: 'luc-archambault',
      coArtistIds: [],
      capsuleId: 'cap-1',
      title: 'Galerie photographique Flickr (127 œuvres) & séries Les Bourgeois / Points de repère',
      year: '2024',
      discipline: 'Arts visuels & Photographie',
      medium: 'Photographie d’art et portrait',
      formatType: 'Photographie (2 vues)',
      availability: 'Disponible (Acquisition)',
      priceIndication: 'Galerie Flickr officielle de l’artiste',
      sourceUrl: 'https://www.flickr.com/photos/luc-archambault/',
      images: [
        'https://live.staticflickr.com/7561/15846548162_88c9210f0b.jpg',
        'https://www.lacargaison.org/wp-content/uploads/2024/10/archambault-luc.jpg'
      ],
      embedUrl: '',
      description: 'Œuvres photographiques de Luc Archambault (photographe et comédien membre de La Cargaison), issues de son portfolio Flickr officiel (127 photographies en ligne).',
      techRider: {
        spaceRequired: 'Cimaises de galerie — Tirages encadrés ou montés sous acrylique',
        lightingAudio: 'Éclairage de galerie standard anti-reflet (3000K - 3500K)',
        setupDuration: 'Accrochage : demi-journée',
        insuranceTransport: 'Tirages numérotés et signés disponibles sur commande ou prêt d’exposition'
      }
    },
    {
      id: 'work-real-6',
      artistId: 'alexandre-belliard',
      coArtistIds: [],
      capsuleId: 'cap-3',
      title: 'Légendes d’un peuple — L’Histoire de l’Amérique francophone en chansons',
      year: '2025',
      discipline: 'Musique & Son',
      medium: 'Albums folk-historiques, concerts-conférences, chroniques et poésie (Éditions Poètes de Brousse)',
      formatType: 'Chanson & Poésie',
      availability: 'Disponible (Diffusion / Spectacle)',
      priceIndication: 'Chaîne YouTube officielle & Concerts',
      sourceUrl: 'https://www.youtube.com/channel/UClm3UiRUzpCAKiOLi0mg77w',
      images: [
        'https://www.lacargaison.org/wp-content/uploads/2024/11/Cargaison_Alexandre_Belliard_membre-scaled.jpg',
        'https://yt3.googleusercontent.com/KDjDWZFR0zRFTRj4S5C9m_xw_kLgPTdazBTEcNxDm9A7UCT757V3clOsDJhWXzsJVr2Aos4iAQ=s900-c-k-c0x00ffffff-no-rj'
      ],
      embedUrl: '',
      description: 'Projet au long cours d’Alexandre Belliard (ACI, chroniqueur, conférencier et poète établi en Montérégie) consacré à faire rayonner l’histoire et la culture de l’Amérique francophone en chansons.',
      techRider: {
        spaceRequired: 'Salle de spectacle, maison de la culture, auditorium, bibliothèque ou lieu patrimonial',
        lightingAudio: 'Formule solo (voix, guitare acoustique, projection historique HDMI) ou formule avec musiciens accompagnateurs',
        setupDuration: 'Durée : 60 à 90 min (avec période d’échanges) — Montage : 90 min',
        insuranceTransport: 'Clé en main pour réseaux scolaires, municipaux et diffuseurs pluridisciplinaires'
      }
    },
    {
      id: 'work-real-7',
      artistId: 'jessyca-viens-gaboriau',
      coArtistIds: ['clement-boucher', 'francoise-dancause', 'thomas-hodgson', 'marjolaine-quintal'],
      capsuleId: 'cap-1',
      title: 'L’Art et la nature & Noël Illuminé — Captations photographiques en nef',
      year: '2025',
      discipline: 'Arts visuels & Photographie',
      medium: 'Photographie d’installations lumineuses et architecturales',
      formatType: 'Photographie (6 vues)',
      availability: 'Disponible (Acquisition)',
      priceIndication: 'Page officielle Jessyca Viens-Gaboriau',
      sourceUrl: 'https://www.facebook.com/Jessycavg',
      images: [
        'https://www.lacargaison.org/wp-content/uploads/2025/08/Cargaison_Art_et_nature_creation_2025_photo_JVG.png',
        'https://www.lacargaison.org/wp-content/uploads/2025/07/Cargaison_Art_et_nature_JVG_2-1024x683.jpg',
        'https://www.lacargaison.org/wp-content/uploads/2025/07/Cargaison_Art_et_nature_JVG_5-1024x683.jpg',
        'https://www.lacargaison.org/wp-content/uploads/2026/01/01122025-JVG_9340-1024x683.jpg',
        'https://www.lacargaison.org/wp-content/uploads/2026/01/01122025-JVG_9355-1024x683.jpg',
        'https://www.lacargaison.org/wp-content/uploads/2024/11/JVG08582-1024x683.jpg'
      ],
      embedUrl: '',
      description: 'Série de photographies réalisées par Jessyca Viens-Gaboriau (membre photographe de La Cargaison) documentant les créations L’Art et la nature (2025), Noël Illuminé (2025) et À la belle Étoile (2024).',
      techRider: {
        spaceRequired: 'Exposition en tirages grand format (24×36 po) ou diffusion sur écrans haute définition',
        lightingAudio: 'Éclairage ponctuel sur tirages papier baryté / Hahnemühle',
        setupDuration: 'Accrochage : 3 h',
        insuranceTransport: 'Fichiers haute résolution ou tirages encadrés disponibles auprès de la photographe'
      }
    },
    {
      id: 'work-real-8',
      artistId: 'kim-valiquette',
      coArtistIds: ['francoise-dancause', 'thomas-hodgson'],
      capsuleId: 'cap-1',
      title: 'Chaleur et lumières — Photographie de projection architecturale (Valleyfield)',
      year: '2024',
      discipline: 'Arts visuels & Photographie',
      medium: 'Photographie nocturne d’architecture et de projection mapping',
      formatType: 'Photographie (5 vues)',
      availability: 'Exposition / Archive',
      priceIndication: 'Instagram @kim_v_photograph',
      sourceUrl: 'https://www.instagram.com/kim_v_photograph/',
      images: [
        'https://www.lacargaison.org/wp-content/uploads/2025/03/KIM0069-1-1024x684.jpg',
        'https://www.lacargaison.org/wp-content/uploads/2025/03/KIM0072-1-1024x684.jpg',
        'https://www.lacargaison.org/wp-content/uploads/2025/03/KIM0101-1024x684.jpg',
        'https://www.lacargaison.org/wp-content/uploads/2025/03/KIM0125-1024x684.jpg',
        'https://www.lacargaison.org/wp-content/uploads/2025/03/KIM0149-1024x684.jpg'
      ],
      embedUrl: '',
      description: 'Documentation photographique signée Kim Valiquette (membre de La Cargaison) de l’œuvre extérieure Chaleur et lumières projetée sur l’usine de filtration de Salaberry-de-Valleyfield pour le 150e anniversaire de la ville.',
      techRider: {
        spaceRequired: 'Tirages photographiques sur aluminium brossé ou papier beaux-arts',
        lightingAudio: 'Éclairage muséal orientable',
        setupDuration: 'Accrochage : 2 h',
        insuranceTransport: 'Droits de reproduction et tirages gérés directement avec l’artiste'
      }
    },
    {
      id: 'work-real-9',
      artistId: 'pierre-cavale',
      coArtistIds: [],
      capsuleId: 'cap-3',
      title: 'Carnets Substack — Débusquer l’extraordinaire dans l’ordinaire',
      year: '2025',
      discipline: 'Littérature & Parole',
      medium: 'Récits, essais, photographie et créations multidisciplinaires sur Substack',
      formatType: 'Extrait littéraire & Visuel',
      availability: 'Disponible (Diffusion / Spectacle)',
      priceIndication: 'Publication Substack @pierrecavale',
      sourceUrl: 'https://substack.com/@pierrecavale',
      images: [
        'https://www.lacargaison.org/wp-content/uploads/2025/12/Cargaison_Pierre_Cavale_membre_NB.jpg'
      ],
      textExcerpt: '« Les métiers que j’exerce (acteur, auteur, compositeur, photographe, artiste numérique, cinéaste…) me servent à raconter le monde à ma manière, m’amusant à débusquer l’extraordinaire dans l’ordinaire. »',
      embedUrl: '',
      description: 'Publications littéraires, chroniques et réflexions artistiques de Pierre Cavale sur sa plateforme Substack officielle liée depuis lacargaison.org.',
      techRider: {
        spaceRequired: 'Lecture publique, cabaret littéraire ou intégration narrative sonore en exposition',
        lightingAudio: '1 microphone sur pied + lutrin éclairé (et projection visuelle optionnelle)',
        setupDuration: 'Intervention de 20 à 60 min — Montage : 30 min',
        insuranceTransport: 'Aucun transport lourd requis'
      }
    },
    {
      id: 'work-real-10',
      artistId: 'christiane-litalien',
      coArtistIds: [],
      capsuleId: 'cap-1',
      title: 'Dessin, aquarelle, acrylique et photographie d’art',
      year: '2025',
      discipline: 'Arts visuels & Photographie',
      medium: 'Dessin, aquarelle, acrylique et photographie d’art',
      formatType: 'Arts visuels & Carnets',
      availability: 'Disponible (Acquisition)',
      priceIndication: 'Substack @christianelitalien & Instagram @chrislitalien',
      sourceUrl: 'https://substack.com/@christianelitalien',
      images: [
        'https://www.lacargaison.org/wp-content/uploads/2024/11/Cargaison_Christiane_Litalien_membre.jpg'
      ],
      textExcerpt: '« Je suis une artiste en arts visuels, je fais du dessin, de l’aquarelle, de l’acrylique et, à l’occasion, de la photo d’art. J’aime représenter la beauté de l’humain et de la nature au-delà de la banalité des apparences. »',
      embedUrl: '',
      description: 'Présentation et publications visuelles de Christiane Litalien issues de ses pages Substack et Instagram liées sur le site officiel de La Cargaison.',
      techRider: {
        spaceRequired: 'Cimaises d’exposition (œuvres sur papier encadrées sous verre et toiles sur châssis)',
        lightingAudio: 'Éclairage doux sans rayons UV directs (conservation des aquarelles et œuvres sur papier)',
        setupDuration: 'Accrochage sur tiges ou crochets : 3 h',
        insuranceTransport: 'Emballage à plat et protection des encadrements'
      }
    },
    {
      id: 'work-real-11',
      artistId: 'francoise-dancause',
      coArtistIds: ['marjolaine-quintal', 'jessyca-viens-gaboriau'],
      capsuleId: 'cap-2',
      title: 'De père en fille & Installation ferroviaire virtuelle (Notre-Dame-de-l’Île-Perrot)',
      year: '2025',
      discipline: 'Arts vivants & Scène',
      medium: 'Trame narrative, scénographie et installations multimédias historiques',
      formatType: 'Scénographie & Récit (5 vues)',
      availability: 'Exposition / Archive',
      priceIndication: 'Créations La Cargaison',
      sourceUrl: 'https://www.lacargaison.org/creation/de-pere-en-fille/',
      images: [
        'https://www.lacargaison.org/wp-content/uploads/2026/01/Visuel_De_pere_en_fille_pour_site-1200-x-1200-px.png',
        'https://www.lacargaison.org/wp-content/uploads/2025/08/Cargaison_ND_Ile_Perrot_1200X1200.png',
        'https://www.lacargaison.org/wp-content/uploads/2025/08/Cargaison_NDIlePerrot_JVG_6-683x1024.jpg',
        'https://www.lacargaison.org/wp-content/uploads/2025/08/Cargaison_NDIlePerrot_JVG_7-1024x683.jpg',
        'https://www.lacargaison.org/wp-content/uploads/2025/08/Cargaison_NDIlePerrot_JVG_5-1024x683.jpg'
      ],
      embedUrl: '',
      description: 'Créations narratives et scénographiques rendant hommage à Félix-Gabriel Marchand et Joséphine Marchand-Dandurand (De père en fille, 2025) ainsi qu’à l’histoire ferroviaire de Notre-Dame-de-l’Île-Perrot (Bibliothèque Marie-Uguay).',
      techRider: {
        spaceRequired: 'Espace muséal, bibliothèque ou nef permettant décor scénographique + projection',
        lightingAudio: 'Projecteurs vidéo courte focale, bande sonore narrative synchronisée et éclairage théâtral',
        setupDuration: 'Montage scénographique et intégration : 1 à 2 jours',
        insuranceTransport: 'Transport des éléments de décor et mobilier scénique par fourgon'
      }
    },
    {
      id: 'work-real-12',
      artistId: 'evan-patruno',
      coArtistIds: ['andrew-jason'],
      capsuleId: 'cap-1',
      title: 'Pratique en arts visuels — Evan Patruno (Page officielle & Expositions)',
      year: '2025',
      discipline: 'Arts visuels & Photographie',
      medium: 'Peinture et arts visuels',
      formatType: 'Portfolio Arts visuels',
      availability: 'Disponible (Acquisition)',
      priceIndication: 'Contact direct via facebook.com/evanpatruno.EP',
      sourceUrl: 'https://www.facebook.com/evanpatruno.EP',
      images: [
        'https://www.lacargaison.org/wp-content/uploads/2025/01/Cargaison_membre_Evan_Patruno.jpg'
      ],
      embedUrl: '',
      description: 'Portfolio et page d’artiste officielle d’Evan Patruno (Artiste en arts visuels et membre du C.A. de La Cargaison), ayant notamment participé à des expositions collectives dans la région (dont l’exposition au Domaine du Ridge avec le membre Andrew Jason / Shawn AJ Christie).',
      techRider: {
        spaceRequired: 'Cimaises d’exposition en galerie, centre d’art ou espace culturel partenaire',
        lightingAudio: 'Éclairage directionnel sur rail 3000K mettant en valeur la texture picturale',
        setupDuration: 'Accrochage : 2 à 3 h (système d’attaches galerie inclus au dos des œuvres)',
        insuranceTransport: 'Transport assuré par l’artiste en Montérégie / Grand Montréal'
      }
    }
  ],

  // #11 & #12 : Babillard avec liste des membres intéressés (interestedMemberIds)
  maillagePosts: [
    {
      id: 'post-1',
      authorId: 'roger-alexandre',
      date: 'Répertoire La Cargaison',
      category: 'Projet d’exposition ou spectacle',
      soughtDiscipline: 'Arts numériques & 3D',
      title: 'Maillage Arts visuels & Projection architecturale (Modèle Du concret vers l’immatériel)',
      body: 'Exemple de maillage réalisé au sein du collectif : transposition d’un corpus pictural de 50 ans en œuvre immersive sonore et visuelle.',
      interestedMemberIds: ['philippe-corriveau', 'jessyca-viens-gaboriau', 'evan-patruno'],
      replies: [
        {
          authorName: 'Jessyca Viens-Gaboriau',
          date: 'Documentation',
          text: 'Captation photographique complète de l’avant-première disponible dans la galerie.'
        }
      ]
    },
    {
      id: 'post-2',
      authorId: 'thomas-hodgson',
      date: 'Répertoire La Cargaison',
      category: 'Recherche de collaborateur',
      soughtDiscipline: 'Musique & Son',
      title: 'Maillage Musique acoustique & Scénographie numérique en direct (VJing)',
      body: 'À l’image de la création Hommage à Cohen et du spectacle avec Serge and Peppers, espace d’échange pour associer concerts acoustiques et projections immersives.',
      interestedMemberIds: ['marianne-quintal-emard', 'clement-boucher'],
      replies: []
    }
  ],

  // #13 : Groupes de travail / Comités artistiques avec sous-page dédiée (#/projets/[id]), jalons et fil de travail
  chantiers: [
    {
      id: 'chantier-1',
      title: 'Du concret vers l’immatériel — Arts visuels, Numérique & Photographie',
      members: ['roger-alexandre', 'philippe-corriveau', 'jessyca-viens-gaboriau', 'evan-patruno'],
      disciplines: 'Peinture, Création numérique 2D/3D & Photographie',
      stage: 'Œuvre créée et diffusée à la cathédrale Saint-Jean-l’Évangéliste — En tournée régionale',
      target: 'Diffusion et rayonnement des œuvres en Montérégie',
      milestones: [
        { id: 'm-1', title: 'Sélection et numérisation haute résolution du corpus pictural de Roger Alexandre', due: 'Complété', owner: 'Roger Alexandre & Jessyca Viens-Gaboriau', done: true },
        { id: 'm-2', title: 'Animation 2D/3D et intégration sur les 14 projecteurs Mur [à] mur', due: 'Complété', owner: 'Philippe Corriveau', done: true },
        { id: 'm-3', title: 'Préparation du dossier de diffusion hors-les-murs pour les maisons de la culture', due: 'Automne 2026', owner: 'Evan Patruno & Comité diffusion', done: false }
      ],
      discussions: [
        { authorName: 'Roger Alexandre', date: 'Archive création', text: 'La transposition numérique respecte fidèlement la matière et la gestuelle des toiles originales.' },
        { authorName: 'Jessyca Viens-Gaboriau', date: 'Suivi', text: 'Les photographies haute résolution de l’avant-première sont prêtes pour le dossier de presse.' }
      ]
    },
    {
      id: 'chantier-2',
      title: 'Hommage à Leonard Cohen — Musique, Scénographie numérique & Photo',
      members: ['thomas-hodgson', 'marianne-quintal-emard'],
      disciplines: 'Voix, Guitare, Projection immersive & Photographie de scène',
      stage: 'Présenté à la cathédrale Saint-Jean-l’Évangéliste (2026) — Prêt pour tournée',
      target: 'Programmation La Cargaison & Diffuseurs partenaires',
      milestones: [
        { id: 'm-21', title: 'Arrangements musicaux (voix, guitare, contrebasse) et répétitions en nef', due: 'Complété', owner: 'Thomas Hodgson', done: true },
        { id: 'm-22', title: 'Captation photographique officielle du spectacle', due: 'Complété', owner: 'Marianne Quintal-Émard', done: true },
        { id: 'm-23', title: 'Dépôt aux réseaux de diffusion municipaux 2026-2027', due: 'Novembre 2026', owner: 'Thomas Hodgson', done: false }
      ],
      discussions: [
        { authorName: 'Thomas Hodgson', date: 'Production', text: 'La fiche technique (Technical Rider) est finalisée pour les salles de 150 à 400 places.' }
      ]
    },
    {
      id: 'chantier-3',
      title: 'L’Art et la nature — Multimédia, Réalité virtuelle & Son',
      members: ['clement-boucher', 'francoise-dancause', 'marjolaine-quintal'],
      disciplines: 'Création 2D/3D, Jeux vidéo interactifs, Narration & Scénographie',
      stage: 'Création originale diffusée à Saint-Jean-sur-Richelieu (2025)',
      target: 'Expérience immersive et interactive',
      milestones: [
        { id: 'm-31', title: 'Conception narrative et scénographique en nef', due: 'Complété', owner: 'Françoise Dancause & Marjolaine Quintal', done: true },
        { id: 'm-32', title: 'Programmation interactive TouchDesigner et stations VR', due: 'Complété', owner: 'Clément Boucher', done: true }
      ],
      discussions: []
    }
  ],

  // #11 : Banque de mutualisation d'équipements et d'espaces entre membres
  equipements: [
    {
      id: 'eq-1',
      ownerId: 'francoise-dancause',
      type: 'Espace d’atelier / Répétition',
      title: 'Mur [à] mur — Cathédrale Saint-Jean-l’Évangéliste (215, rue Longueuil)',
      availabilityBadge: 'Sur réservation C.A.',
      specs: '14 projecteurs laser HD, système sonore immersif multicanal, stations de réalité virtuelle et nef d’expérimentation.',
      conditions: 'Accessible aux membres actifs pour les résidences, laboratoires de recherche-création et projets collectifs adoptés.'
    },
    {
      id: 'eq-2',
      ownerId: 'clement-boucher',
      type: 'Équipement numérique / Projection',
      title: 'Kit de capteurs interactifs (LiDAR / Kinect Azure) & Boîtier d’acquisition SDI/HDMI',
      availabilityBadge: 'Prêt solidaire entre membres',
      specs: 'Compatible TouchDesigner, MadMapper et Resolume Arena pour installations réactives au mouvement.',
      conditions: 'Prêt gratuit pour tests en atelier entre membres de La Cargaison ou location solidaire pour exposition.'
    },
    {
      id: 'eq-3',
      ownerId: 'jessyca-viens-gaboriau',
      type: 'Outillage / Arts visuels & Scénographie',
      title: 'Ensemble d’éclairage studio portatif (2 flashs sur batterie + boîte à lumière) pour reproduction d’œuvres',
      availabilityBadge: 'Disponible au prêt / Tarif membre',
      specs: 'Température calibrée 5500K sans reflet pour photographier tableaux, sculptures et installations.',
      conditions: 'Disponible sur rendez-vous à Saint-Jean-sur-Richelieu pour documenter les portfolios des membres.'
    },
    {
      id: 'eq-4',
      ownerId: 'thomas-hodgson',
      type: 'Audio / Enregistrement',
      title: 'Système de sonorisation compact (2 enceintes actives QSC + console 12 pistes + 4 micros)',
      availabilityBadge: 'Prêt solidaire entre membres',
      specs: 'Idéal pour vernissages, lectures publiques, cabarets littéraires et performances acoustiques hors-les-murs.',
      conditions: 'Mutualisation entre membres pour événements culturels en Montérégie.'
    }
  ],

  // #12 : Répertoire des compétences croisées (« Bourse d'entraide professionnelle »)
  competences: [
    {
      id: 'comp-1',
      memberId: 'jessyca-viens-gaboriau',
      domain: 'Photographie d’œuvres & Captation scénique',
      title: 'Documentation photographique professionnelle d’œuvres d’art, vernissages et spectacles en basse lumière',
      modality: 'Tarif solidaire membre / Échange de services',
      details: 'Photographie haute résolution calibrée pour vos demandes de bourses CALQ/CAC, portfolios et affiches.'
    },
    {
      id: 'comp-2',
      memberId: 'clement-boucher',
      domain: 'Intégration multimédia, Mapping & 3D',
      title: 'Accompagnement technique en projection vidéo (MadMapper / TouchDesigner) et interactivité',
      modality: 'Co-création / Mentorat technique entre membres',
      details: 'Aide aux artistes en arts visuels, musique ou scène souhaitant intégrer de la vidéo générative ou du mapping à leur œuvre.'
    },
    {
      id: 'comp-3',
      memberId: 'francoise-dancause',
      domain: 'Rédaction, Dramaturgie & Dossiers de subvention',
      title: 'Relecture critique, structuration narrative et conseil sur les dossiers CALQ / CAC / Ententes culturelles',
      modality: 'Entraide collective / Consultation',
      details: 'Appui à la formulation de la démarche artistique, du mérite et de l’impact culturel des projets de maillage.'
    },
    {
      id: 'comp-4',
      memberId: 'evan-patruno',
      domain: 'Commissariat, Arts visuels & Gouvernance',
      title: 'Conseil en mise en espace d’expositions collectives, présentation de portfolio et liaison C.A.',
      modality: 'Bénévolat C.A. / Entraide entre membres',
      details: 'Accompagnement pour l’accrochage, la préparation de cartels et la structuration de projets d’exposition collective.'
    },
    {
      id: 'comp-5',
      memberId: 'dominique-paul',
      domain: 'Recherche artistique & Rayonnement contemporain',
      title: 'Mentorat sur les dossiers d’artistes en art contemporain, résidences internationales et centres d’artistes',
      modality: 'Échange entre pairs',
      details: 'Partage d’expérience sur la diffusion en centres d’artistes autogérés, musées et réseaux internationaux.'
    },
    {
      id: 'comp-6',
      memberId: 'thomas-hodgson',
      domain: 'Direction musicale, Sonorisation & Régie',
      title: 'Conception d’ambiances sonores pour expositions et conseil en régie technique de spectacle',
      modality: 'Co-création / Tarif membre',
      details: 'Création de trames sonores originales et préparation de fiches techniques (Technical Riders) pour la tournée.'
    }
  ],

  // #14 : Radar des appels de dossiers, subventions, 1 % et résidences
  bourses: [
    {
      id: 'bourse-1',
      category: 'Bourses CALQ / CAC',
      agency: 'CALQ — Conseil des arts et des lettres du Québec',
      program: 'Programme de partenariat territorial de la Montérégie',
      amount: 'Jusqu’à 25 000 $ par projet',
      deadline: 'Automne / Hiver (annuel)',
      targetDisciplines: 'Toutes disciplines artistiques (Artistes professionnels et collectifs résidant en Montérégie)',
      url: 'https://www.calq.gouv.qc.ca'
    },
    {
      id: 'bourse-2',
      category: 'Bourses CALQ / CAC',
      agency: 'CALQ — Conseil des arts et des lettres du Québec',
      program: 'Recherche et création / Exploration et déploiement numérique',
      amount: 'Jusqu’à 35 000 $',
      deadline: 'En continu / dates fixes par volet',
      targetDisciplines: 'Arts visuels, arts numériques, arts vivants, musique, littérature',
      url: 'https://www.calq.gouv.qc.ca'
    },
    {
      id: 'bourse-3',
      category: 'Bourses CALQ / CAC',
      agency: 'CAC — Conseil des arts du Canada',
      program: 'Explorer et créer (Du concept à la réalisation)',
      amount: 'Jusqu’à 25 000 $ à 60 000 $',
      deadline: 'Pluriannuel',
      targetDisciplines: 'Artistes professionnels et collectifs artistiques',
      url: 'https://conseildesarts.ca'
    },
    {
      id: 'bourse-4',
      category: 'Art public (Politique du 1 %)',
      agency: 'Ministère de la Culture et des Communications (MCC)',
      program: 'Politique d’intégration des arts à l’architecture et à l’environnement (1 %)',
      amount: 'Variable selon le budget de construction public',
      deadline: 'Selon les appels régionaux (Montérégie)',
      targetDisciplines: 'Arts visuels, sculpture, installation architecturale et arts numériques',
      url: 'https://www.quebec.ca/culture/arts-visuels/integration-arts-architecture'
    },
    {
      id: 'bourse-5',
      category: 'Fonds municipaux & MRC',
      agency: 'Ville de Saint-Jean-sur-Richelieu / MRC du Haut-Richelieu',
      program: 'Soutien aux initiatives culturelles et projets de médiation',
      amount: 'Variable selon l’entente de développement culturel',
      deadline: 'Printemps & Automne',
      targetDisciplines: 'Projets favorisant l’accès à la culture et le rayonnement régional',
      url: 'https://sjsr.ca/'
    }
  ],

  // #15 : Répertoire des lieux de diffusion partenaires
  lieuxPartenaires: [
    {
      id: 'lieu-1',
      name: 'Cathédrale Saint-Jean-l’Évangéliste — Dispositif Mur [à] mur',
      city: 'Saint-Jean-sur-Richelieu (215, rue Longueuil)',
      type: 'Lieu de création et diffusion immersive (La Cargaison)',
      disciplines: 'Projections architecturales, musique, arts visuels, réalité virtuelle et patrimoine',
      techSpecs: '14 projecteurs haute puissance, système sonore immersif, casques VR, architecture patrimoniale à grand volume.',
      collaborations: 'Du concret vers l’immatériel (Roger Alexandre), Hommage à Cohen (Thomas Hodgson), L’Art et la nature, Noël Illuminé, De père en fille.',
      website: 'https://www.lacargaison.org/'
    },
    {
      id: 'lieu-2',
      name: 'Centre Saint-Romuald',
      city: 'Farnham (Montérégie)',
      type: 'Lieu patrimonial & Diffusion multimédia hors-les-murs',
      disciplines: 'Projections immersives, histoire, narration et arts vivants',
      techSpecs: 'Architecture intérieure propice aux projections grand format et spectacles immersifs.',
      collaborations: 'Farnham renaît de ses cendres (Création La Cargaison, narration Danny Gilmore).',
      website: 'https://www.lacargaison.org/programmation/farnham-renait-de-ses-cendres/'
    },
    {
      id: 'lieu-3',
      name: 'Presbytère de L’Acadie',
      city: 'Saint-Jean-sur-Richelieu (Secteur patrimonial L’Acadie)',
      type: 'Site patrimonial & Espace d’exposition numérique',
      disciplines: 'Installations historiques, arts visuels, mémoire et patrimoine vivant',
      techSpecs: 'Salles d’exposition intimistes et dispositifs audiovisuels intégrés.',
      collaborations: 'Entre histoire et innovation (Hortense Bove-Tugault, Napoléon Bourassa et Joseph Crevier).',
      website: 'https://www.lacargaison.org/programmation/entre-histoire-et-innovation/'
    },
    {
      id: 'lieu-4',
      name: 'Bibliothèque Marie-Uguay',
      city: 'Notre-Dame-de-l’Île-Perrot',
      type: 'Lieu culturel municipal & Espace d’exposition',
      disciplines: 'Installations multimédias, arts visuels, histoire et médiation culturelle',
      techSpecs: 'Espace d’accueil public pouvant intégrer décors scénographiques et projections.',
      collaborations: 'Installation ferroviaire virtuelle de La Cargaison (Françoise Dancause, Marjolaine Quintal, Jessyca Viens-Gaboriau).',
      website: 'https://www.ndip.org/'
    },
    {
      id: 'lieu-5',
      name: 'Espace public — Ancienne usine de filtration',
      city: 'Salaberry-de-Valleyfield',
      type: 'Diffusion architecturale extérieure grand format',
      disciplines: 'Projection mapping extérieur, musique et photographie nocturne',
      techSpecs: 'Façade architecturale extérieure pour projections monumentales.',
      collaborations: 'Chaleur et lumières (150e anniversaire de Salaberry-de-Valleyfield — Kim Valiquette, Françoise Dancause, Thomas Hodgson).',
      website: 'https://www.lacargaison.org/creations/'
    },
    {
      id: 'lieu-6',
      name: 'Domaine du Ridge & Lieux d’exposition en Montérégie',
      city: 'Saint-Armand / Brome-Missisquoi & Haut-Richelieu',
      type: 'Expositions collectives & Galeries partenaires',
      disciplines: 'Peinture, photographie, sculpture et arts visuels',
      techSpecs: 'Espaces d’accrochage lumineux pour expositions collectives et vernissages.',
      collaborations: 'Expositions collectives réunissant notamment les membres Evan Patruno et Andrew Jason (Shawn AJ Christie).',
      website: 'https://www.facebook.com/evanpatruno.EP'
    }
  ],

  horsLesMurs: [
    {
      id: 'evt-real-1',
      artistId: 'francoise-dancause',
      date: 'Vendredis et samedis de novembre 2026 (18 h à 21 h)',
      location: 'Centre Saint-Romuald, Farnham',
      category: 'Projections immersives & Spectacle',
      title: 'Farnham renaît de ses cendres (Narration de Danny Gilmore)',
      link: 'https://www.lacargaison.org/programmation/farnham-renait-de-ses-cendres/'
    },
    {
      id: 'evt-real-2',
      artistId: 'marjolaine-quintal',
      date: 'Dès le 4 septembre 2025',
      location: 'Presbytère de L’Acadie (Saint-Jean-sur-Richelieu)',
      category: 'Installation numérique historique',
      title: 'Entre histoire et innovation (Hortense Bove-Tugault, Napoléon Bourassa et Joseph Crevier)',
      link: 'https://www.lacargaison.org/programmation/entre-histoire-et-innovation/'
    },
    {
      id: 'evt-real-3',
      artistId: 'dominique-paul',
      date: '2022 — 2024 (Portfolio actif)',
      location: 'Expositions et performances (dominiquepaul.net)',
      category: 'Expositions & Performances',
      title: 'Silent Fall / Silent Spring & Talk-to-Me: interactive bird',
      link: 'https://dominiquepaul.net/'
    },
    {
      id: 'evt-real-4',
      artistId: 'alexandre-belliard',
      date: 'En continu',
      location: 'Québec & Francophonie (Chaîne YouTube officielle)',
      category: 'Chanson & Histoire',
      title: 'Légendes d’un peuple — Concerts-conférences et capsules historiques',
      link: 'https://www.youtube.com/channel/UClm3UiRUzpCAKiOLi0mg77w'
    }
  ],

  // #13 : Boîte de réception réelle par membre
  messages: [
    {
      id: 'msg-1',
      recipientId: 'evan-patruno',
      senderName: 'Jacinthe Auclair (Membre — Photographe)',
      senderEmail: 'jacinthe@exemple.ca',
      date: 'Aujourd’hui',
      subject: 'Maillage Arts visuels & Photographie en Montérégie',
      body: 'Bonjour Evan, partante pour échanger sur une prochaine exposition collective réunissant peinture et photographie argentique.'
    }
  ],

  // #15 : Demandes d'adhésion soumises via l'onglet 06 Devenir membre
  membershipApplications: [],

  supportLetters: [
    {
      id: 'let-1',
      artistId: 'evan-patruno',
      grantAgency: 'CALQ — Conseil des arts et des lettres du Québec (Programme territorial Montérégie)',
      deadline: '2026-11-15',
      projectTitle: 'Demande de lettre d’appui officielle (Avantage membre La Cargaison)',
      summary: 'Démonstration du guichet de demande de lettre d’appui officielle mentionné dans la FAQ de lacargaison.org/membres/.',
      status: 'Approuvée par le C.A.'
    }
  ],

  projectSubmissions: [
    {
      id: 'proj-1',
      artistId: 'roger-alexandre',
      coArtists: 'Équipe multidisciplinaire de La Cargaison',
      title: 'Du concret vers l’immatériel – Roger Alexandre, 50 ans de création',
      budget: 'Selon barèmes professionnels',
      meritText: 'Qualité artistique des œuvres (50 ans de création picturale) et pertinence de la transposition immersive.',
      impactText: 'Maillage entre arts visuels traditionnels et création numérique 2D/3D au sein du collectif.',
      feasibilityText: 'Diffusion à la cathédrale Saint-Jean-l’Évangéliste avec l’appui technique de La Cargaison.',
      conflictDeclared: 'Procédure de gestion des conflits d’intérêts appliquée conformément à lacargaison.org/membres/.',
      scoreMerit: 46,
      scoreImpact: 28,
      scoreFeasibility: 18,
      status: 'Admissible (Seuils atteints)'
    }
  ],

  // #17 : Suivi budgétaire et Répartition des fonds par projet du C.A.
  budgetData: {
    annualEnvelope: 145000,
    fiscalYear: 'Exercice 2026–2027',
    allocations: [
      {
        id: 'bud-1',
        projectTitle: 'Du concret vers l’immatériel (Création & Diffusion en nef)',
        category: 'Production & Cachets d’artistes',
        beneficiary: 'Roger Alexandre, Philippe Corriveau, Jessyca Viens-Gaboriau',
        amount: 32000,
        status: 'Adopté / Engagé'
      },
      {
        id: 'bud-2',
        projectTitle: 'Hommage à Leonard Cohen & Programmation musicale',
        category: 'Diffusion & Scénographie numérique',
        beneficiary: 'Thomas Hodgson, Marianne Quintal-Émard & équipe',
        amount: 18500,
        status: 'Adopté / Engagé'
      },
      {
        id: 'bud-3',
        projectTitle: 'Maintenance du dispositif Mur [à] mur (14 projecteurs & parc VR)',
        category: 'Infrastructures & Mutualisation (#11)',
        beneficiary: 'Collectif des 99 membres',
        amount: 24000,
        status: 'Adopté / Engagé'
      },
      {
        id: 'bud-4',
        projectTitle: 'Enveloppe réservée aux nouveaux maillages interdisciplinaires (Grille 50/30/20)',
        category: 'Réserve projets en évaluation',
        beneficiary: 'Appels à projets internes des membres',
        amount: 25000,
        status: 'En réserve (Évaluation C.A.)'
      }
    ]
  }
};

let state = loadState();
let activeGalleryDiscipline = state.ui?.activeGalleryDiscipline || 'all';
let activeGalleryAvailability = state.ui?.activeGalleryAvailability || 'all';
let gallerySearchQuery = '';
let gallerySortMode = 'default';
let activeArtistDiscipline = state.ui?.activeArtistDiscipline || 'all';
let activeArtistLetter = state.ui?.activeArtistLetter || 'all';
let activeArtistAvail = state.ui?.activeArtistAvail || 'all';
let artistViewMode = state.ui?.artistViewMode || 'grid'; // 'grid' | 'list' (#8)
let filterOnlyWithWorks = state.ui?.filterOnlyWithWorks || false; // (#8)
let artistSearchQuery = '';
let activeMaillageSubtab = state.ui?.activeMaillageSubtab || 'babillard';
let activeMaillageDiscFilter = 'all';
let activeMaillageTypeFilter = 'all';
let jumelageQuickDiscipline = 'none'; // (#11)
let activeAtelierSubtab = state.ui?.activeAtelierSubtab || 'portfolio';
let currentViewName = 'galerie';
let currentDetailId = null;
let pendingLocalFilesDataUrls = []; // (#2)

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.artists && parsed.artists.length >= 90) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Lecture localStorage impossible:', e);
  }
  return JSON.parse(JSON.stringify(INITIAL_DATA));
}

function saveState() {
  try {
    state.ui = {
      activeGalleryDiscipline,
      activeGalleryAvailability,
      activeArtistDiscipline,
      activeArtistLetter,
      activeArtistAvail,
      artistViewMode,
      filterOnlyWithWorks,
      activeMaillageSubtab,
      activeAtelierSubtab
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Sauvegarde localStorage impossible:', e);
  }
}

function getArtistById(id) {
  return state.artists.find((a) => a.id === id) || state.artists[0];
}

// #5 : Obtenir toutes les œuvres où un artiste est créateur principal OU co-créateur
function getWorksForArtist(artistId) {
  return state.works.filter(
    (w) => w.artistId === artistId || (Array.isArray(w.coArtistIds) && w.coArtistIds.includes(artistId))
  );
}

/* ==========================================================================
   INITIALISATION & ROUTEUR DE SOUS-PAGES
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  applyThemeMode();
  populateMemberSelector();
  bindNavigation();
  bindSubnavs();
  bindRoleSwitcher();
  bindFilters();
  bindModals();
  bindCopyUrlButton();

  window.addEventListener('hashchange', () => {
    handleRouteFromUrl(false);
  });

  if (!window.location.hash || window.location.hash === '#') {
    window.history.replaceState(null, '', '#/galerie');
  }
  renderAll();
  handleRouteFromUrl(true);
});

// #20 : Bascule Mode Galerie (Clair) / Mode Nef (Sombre)
function applyThemeMode() {
  const isNef = state.themeMode === 'nef';
  document.body.classList.toggle('theme-nef', isNef);
  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.textContent = isNef ? 'Mode Galerie (Clair)' : 'Mode Nef (Sombre)';
    btn.classList.toggle('active', isNef);
  }
}

function navigateToRoute(routeHash) {
  if (window.location.hash !== routeHash) {
    window.location.hash = routeHash;
  } else {
    handleRouteFromUrl(false);
  }
}

function handleRouteFromUrl(isInitialLoad) {
  const hash = (window.location.hash || '#/galerie').replace(/^#\/?/, '');
  const parts = hash.split('/').filter(Boolean);
  const root = parts[0] || 'galerie';
  const sub = parts[1] || '';

  if (root === 'galerie') {
    if (sub === 'capsule' && parts[2]) {
      state.activeCapsuleId = parts[2];
      saveState();
      renderCapsules();
    }
    activateViewDOM('galerie');
    updateBreadcrumb([{ label: "01. Galerie d'œuvres", route: '#/galerie' }], `#/${hash || 'galerie'}`);
  } else if (root === 'oeuvres' && sub) {
    currentDetailId = sub;
    renderOeuvreSubpage(sub);
    activateViewDOM('oeuvre-detail', 'galerie');
    const w = state.works.find((x) => x.id === sub);
    updateBreadcrumb(
      [
        { label: "01. Galerie d'œuvres", route: '#/galerie' },
        { label: w ? w.title : 'Œuvre', route: `#/oeuvres/${sub}` }
      ],
      `#/oeuvres/${sub}`
    );
  } else if (root === 'artistes') {
    if (sub) {
      currentDetailId = sub;
      renderArtisteSubpage(sub);
      activateViewDOM('artiste-detail', 'artistes');
      const a = getArtistById(sub);
      updateBreadcrumb(
        [
          { label: `02. Répertoire des membres (${state.artists.length})`, route: '#/artistes' },
          { label: a ? a.name : 'Artiste', route: `#/artistes/${sub}` }
        ],
        `#/artistes/${sub}`
      );
    } else {
      activateViewDOM('artistes');
      updateBreadcrumb(
        [{ label: `02. Répertoire des membres (${state.artists.length})`, route: '#/artistes' }],
        '#/artistes'
      );
    }
  } else if (root === 'projets' && sub) {
    currentDetailId = sub;
    renderProjetSubpage(sub);
    activateViewDOM('projet-detail', 'maillage');
    const c = (state.chantiers || []).find((x) => x.id === sub);
    const p = (state.maillagePosts || []).find((x) => x.id === sub);
    const labelTitle = c ? c.title : p ? p.title : 'Groupe de travail';
    updateBreadcrumb(
      [
        { label: '03. Maillage & Groupes de travail', route: '#/maillage/chantiers' },
        { label: labelTitle, route: `#/projets/${sub}` }
      ],
      `#/projets/${sub}`
    );
  } else if (root === 'maillage') {
    const validSubs = ['babillard', 'chantiers', 'equipements', 'competences', 'bourses', 'lieux', 'calendrier'];
    activeMaillageSubtab = validSubs.includes(sub) ? sub : 'babillard';
    saveState();
    document.querySelectorAll('#maillageSubnav .subnav-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.msub === activeMaillageSubtab);
    });
    renderMaillage();
    activateViewDOM('maillage');
    const subLabels = {
      babillard: 'Babillard & Jumelage rapide',
      chantiers: 'Groupes de travail & Comités (#13)',
      equipements: "Banque de mutualisation d'équipements (#11)",
      competences: "Bourse de compétences croisées (#12)",
      bourses: 'Radar des bourses & appels de dossiers (#14)',
      lieux: 'Répertoire des lieux de diffusion partenaires (#15)',
      calendrier: 'Calendrier hors-les-murs (Public)'
    };
    updateBreadcrumb(
      [
        { label: '03. Maillage & Vie du collectif', route: '#/maillage/babillard' },
        { label: subLabels[activeMaillageSubtab], route: `#/maillage/${activeMaillageSubtab}` }
      ],
      `#/maillage/${activeMaillageSubtab}`
    );
  } else if (root === 'atelier') {
    const validSubs = ['portfolio', 'messages', 'appui', 'depot'];
    activeAtelierSubtab = validSubs.includes(sub) ? sub : 'portfolio';
    saveState();
    document.querySelectorAll('#atelierSubnav .subnav-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.asub === activeAtelierSubtab);
    });
    renderAtelier();
    activateViewDOM('atelier');
    const subLabels = {
      portfolio: "Portfolio, Journal & Dépôt d'œuvre",
      messages: 'Messages reçus',
      appui: "Demander une lettre d'appui du C.A.",
      depot: 'Déposer un projet (Grille 50/30/20)'
    };
    updateBreadcrumb(
      [
        { label: '04. Mon atelier', route: '#/atelier/portfolio' },
        { label: subLabels[activeAtelierSubtab], route: `#/atelier/${activeAtelierSubtab}` }
      ],
      `#/atelier/${activeAtelierSubtab}`
    );
  } else if (root === 'gouvernance-ca' || root === 'ca-admin') {
    activateViewDOM('ca-admin');
    updateBreadcrumb([{ label: '05. Gouvernance C.A.', route: '#/gouvernance-ca' }], '#/gouvernance-ca');
  } else if (root === 'adhesion') {
    renderAdhesion();
    activateViewDOM('adhesion');
    updateBreadcrumb([{ label: '06. Devenir membre', route: '#/adhesion' }], '#/adhesion');
  } else {
    activateViewDOM('galerie');
    updateBreadcrumb([{ label: "01. Galerie d'œuvres", route: '#/galerie' }], '#/galerie');
  }

  if (!isInitialLoad) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function activateViewDOM(sectionId, highlightTabId) {
  currentViewName = sectionId;
  const tabTarget = highlightTabId || sectionId;
  document.querySelectorAll('.module-tab').forEach((t) => {
    t.classList.toggle('active', t.dataset.view === tabTarget);
  });
  document.querySelectorAll('.view-section').forEach((sec) => {
    sec.classList.toggle('active', sec.id === `view-${sectionId}`);
  });
}

function updateBreadcrumb(items, routeString) {
  const trail = document.getElementById('breadcrumbTrail');
  const badge = document.getElementById('currentRouteBadge');
  if (badge) badge.textContent = routeString;
  if (!trail) return;

  const rootCrumb = `<a href="#/galerie" class="breadcrumb-link">Portail La Cargaison</a>`;
  const crumbsHtml = items
    .map((item, idx) => {
      const isLast = idx === items.length - 1;
      if (isLast) {
        return `<span class="breadcrumb-sep">/</span> <span class="breadcrumb-current">${item.label}</span>`;
      }
      return `<span class="breadcrumb-sep">/</span> <a href="${item.route}" class="breadcrumb-link">${item.label}</a>`;
    })
    .join(' ');

  trail.innerHTML = `${rootCrumb} ${crumbsHtml}`;
}

function bindCopyUrlButton() {
  const btn = document.getElementById('copySubpageUrlBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const orig = btn.textContent;
      btn.textContent = 'Lien copié !';
      setTimeout(() => {
        btn.textContent = orig;
      }, 1800);
    });
  });
}

function populateMemberSelector() {
  const select = document.getElementById('activeMemberSelect');
  const sorted = [...state.artists].sort((a, b) => a.name.localeCompare(b.name, 'fr'));
  select.innerHTML = sorted
    .map(
      (a) =>
        `<option value="${a.id}" ${a.id === state.currentMemberId ? 'selected' : ''}>${a.name} — ${a.roleTitle}</option>`
    )
    .join('');

  select.addEventListener('change', (e) => {
    state.currentMemberId = e.target.value;
    if (state.currentRole === 'public') {
      state.currentRole = 'member';
    }
    saveState();
    renderAll();
    if (currentViewName === 'artiste-detail') {
      navigateToRoute(`#/artistes/${state.currentMemberId}`);
    }
  });
}

function bindNavigation() {
  document.querySelectorAll('.module-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const v = tab.dataset.view;
      if (v === 'galerie') navigateToRoute('#/galerie');
      else if (v === 'artistes') navigateToRoute('#/artistes');
      else if (v === 'maillage') navigateToRoute(`#/maillage/${activeMaillageSubtab}`);
      else if (v === 'atelier') navigateToRoute(`#/atelier/${activeAtelierSubtab}`);
      else if (v === 'ca-admin') navigateToRoute('#/gouvernance-ca');
      else if (v === 'adhesion') navigateToRoute('#/adhesion');
    });
  });
}

function switchView(viewName) {
  if (viewName === 'galerie') navigateToRoute('#/galerie');
  else if (viewName === 'artistes') navigateToRoute('#/artistes');
  else if (viewName === 'maillage') navigateToRoute(`#/maillage/${activeMaillageSubtab}`);
  else if (viewName === 'atelier') navigateToRoute(`#/atelier/${activeAtelierSubtab}`);
  else if (viewName === 'ca-admin') navigateToRoute('#/gouvernance-ca');
  else if (viewName === 'adhesion') navigateToRoute('#/adhesion');
}

function bindSubnavs() {
  document.querySelectorAll('#maillageSubnav .subnav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeMaillageSubtab = btn.dataset.msub;
      saveState();
      navigateToRoute(`#/maillage/${activeMaillageSubtab}`);
    });
  });

  document.querySelectorAll('#atelierSubnav .subnav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeAtelierSubtab = btn.dataset.asub;
      saveState();
      navigateToRoute(`#/atelier/${activeAtelierSubtab}`);
    });
  });
}

function bindRoleSwitcher() {
  document.querySelectorAll('.role-switch-btn[data-role]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.currentRole = btn.dataset.role;
      saveState();
      renderAll();
    });
  });

  // #20 : Bouton Mode Nef / Mode Galerie
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      state.themeMode = state.themeMode === 'nef' ? 'galerie' : 'nef';
      saveState();
      applyThemeMode();
    });
  }

  document.getElementById('resetDemoBtn').addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY);
    state = JSON.parse(JSON.stringify(INITIAL_DATA));
    applyThemeMode();
    populateMemberSelector();
    renderAll();
  });
}

function bindFilters() {
  // Filtres Galerie + Recherche (#4) + Tri (#4)
  document.querySelectorAll('#disciplineFilterGroup .filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#disciplineFilterGroup .filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeGalleryDiscipline = btn.dataset.discipline;
      saveState();
      renderGallery();
    });
  });

  document.getElementById('availabilityFilter').addEventListener('change', (e) => {
    activeGalleryAvailability = e.target.value;
    saveState();
    renderGallery();
  });

  document.getElementById('gallerySearchInput').addEventListener('input', (e) => {
    gallerySearchQuery = e.target.value.trim().toLowerCase();
    renderGallery();
  });

  document.getElementById('gallerySortSelect').addEventListener('change', (e) => {
    gallerySortMode = e.target.value;
    renderGallery();
  });

  // Filtres Artistes + Bascule Vue Grille / Vue Index (#8) + Filtre Avec œuvres (#8)
  document.getElementById('artistAvailabilityFilter').addEventListener('change', (e) => {
    activeArtistAvail = e.target.value;
    saveState();
    renderArtists();
  });

  document.getElementById('artistSearchInput').addEventListener('input', (e) => {
    artistSearchQuery = e.target.value.trim().toLowerCase();
    renderArtists();
  });

  document.getElementById('viewModeGridBtn').addEventListener('click', () => {
    artistViewMode = 'grid';
    saveState();
    renderArtists();
  });

  document.getElementById('viewModeListBtn').addEventListener('click', () => {
    artistViewMode = 'list';
    saveState();
    renderArtists();
  });

  document.getElementById('filterWithWorksBtn').addEventListener('click', () => {
    filterOnlyWithWorks = !filterOnlyWithWorks;
    saveState();
    renderArtists();
  });
}

function bindModals() {
  document.getElementById('closePrivateMsgModal').addEventListener('click', () => {
    document.getElementById('privateMsgModal').classList.remove('open');
  });
  document.getElementById('closeDocumentModal').addEventListener('click', () => {
    document.getElementById('documentModal').classList.remove('open');
  });

  ['privateMsgModal', 'documentModal'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        if (e.target === el) el.classList.remove('open');
      });
    }
  });
}

/* ==========================================================================
   RENDU GLOBAL
   ========================================================================== */
function renderAll() {
  document.getElementById('navMemberCount').textContent = state.artists.length;

  document.querySelectorAll('.role-switch-btn[data-role]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.role === state.currentRole);
  });

  const select = document.getElementById('activeMemberSelect');
  if (select && select.value !== state.currentMemberId) {
    select.value = state.currentMemberId;
  }

  const me = getArtistById(state.currentMemberId);
  const navUser = document.getElementById('navUserStatus');

  if (state.currentRole === 'public') {
    navUser.innerHTML = `
      <span>Visiteur public</span>
      <button type="button" class="btn btn--outline btn--small" id="quickLoginBtn">Connexion membre</button>
    `;
    document.getElementById('quickLoginBtn').addEventListener('click', () => {
      state.currentRole = 'member';
      saveState();
      renderAll();
    });
  } else if (state.currentRole === 'member') {
    navUser.innerHTML = `
      <img src="${me.photo}" alt="${me.name}" class="module-nav__avatar" />
      <span>Membre : <strong>${me.name}</strong></span>
    `;
  } else {
    navUser.innerHTML = `
      <img src="${me.photo}" alt="${me.name}" class="module-nav__avatar" />
      <span>C.A. (Admin) : <strong>${me.name}</strong></span>
    `;
  }

  // Compteur de messages reçus pour le membre actif (#13)
  const myMessagesCount = (state.messages || []).filter((m) => m.recipientId === me.id).length;
  const msgCountSpan = document.getElementById('atelierMsgCount');
  if (msgCountSpan) msgCountSpan.textContent = myMessagesCount;
  const atelierBadge = document.getElementById('atelierNavBadge');
  if (atelierBadge) {
    atelierBadge.textContent = myMessagesCount > 0 ? `Membre (${myMessagesCount} msg)` : 'Membre';
  }

  const pendingLetters = state.supportLetters.filter((l) => l.status.includes('attente')).length;
  const pendingApps = (state.membershipApplications || []).filter((a) => a.status === 'En attente du C.A.').length;
  const totalCaPending = pendingLetters + pendingApps;
  document.getElementById('caPendingCountBadge').textContent =
    totalCaPending > 0 ? `C.A. (${totalCaPending})` : 'C.A.';

  const galerieAction = document.getElementById('galerieHeaderAction');
  if (state.currentRole !== 'public') {
    galerieAction.innerHTML = `<button type="button" class="btn" id="goToPublishBtn">Publier une œuvre (${me.name})</button>`;
    document.getElementById('goToPublishBtn').addEventListener('click', () => {
      activeAtelierSubtab = 'portfolio';
      saveState();
      navigateToRoute('#/atelier/portfolio');
    });
  } else {
    galerieAction.innerHTML = '';
  }

  renderCapsules();
  renderGallery();
  renderArtistFiltersAndAz();
  renderArtists();
  renderMaillage();
  renderAtelier();
  renderCaAdmin();
  renderAdhesion();
}

/* ==========================================================================
   01. RENDU DES CAPSULES & DE LA GALERIE (Recherche & Tri #4, Co-créateurs #5)
   ========================================================================== */
function renderCapsules() {
  const container = document.getElementById('capsulesContainer');
  const activeCap = state.capsules.find((c) => c.id === state.activeCapsuleId) || state.capsules[0];
  const capWorks = state.works.filter((w) => w.capsuleId === activeCap.id);

  const tabsHtml = state.capsules
    .map(
      (c) => `
      <button type="button" class="capsule-tab-btn ${c.id === activeCap.id ? 'active' : ''}" data-cap-id="${c.id}">
        ${c.title}
      </button>
    `
    )
    .join('');

  const worksRowHtml = capWorks
    .map((w) => {
      const artist = getArtistById(w.artistId);
      const cover = w.images && w.images.length > 0 ? w.images[0] : '';
      return `
        <div style="border:1px solid var(--border-color); background:var(--bg-page); padding:0.9rem; cursor:pointer; display:flex; gap:0.85rem; align-items:center;" data-open-work="${w.id}">
          ${
            cover
              ? `<img src="${cover}" alt="${w.title}" style="width:68px; height:68px; object-fit:cover; flex-shrink:0; border:1px solid var(--border-color);" />`
              : `<div style="width:68px; height:68px; background:#161616; color:#fff; display:flex; align-items:center; justify-content:center; font-family:Georgia,serif; font-style:italic; font-size:0.75rem; flex-shrink:0;">Texte</div>`
          }
          <div>
            <div style="font-size:0.68rem; text-transform:uppercase; color:var(--text-muted);">${w.discipline}</div>
            <div style="font-family:var(--font-heading); font-size:0.88rem; font-weight:500;">${w.title}</div>
            <div style="font-size:0.78rem; color:var(--text-secondary);">Par ${artist.name}</div>
          </div>
        </div>
      `;
    })
    .join('');

  container.innerHTML = `
    <div class="capsules-box">
      <div class="capsules-box__header">
        <span style="font-size:0.72rem; text-transform:uppercase; letter-spacing:0.09em; color:var(--text-muted);">
          Expositions capsules — Œuvres réelles des membres
        </span>
        <div class="capsules-box__tabs">
          ${tabsHtml}
        </div>
      </div>
      <div class="capsules-box__body">
        <div class="capsule-intro">
          <div>
            <h2 class="capsule-intro__title">${activeCap.title}</h2>
            <p style="font-size:0.86rem; color:var(--text-secondary); margin-top:0.2rem;">${activeCap.statement}</p>
          </div>
          <span class="capsule-intro__curator">${activeCap.curator}</span>
        </div>
        <div class="capsule-works-row">
          ${worksRowHtml || '<p style="font-size:0.84rem; color:var(--text-muted);">Aucune œuvre assignée à cette capsule.</p>'}
        </div>
      </div>
    </div>
  `;

  container.querySelectorAll('[data-cap-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.activeCapsuleId = btn.dataset.capId;
      saveState();
      renderCapsules();
    });
  });

  container.querySelectorAll('[data-open-work]').forEach((el) => {
    el.addEventListener('click', () => openArtworkModal(el.dataset.openWork));
  });
}

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  let filtered = state.works.filter((w) => {
    const matchDisc = activeGalleryDiscipline === 'all' || w.discipline === activeGalleryDiscipline;
    const matchAvail = activeGalleryAvailability === 'all' || w.availability === activeGalleryAvailability;

    let matchSearch = true;
    if (gallerySearchQuery) {
      const artist = getArtistById(w.artistId);
      const coNames = (w.coArtistIds || []).map((id) => getArtistById(id).name).join(' ');
      const haystack = `${w.title} ${w.medium} ${w.description} ${artist.name} ${coNames}`.toLowerCase();
      matchSearch = haystack.includes(gallerySearchQuery);
    }

    return matchDisc && matchAvail && matchSearch;
  });

  // #4 : Tri des œuvres
  if (gallerySortMode === 'year-desc') {
    filtered.sort((a, b) => Number(b.year) - Number(a.year));
  } else if (gallerySortMode === 'title-asc') {
    filtered.sort((a, b) => a.title.localeCompare(b.title, 'fr'));
  } else if (gallerySortMode === 'artist-asc') {
    filtered.sort((a, b) => getArtistById(a.artistId).name.localeCompare(getArtistById(b.artistId).name, 'fr'));
  } else if (gallerySortMode === 'views-desc') {
    filtered.sort((a, b) => (b.images?.length || 0) - (a.images?.length || 0));
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="color:var(--text-muted); grid-column: 1/-1; padding: 2rem 0;">Aucune œuvre ne correspond aux critères sélectionnés.</p>`;
    return;
  }

  grid.innerHTML = filtered
    .map((work) => {
      const artist = getArtistById(work.artistId);
      const coArtists = (work.coArtistIds || []).map((id) => getArtistById(id));
      const cover = work.images && work.images.length > 0 ? work.images[0] : '';
      const mediaHtml = cover
        ? `<img src="${cover}" alt="${work.title}" loading="lazy" />`
        : `<div class="artwork-card__text-preview"><p>${work.textExcerpt || work.description}</p></div>`;

      const multiBadge =
        work.images && work.images.length > 1
          ? `<span class="artwork-card__multi-badge">${work.images.length} vues</span>`
          : '';

      const coCreatorsHtml =
        coArtists.length > 0
          ? `<div style="font-size:0.74rem; color:var(--text-muted); margin-bottom:0.65rem;">
              Maillage avec : ${coArtists
                .map(
                  (c) =>
                    `<a href="#/artistes/${c.id}" style="color:var(--text-secondary); text-decoration:underline;">${c.name}</a>`
                )
                .join(', ')}
            </div>`
          : '';

      const artistPrimaryLink =
        work.sourceUrl || (artist.links && artist.links[0] ? artist.links[0].url : 'https://www.lacargaison.org/membres/');

      const caControls =
        state.currentRole === 'admin'
          ? `
        <div class="artwork-card__ca-actions">
          <select class="filter-select" style="font-size:0.72rem; padding:0.22rem 0.4rem;" data-assign-capsule="${work.id}">
            <option value="">Hors capsule</option>
            ${state.capsules
              .map(
                (c) =>
                  `<option value="${c.id}" ${work.capsuleId === c.id ? 'selected' : ''}>${c.title.split('—')[0].trim()}</option>`
              )
              .join('')}
          </select>
          <button type="button" class="btn btn--outline btn--small" data-delete-work="${work.id}">Retirer</button>
        </div>
      `
          : '';

      return `
        <article class="artwork-card">
          <div class="artwork-card__media" data-open-work="${work.id}">
            ${mediaHtml}
            <span class="artwork-card__format-tag">${work.formatType}</span>
            ${multiBadge}
          </div>
          <div class="artwork-card__body">
            <span class="artwork-card__discipline">${work.discipline}</span>
            <h3 class="artwork-card__title" data-open-work="${work.id}">${work.title}</h3>
            <button type="button" class="artwork-card__artist-btn" data-open-artist="${artist.id}" style="margin-bottom:0.25rem;">
              Par <strong>${artist.name}</strong> (${artist.roleTitle})
            </button>
            ${coCreatorsHtml}
            <div class="artwork-card__details">
              <span>${work.year}</span>
              <a href="${artistPrimaryLink}" target="_blank" rel="noopener" style="color:var(--text-primary); text-decoration:underline; font-weight:500;">
                Page source &nearr;
              </a>
            </div>
            ${caControls}
          </div>
        </article>
      `;
    })
    .join('');

  grid.querySelectorAll('[data-open-work]').forEach((el) => {
    el.addEventListener('click', () => openArtworkModal(el.dataset.openWork));
  });
  grid.querySelectorAll('[data-open-artist]').forEach((el) => {
    el.addEventListener('click', () => openArtistModal(el.dataset.openArtist));
  });
  grid.querySelectorAll('[data-assign-capsule]').forEach((sel) => {
    sel.addEventListener('change', (e) => {
      const work = state.works.find((w) => w.id === sel.dataset.assignCapsule);
      if (work) {
        work.capsuleId = e.target.value;
        saveState();
        renderCapsules();
      }
    });
  });
  grid.querySelectorAll('[data-delete-work]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.works = state.works.filter((w) => w.id !== btn.dataset.deleteWork);
      saveState();
      renderAll();
    });
  });
}

/* ==========================================================================
   02. RENDU DU RÉPERTOIRE DES 99 MEMBRES (Vue Portraits vs Vue Index #8)
   ========================================================================== */
function renderArtistFiltersAndAz() {
  const discGroup = document.getElementById('artistDisciplineFilterGroup');
  const counts = { all: state.artists.length };
  state.artists.forEach((a) => {
    counts[a.disciplineGroup] = (counts[a.disciplineGroup] || 0) + 1;
  });

  const disciplines = [
    { key: 'all', label: `Tous les membres (${counts.all})` },
    { key: 'Arts visuels & Photographie', label: `Arts visuels & Photo (${counts['Arts visuels & Photographie'] || 0})` },
    { key: 'Arts vivants & Scène', label: `Scène, Danse & Cirque (${counts['Arts vivants & Scène'] || 0})` },
    { key: 'Musique & Son', label: `Musique & Son (${counts['Musique & Son'] || 0})` },
    { key: 'Arts numériques & 3D', label: `Arts numériques & 3D (${counts['Arts numériques & 3D'] || 0})` },
    { key: 'Littérature & Parole', label: `Littérature & Parole (${counts['Littérature & Parole'] || 0})` },
    { key: 'Cinéma & Réalisation', label: `Cinéma & Réalisation (${counts['Cinéma & Réalisation'] || 0})` }
  ];

  discGroup.innerHTML = disciplines
    .map(
      (d) => `
      <button type="button" class="filter-btn ${activeArtistDiscipline === d.key ? 'active' : ''}" data-artist-disc="${d.key}">
        ${d.label}
      </button>
    `
    )
    .join('');

  discGroup.querySelectorAll('[data-artist-disc]').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeArtistDiscipline = btn.dataset.artistDisc;
      saveState();
      renderArtistFiltersAndAz();
      renderArtists();
    });
  });

  const azBar = document.getElementById('artistAzBar');
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  azBar.innerHTML =
    `<button type="button" class="az-btn ${activeArtistLetter === 'all' ? 'active' : ''}" data-letter="all">A–Z</button>` +
    letters
      .map(
        (l) =>
          `<button type="button" class="az-btn ${activeArtistLetter === l ? 'active' : ''}" data-letter="${l}">${l}</button>`
      )
      .join('');

  azBar.querySelectorAll('[data-letter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeArtistLetter = btn.dataset.letter;
      saveState();
      renderArtistFiltersAndAz();
      renderArtists();
    });
  });
}

function renderArtists() {
  const container = document.getElementById('artistsContainer');

  document.getElementById('viewModeGridBtn')?.classList.toggle('active', artistViewMode === 'grid');
  document.getElementById('viewModeListBtn')?.classList.toggle('active', artistViewMode === 'list');
  document.getElementById('filterWithWorksBtn')?.classList.toggle('active', filterOnlyWithWorks);

  const filtered = state.artists.filter((artist) => {
    const matchDisc = activeArtistDiscipline === 'all' || artist.disciplineGroup === activeArtistDiscipline;
    const matchAvail = activeArtistAvail === 'all' || artist.availabilityStatus === activeArtistAvail;
    const matchQuery =
      !artistSearchQuery ||
      artist.name.toLowerCase().includes(artistSearchQuery) ||
      artist.roleTitle.toLowerCase().includes(artistSearchQuery);

    let matchWorks = true;
    if (filterOnlyWithWorks) {
      matchWorks = getWorksForArtist(artist.id).length > 0;
    }

    let matchLetter = true;
    if (activeArtistLetter !== 'all') {
      const parts = artist.name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase()
        .split(/\s+/);
      const firstInitial = parts[0] ? parts[0][0] : '';
      const lastInitial = parts[parts.length - 1] ? parts[parts.length - 1][0] : '';
      matchLetter = firstInitial === activeArtistLetter || lastInitial === activeArtistLetter;
    }

    return matchDisc && matchAvail && matchQuery && matchWorks && matchLetter;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); padding:2rem 0;">Aucun membre ne correspond à ces critères.</p>`;
    return;
  }

  // #8 : Mode Vue Index (Liste compacte tabulaire)
  if (artistViewMode === 'list') {
    const rowsHtml = filtered
      .map((artist) => {
        const works = getWorksForArtist(artist.id);
        const directLinksHtml = (artist.links || [])
          .map(
            (l) =>
              `<a href="${l.url}" target="_blank" rel="noopener" style="color:var(--text-primary); text-decoration:underline;">${l.label} &nearr;</a>`
          )
          .join(' &bull; ');
        return `
          <tr>
            <td style="width:48px;">
              <img src="${artist.photo}" alt="${artist.name}" style="width:38px; height:38px; object-fit:cover; filter:grayscale(100%); border:1px solid var(--border-color);" loading="lazy" />
            </td>
            <td>
              <a href="#/artistes/${artist.id}" style="font-family:var(--font-heading); font-weight:600; color:var(--text-primary); text-decoration:none;">
                ${artist.name}
              </a>
            </td>
            <td>${artist.roleTitle}</td>
            <td>${artist.disciplineGroup}</td>
            <td>${works.length > 0 ? `<strong>${works.length} œuvre(s)</strong>` : '—'}</td>
            <td>${directLinksHtml}</td>
            <td><a href="#/artistes/${artist.id}" class="btn btn--outline btn--small">Sous-page &rarr;</a></td>
          </tr>
        `;
      })
      .join('');

    container.innerHTML = `
      <div class="panel-card" style="padding:0; overflow-x:auto;">
        <table class="ca-table">
          <thead>
            <tr>
              <th>Portrait</th>
              <th>Nom du membre</th>
              <th>Métier / Pratique</th>
              <th>Catégorie</th>
              <th>Galerie</th>
              <th>Liens officiels</th>
              <th>Fiche</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>
    `;
    return;
  }

  // Mode Vue Portraits (Grille)
  container.innerHTML = `
    <div class="artists-grid">
      ${filtered
        .map((artist) => {
          const workCount = getWorksForArtist(artist.id).length;
          const directLinksHtml = (artist.links || [])
            .map(
              (l) =>
                `<a href="${l.url}" target="_blank" rel="noopener" class="direct-member-link" style="font-size:0.72rem; color:var(--text-primary); text-decoration:underline; font-weight:500;">${l.label} &nearr;</a>`
            )
            .join(' &bull; ');

          return `
            <article class="artist-card" data-open-artist="${artist.id}">
              <div class="artist-card__photo-wrap">
                <img src="${artist.photo}" alt="${artist.name}" class="artist-card__photo" loading="lazy" />
              </div>
              <div class="artist-card__info">
                <h3 class="artist-card__name">${artist.name}</h3>
                <p class="artist-card__role">${artist.roleTitle}</p>
                <div style="margin-bottom:0.65rem; line-height:1.4;" class="artist-card__links-wrap">
                  ${directLinksHtml}
                </div>
                <div class="artist-card__status">
                  <span>${workCount > 0 ? `<strong>${workCount} œuvre(s)</strong> en galerie` : 'Membre actif'}</span>
                  <span>Sous-page &rarr;</span>
                </div>
              </div>
            </article>
          `;
        })
        .join('')}
    </div>
  `;

  container.querySelectorAll('.direct-member-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  container.querySelectorAll('[data-open-artist]').forEach((card) => {
    card.addEventListener('click', () => openArtistModal(card.dataset.openArtist));
  });
}

/* ==========================================================================
   03. RENDU MAILLAGE (#11 Équipements, #12 Compétences, #13 Groupes de travail, #14 Radar bourses, #15 Lieux)
   ========================================================================== */
function renderMaillage() {
  const container = document.getElementById('maillageContentArea');

  if (activeMaillageSubtab === 'calendrier') {
    renderCalendrierHorsLesMurs(container);
    return;
  }

  if (activeMaillageSubtab === 'lieux') {
    renderLieuxPartenaires(container);
    return;
  }

  if (state.currentRole === 'public') {
    container.innerHTML = `
      <div class="member-gate-notice">
        <h2 style="font-family:var(--font-heading); font-weight:500; margin-bottom:0.75rem;">Espace interne réservé aux 99 membres</h2>
        <p style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:1.5rem;">
          Le babillard de maillage, les groupes de travail (#13), la banque d'équipements (#11), la bourse de compétences (#12) et le radar des subventions (#14) sont réservés aux membres de La Cargaison.
        </p>
        <div style="display:flex; gap:0.75rem; justify-content:center; flex-wrap:wrap;">
          <button type="button" class="btn" id="gateLoginMaillage">Activer la Vue Membre</button>
          <button type="button" class="btn btn--outline" id="gateSeeLieux">Voir les Lieux partenaires (#15)</button>
          <button type="button" class="btn btn--outline" id="gateSeePublicCalendar">Voir le Calendrier public</button>
        </div>
      </div>
    `;
    document.getElementById('gateLoginMaillage').addEventListener('click', () => {
      state.currentRole = 'member';
      saveState();
      renderAll();
    });
    document.getElementById('gateSeeLieux').addEventListener('click', () => {
      navigateToRoute('#/maillage/lieux');
    });
    document.getElementById('gateSeePublicCalendar').addEventListener('click', () => {
      navigateToRoute('#/maillage/calendrier');
    });
    return;
  }

  if (activeMaillageSubtab === 'babillard') {
    renderBabillard(container);
  } else if (activeMaillageSubtab === 'chantiers') {
    renderChantiers(container);
  } else if (activeMaillageSubtab === 'equipements') {
    renderEquipements(container);
  } else if (activeMaillageSubtab === 'competences') {
    renderCompetences(container);
  } else if (activeMaillageSubtab === 'bourses') {
    renderBourses(container);
  }
}

// #11 (Jumelage rapide) & #13 (Accès sous-page Groupe de travail)
function renderBabillard(container) {
  const me = getArtistById(state.currentMemberId);

  let jumelageResultsHtml = '';
  if (jumelageQuickDiscipline !== 'none') {
    const matches = state.artists.filter((a) => a.disciplineGroup === jumelageQuickDiscipline);
    jumelageResultsHtml = `
      <div style="margin-top:1rem; padding-top:1rem; border-top:1px solid var(--border-color);">
        <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:0.65rem;">
          ${matches.length} membres du collectif trouvés en <strong>${jumelageQuickDiscipline}</strong> :
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem; max-height:170px; overflow-y:auto;">
          ${matches
            .map(
              (m) => `
            <a href="#/artistes/${m.id}" class="interested-chip" style="text-decoration:none; color:var(--text-primary);">
              <img src="${m.photo}" alt="${m.name}" />
              <span><strong>${m.name}</strong> (${m.roleTitle})</span>
            </a>
          `
            )
            .join('')}
        </div>
      </div>
    `;
  }

  const filteredPosts = state.maillagePosts.filter((p) => {
    const matchDisc =
      activeMaillageDiscFilter === 'all' ||
      p.soughtDiscipline === activeMaillageDiscFilter ||
      p.soughtDiscipline === 'Toutes disciplines';
    const matchType = activeMaillageTypeFilter === 'all' || p.category === activeMaillageTypeFilter;
    return matchDisc && matchType;
  });

  const postsHtml =
    filteredPosts.length === 0
      ? `<p style="color:var(--text-muted); padding:1.5rem 0;">Aucune annonce ne correspond à ce filtre.</p>`
      : filteredPosts
          .map((post) => {
            const author = getArtistById(post.authorId);
            const interestedIds = post.interestedMemberIds || [];
            const isMeInterested = interestedIds.includes(me.id);

            const interestedChipsHtml =
              interestedIds.length > 0
                ? `<div class="interested-avatars-row">
                    <span style="font-size:0.74rem; color:var(--text-muted);">Membres embarqués (${interestedIds.length}) :</span>
                    ${interestedIds
                      .map((id) => {
                        const m = getArtistById(id);
                        return `
                          <a href="#/artistes/${m.id}" class="interested-chip" style="text-decoration:none; color:var(--text-primary);">
                            <img src="${m.photo}" alt="${m.name}" />
                            <span>${m.name}</span>
                          </a>
                        `;
                      })
                      .join('')}
                  </div>`
                : '';

            const repliesHtml = post.replies
              .map(
                (r) => `
              <div class="reply-item">
                <strong>${r.authorName}</strong> <span style="color:var(--text-muted); font-size:0.74rem;">&bull; ${r.date}</span>
                <p style="margin-top:0.15rem; color:var(--text-secondary);">${r.text}</p>
              </div>
            `
              )
              .join('');

            return `
            <article class="maillage-post">
              <div class="maillage-post__header">
                <div class="maillage-post__author" data-open-artist="${author.id}">
                  <img src="${author.photo}" alt="${author.name}" class="maillage-post__avatar" />
                  <div>
                    <div class="maillage-post__author-name">${author.name}</div>
                    <div class="maillage-post__author-discipline">${author.roleTitle} &bull; ${post.date}</div>
                  </div>
                </div>
                <span class="maillage-post__type">${post.category}</span>
              </div>
              <h3 class="maillage-post__title">
                <a href="#/projets/${post.id}" style="color:var(--text-primary); text-decoration:none;">${post.title}</a>
              </h3>
              <p class="maillage-post__body">${post.body}</p>
              ${interestedChipsHtml}
              <div class="maillage-post__meta" style="margin-top:0.85rem;">
                <span>Discipline recherchée : <strong>${post.soughtDiscipline}</strong></span>
                <div style="display:flex; gap:0.5rem; flex-wrap:wrap; align-items:center;">
                  <button type="button" class="btn ${isMeInterested ? '' : 'btn--outline'} btn--small" data-toggle-interest="${post.id}">
                    ${isMeInterested ? 'Embarqué(e) ✓' : 'Je souhaite embarquer'}
                  </button>
                  <a href="#/projets/${post.id}" class="btn btn--outline btn--small">
                    Espace Groupe de travail (#13) &rarr;
                  </a>
                  <button type="button" class="btn btn--outline btn--small" data-private-msg="${author.id}" data-private-subj="${post.title}">
                    Écrire en privé
                  </button>
                </div>
              </div>
              <div class="maillage-post__replies">
                ${repliesHtml}
                <form class="reply-form" data-post-id="${post.id}">
                  <input type="text" name="replyText" placeholder="Répondre publiquement sur le fil..." required />
                  <button type="submit" class="btn btn--small">Répondre</button>
                </form>
              </div>
            </article>
          `;
          })
          .join('');

  container.innerHTML = `
    <div class="panel-card" style="margin-bottom:1.75rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
        <div>
          <span style="font-size:0.7rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted);">Outil de jumelage interdisciplinaire</span>
          <h3 style="font-family:var(--font-heading); font-size:1.02rem; font-weight:500;">Trouver rapidement un collaborateur parmi les 99 membres</h3>
        </div>
        <div style="display:flex; gap:0.5rem; align-items:center; flex-wrap:wrap;">
          <span style="font-size:0.82rem; color:var(--text-secondary);">Je cherche un(e) membre en :</span>
          <select id="quickJumelageSelect" class="filter-select">
            <option value="none">— Choisir une discipline —</option>
            <option value="Arts visuels & Photographie" ${jumelageQuickDiscipline === 'Arts visuels & Photographie' ? 'selected' : ''}>Arts visuels &amp; Photographie (37 membres)</option>
            <option value="Arts vivants & Scène" ${jumelageQuickDiscipline === 'Arts vivants & Scène' ? 'selected' : ''}>Scène, Danse, Théâtre &amp; Cirque (24 membres)</option>
            <option value="Musique & Son" ${jumelageQuickDiscipline === 'Musique & Son' ? 'selected' : ''}>Musique, Chanson &amp; Son (17 membres)</option>
            <option value="Arts numériques & 3D" ${jumelageQuickDiscipline === 'Arts numériques & 3D' ? 'selected' : ''}>Arts numériques, 3D &amp; Interactif (11 membres)</option>
            <option value="Littérature & Parole" ${jumelageQuickDiscipline === 'Littérature & Parole' ? 'selected' : ''}>Littérature, Poésie &amp; Histoire (6 membres)</option>
            <option value="Cinéma & Réalisation" ${jumelageQuickDiscipline === 'Cinéma & Réalisation' ? 'selected' : ''}>Cinéma, Réalisation &amp; Production (4 membres)</option>
          </select>
        </div>
      </div>
      ${jumelageResultsHtml}
    </div>

    <div class="filter-bar">
      <div style="display:flex; gap:0.65rem; flex-wrap:wrap; align-items:center;">
        <span style="font-size:0.76rem; text-transform:uppercase; color:var(--text-muted);">Filtrer le babillard :</span>
        <select id="maillageDiscSelect" class="filter-select">
          <option value="all">Toutes disciplines recherchées</option>
          <option value="Arts visuels & Photographie" ${activeMaillageDiscFilter === 'Arts visuels & Photographie' ? 'selected' : ''}>Arts visuels &amp; Photo</option>
          <option value="Arts vivants & Scène" ${activeMaillageDiscFilter === 'Arts vivants & Scène' ? 'selected' : ''}>Arts vivants &amp; Scène</option>
          <option value="Musique & Son" ${activeMaillageDiscFilter === 'Musique & Son' ? 'selected' : ''}>Musique &amp; Son</option>
          <option value="Arts numériques & 3D" ${activeMaillageDiscFilter === 'Arts numériques & 3D' ? 'selected' : ''}>Arts numériques &amp; 3D</option>
          <option value="Littérature & Parole" ${activeMaillageDiscFilter === 'Littérature & Parole' ? 'selected' : ''}>Littérature &amp; Parole</option>
          <option value="Cinéma & Réalisation" ${activeMaillageDiscFilter === 'Cinéma & Réalisation' ? 'selected' : ''}>Cinéma &amp; Réalisation</option>
        </select>
        <select id="maillageTypeSelect" class="filter-select">
          <option value="all">Tous types d'échanges</option>
          <option value="Recherche de collaborateur" ${activeMaillageTypeFilter === 'Recherche de collaborateur' ? 'selected' : ''}>Recherche de collaborateur</option>
          <option value="Projet d’exposition ou spectacle" ${activeMaillageTypeFilter === 'Projet d’exposition ou spectacle' ? 'selected' : ''}>Projet d'exposition ou spectacle</option>
          <option value="Regard extérieur sur œuvre en cours" ${activeMaillageTypeFilter === 'Regard extérieur sur œuvre en cours' ? 'selected' : ''}>Regard extérieur sur œuvre</option>
        </select>
      </div>
    </div>

    <div class="maillage-layout">
      <div class="maillage-list">${postsHtml}</div>
      <aside class="panel-card">
        <h3 class="panel-card__title">Publier un appel à maillage</h3>
        <form id="newMaillageForm">
          <div class="form-group">
            <label class="form-label">Nature de l'annonce</label>
            <select name="category" class="form-select" required>
              <option value="Recherche de collaborateur">Recherche de collaborateur</option>
              <option value="Projet d’exposition ou spectacle">Projet d'exposition ou spectacle</option>
              <option value="Regard extérieur sur œuvre en cours">Regard extérieur sur œuvre en cours</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Discipline recherchée</label>
            <select name="soughtDiscipline" class="form-select" required>
              <option value="Toutes disciplines">Toutes disciplines</option>
              <option value="Arts visuels & Photographie">Arts visuels &amp; Photographie</option>
              <option value="Arts vivants & Scène">Arts vivants &amp; Scène</option>
              <option value="Musique & Son">Musique &amp; Son</option>
              <option value="Arts numériques & 3D">Arts numériques &amp; 3D</option>
              <option value="Littérature & Parole">Littérature &amp; Parole</option>
              <option value="Cinéma & Réalisation">Cinéma &amp; Réalisation</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Titre</label>
            <input type="text" name="title" class="form-input" placeholder="Ex. Recherche collaborateur sonore..." required />
          </div>
          <div class="form-group">
            <label class="form-label">Détails du projet</label>
            <textarea name="body" class="form-textarea" required></textarea>
          </div>
          <button type="submit" class="btn" style="width:100%;">Publier l'annonce</button>
        </form>
      </aside>
    </div>
  `;

  document.getElementById('quickJumelageSelect').addEventListener('change', (e) => {
    jumelageQuickDiscipline = e.target.value;
    renderBabillard(container);
  });

  document.getElementById('maillageDiscSelect').addEventListener('change', (e) => {
    activeMaillageDiscFilter = e.target.value;
    renderBabillard(container);
  });
  document.getElementById('maillageTypeSelect').addEventListener('change', (e) => {
    activeMaillageTypeFilter = e.target.value;
    renderBabillard(container);
  });

  container.querySelectorAll('[data-open-artist]').forEach((el) => {
    el.addEventListener('click', () => openArtistModal(el.dataset.openArtist));
  });

  container.querySelectorAll('[data-toggle-interest]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const post = state.maillagePosts.find((p) => p.id === btn.dataset.toggleInterest);
      if (post) {
        post.interestedMemberIds = post.interestedMemberIds || [];
        const idx = post.interestedMemberIds.indexOf(me.id);
        if (idx >= 0) {
          post.interestedMemberIds.splice(idx, 1);
        } else {
          post.interestedMemberIds.push(me.id);
        }
        saveState();
        renderBabillard(container);
      }
    });
  });

  container.querySelectorAll('[data-private-msg]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openPrivateMsgModal(btn.dataset.privateMsg, btn.dataset.privateSubj);
    });
  });

  container.querySelectorAll('.reply-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const post = state.maillagePosts.find((p) => p.id === form.dataset.postId);
      const input = form.querySelector('input[name="replyText"]');
      if (post && input.value.trim()) {
        post.replies.push({
          authorName: me.name,
          date: 'À l’instant',
          text: input.value.trim()
        });
        saveState();
        renderBabillard(container);
      }
    });
  });

  document.getElementById('newMaillageForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    state.maillagePosts.unshift({
      id: 'post-' + Date.now(),
      authorId: state.currentMemberId,
      date: 'À l’instant',
      category: fd.get('category'),
      soughtDiscipline: fd.get('soughtDiscipline'),
      title: fd.get('title'),
      body: fd.get('body'),
      interestedMemberIds: [state.currentMemberId],
      replies: []
    });
    saveState();
    renderBabillard(container);
  });
}

// #13 : Espace « Groupes de travail / Comités artistiques » avec lien vers sous-page #/projets/:id
function renderChantiers(container) {
  const cardsHtml = state.chantiers
    .map((c) => {
      const memberProfiles = c.members.map((id) => getArtistById(id));
      const milestones = c.milestones || [];
      const doneCount = milestones.filter((m) => m.done).length;
      const avatarsHtml = memberProfiles
        .map(
          (m) => `
        <div style="display:flex; align-items:center; gap:0.45rem; cursor:pointer;" data-open-artist="${m.id}">
          <img src="${m.photo}" alt="${m.name}" style="width:32px; height:32px; object-fit:cover; filter:grayscale(100%); border:1px solid var(--border-color);" />
          <span style="font-size:0.8rem; font-weight:500; text-decoration:underline;">${m.name}</span>
        </div>
      `
        )
        .join('');

      return `
        <article class="editorial-card">
          <div>
            <div class="editorial-card__kicker">${c.disciplines}</div>
            <h3 class="editorial-card__title">
              <a href="#/projets/${c.id}" style="color:var(--text-primary); text-decoration:none;">${c.title}</a>
            </h3>
            <div style="display:flex; flex-wrap:wrap; gap:0.85rem; margin:0.85rem 0 1rem; padding:0.75rem; background:var(--bg-page); border:1px solid var(--border-color);">
              ${avatarsHtml}
            </div>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:0.4rem;">
              <strong>État :</strong> ${c.stage}
            </p>
            <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:0.85rem;">
              <strong>Objectif :</strong> ${c.target} &bull; <strong>Échéancier :</strong> ${doneCount}/${milestones.length} jalons complétés
            </p>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; padding-top:0.75rem; border-top:1px solid var(--bg-subtle);">
            <span style="font-size:0.76rem; color:var(--text-muted);">${(c.discussions || []).length} note(s) de comité</span>
            <a href="#/projets/${c.id}" class="btn btn--small">Ouvrir le Groupe de travail (#13) &rarr;</a>
          </div>
        </article>
      `;
    })
    .join('');

  container.innerHTML = `
    <div class="maillage-layout">
      <div class="cards-2col">${cardsHtml}</div>
      <aside class="panel-card">
        <h3 class="panel-card__title">Créer un Groupe de travail / Comité (#13)</h3>
        <form id="newChantierForm">
          <div class="form-group">
            <label class="form-label">Titre du groupe de travail ou projet</label>
            <input type="text" name="title" class="form-input" placeholder="Ex. Comité exposition collective Printemps 2027" required />
          </div>
          <div class="form-group">
            <label class="form-label">Premier membre co-fondateur du groupe</label>
            <select name="partnerId" class="form-select" required>
              ${state.artists
                .filter((a) => a.id !== state.currentMemberId)
                .map((a) => `<option value="${a.id}">${a.name} (${a.roleTitle})</option>`)
                .join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Disciplines croisées</label>
            <input type="text" name="disciplines" class="form-input" placeholder="Ex. Peinture, Son & Scénographie" required />
          </div>
          <div class="form-group">
            <label class="form-label">État d'avancement</label>
            <input type="text" name="stage" class="form-input" value="En idéation et structuration d'équipe" required />
          </div>
          <div class="form-group">
            <label class="form-label">Objectif / Diffusion ou bourse visée</label>
            <input type="text" name="target" class="form-input" placeholder="Ex. Dépôt CALQ Montérégie / Nef La Cargaison" required />
          </div>
          <button type="submit" class="btn" style="width:100%;">Créer &amp; ouvrir la sous-page du groupe</button>
        </form>
      </aside>
    </div>
  `;

  container.querySelectorAll('[data-open-artist]').forEach((el) => {
    el.addEventListener('click', () => openArtistModal(el.dataset.openArtist));
  });

  document.getElementById('newChantierForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const me = getArtistById(state.currentMemberId);
    const newId = 'chantier-' + Date.now();
    state.chantiers.unshift({
      id: newId,
      title: fd.get('title'),
      members: [state.currentMemberId, fd.get('partnerId')],
      disciplines: fd.get('disciplines'),
      stage: fd.get('stage'),
      target: fd.get('target'),
      milestones: [
        { id: 'm-' + Date.now() + '-1', title: 'Rencontre initiale et répartition des rôles artistiques', due: 'Semaine 1', owner: me.name, done: false },
        { id: 'm-' + Date.now() + '-2', title: 'Élaboration du budget et fiche technique', due: 'Mois 1', owner: 'Équipe du projet', done: false }
      ],
      discussions: [
        { authorName: me.name, date: 'À l’instant', text: 'Groupe de travail créé. Bienvenue dans l’espace de coordination du projet.' }
      ]
    });
    saveState();
    navigateToRoute(`#/projets/${newId}`);
  });
}

// #11 : Banque de mutualisation d'équipements et d'espaces entre membres
let activeEquipCategoryFilter = 'all';
function renderEquipements(container) {
  const list = (state.equipements || []).filter(
    (eq) => activeEquipCategoryFilter === 'all' || eq.type === activeEquipCategoryFilter
  );

  const eqHtml = list
    .map((eq) => {
      const owner = getArtistById(eq.ownerId);
      return `
        <article class="editorial-card">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem; margin-bottom:0.35rem;">
              <span class="editorial-card__kicker" style="margin-bottom:0;">${eq.type}</span>
              <span style="font-size:0.7rem; padding:0.12rem 0.5rem; border:1px solid var(--border-color); background:var(--bg-page);">
                ${eq.availabilityBadge || 'Mutualisation membre'}
              </span>
            </div>
            <h3 class="editorial-card__title">${eq.title}</h3>
            ${
              eq.specs
                ? `<p style="font-size:0.82rem; color:var(--text-primary); margin:0.4rem 0; padding:0.5rem 0.65rem; background:var(--bg-page); border:1px solid var(--border-color);">
                    <strong>Spécifications :</strong> ${eq.specs}
                  </p>`
                : ''
            }
            <p style="font-size:0.84rem; color:var(--text-secondary); margin:0.5rem 0 1rem;">
              <strong>Modalités :</strong> ${eq.conditions}
            </p>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; padding-top:0.75rem; border-top:1px solid var(--bg-subtle); font-size:0.8rem;">
            <span>Référent : <a href="#/artistes/${owner.id}" style="color:var(--text-primary); font-weight:600; text-decoration:underline;">${owner.name}</a></span>
            <button type="button" class="btn btn--small" data-private-msg="${owner.id}" data-private-subj="Réservation / Emprunt (#11) : ${eq.title}">
              Réserver / Emprunter
            </button>
          </div>
        </article>
      `;
    })
    .join('');

  container.innerHTML = `
    <div class="filter-bar" style="margin-bottom:1.5rem;">
      <div class="filter-group">
        <button type="button" class="filter-btn ${activeEquipCategoryFilter === 'all' ? 'active' : ''}" data-eq-cat="all">Tous les équipements &amp; espaces (${state.equipements.length})</button>
        <button type="button" class="filter-btn ${activeEquipCategoryFilter === 'Espace d’atelier / Répétition' ? 'active' : ''}" data-eq-cat="Espace d’atelier / Répétition">Espaces &amp; Nef</button>
        <button type="button" class="filter-btn ${activeEquipCategoryFilter === 'Équipement numérique / Projection' ? 'active' : ''}" data-eq-cat="Équipement numérique / Projection">Projection &amp; Numérique</button>
        <button type="button" class="filter-btn ${activeEquipCategoryFilter === 'Audio / Enregistrement' ? 'active' : ''}" data-eq-cat="Audio / Enregistrement">Audio &amp; Sonorisation</button>
        <button type="button" class="filter-btn ${activeEquipCategoryFilter === 'Outillage / Arts visuels & Scénographie' ? 'active' : ''}" data-eq-cat="Outillage / Arts visuels & Scénographie">Outillage &amp; Photo</button>
      </div>
    </div>

    <div class="maillage-layout">
      <div class="cards-2col">${eqHtml || '<p style="color:var(--text-muted);">Aucun équipement dans cette catégorie.</p>'}</div>
      <aside class="panel-card">
        <h3 class="panel-card__title">Mutualiser un équipement ou un atelier (#11)</h3>
        <form id="newEqForm">
          <div class="form-group">
            <label class="form-label">Catégorie</label>
            <select name="type" class="form-select" required>
              <option value="Équipement numérique / Projection">Équipement numérique / Projection</option>
              <option value="Audio / Enregistrement">Audio / Enregistrement</option>
              <option value="Espace d’atelier / Répétition">Espace d'atelier / Répétition</option>
              <option value="Outillage / Arts visuels & Scénographie">Outillage / Arts visuels &amp; Scénographie</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Matériel ou espace proposé</label>
            <input type="text" name="title" class="form-input" placeholder="Ex. Projecteur courte focale / Atelier..." required />
          </div>
          <div class="form-group">
            <label class="form-label">Formule de mutualisation</label>
            <select name="availabilityBadge" class="form-select" required>
              <option value="Prêt solidaire entre membres">Prêt solidaire entre membres</option>
              <option value="Disponible au prêt / Tarif membre">Disponible au prêt / Tarif membre</option>
              <option value="Échange de services / Co-production">Échange de services / Co-production</option>
              <option value="Sur réservation C.A.">Sur réservation C.A.</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Spécifications techniques</label>
            <input type="text" name="specs" class="form-input" placeholder="Dimensions, puissance, compatibilité..." required />
          </div>
          <div class="form-group">
            <label class="form-label">Modalités d'emprunt entre membres</label>
            <textarea name="conditions" class="form-textarea" required></textarea>
          </div>
          <button type="submit" class="btn" style="width:100%;">Ajouter à la banque de mutualisation</button>
        </form>
      </aside>
    </div>
  `;

  container.querySelectorAll('[data-eq-cat]').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeEquipCategoryFilter = btn.dataset.eqCat;
      renderEquipements(container);
    });
  });

  container.querySelectorAll('[data-private-msg]').forEach((btn) => {
    btn.addEventListener('click', () => openPrivateMsgModal(btn.dataset.privateMsg, btn.dataset.privateSubj));
  });

  document.getElementById('newEqForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    state.equipements.unshift({
      id: 'eq-' + Date.now(),
      ownerId: state.currentMemberId,
      type: fd.get('type'),
      title: fd.get('title'),
      availabilityBadge: fd.get('availabilityBadge'),
      specs: fd.get('specs'),
      conditions: fd.get('conditions')
    });
    saveState();
    renderEquipements(container);
  });
}

// #12 : Répertoire des compétences croisées (« Bourse d'entraide professionnelle »)
let activeCompDomainFilter = 'all';
function renderCompetences(container) {
  const competences = state.competences || [];
  const filtered = competences.filter((c) => activeCompDomainFilter === 'all' || c.domain === activeCompDomainFilter);

  const compHtml = filtered
    .map((c) => {
      const member = getArtistById(c.memberId);
      return `
        <article class="editorial-card">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem; margin-bottom:0.45rem;">
              <span class="editorial-card__kicker" style="margin-bottom:0;">${c.domain}</span>
              <span style="font-size:0.7rem; padding:0.12rem 0.5rem; border:1px solid var(--border-color); background:var(--bg-page);">
                ${c.modality}
              </span>
            </div>
            <h3 class="editorial-card__title">${c.title}</h3>
            <p style="font-size:0.84rem; color:var(--text-secondary); margin:0.5rem 0 1rem;">
              ${c.details}
            </p>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; gap:0.75rem; padding-top:0.75rem; border-top:1px solid var(--bg-subtle);">
            <a href="#/artistes/${member.id}" style="display:flex; align-items:center; gap:0.5rem; text-decoration:none; color:var(--text-primary);">
              <img src="${member.photo}" alt="${member.name}" style="width:32px; height:32px; object-fit:cover; filter:grayscale(100%); border:1px solid var(--border-color);" />
              <div style="font-size:0.78rem;">
                <strong>${member.name}</strong>
                <div style="color:var(--text-muted); font-size:0.7rem;">${member.roleTitle}</div>
              </div>
            </a>
            <button type="button" class="btn btn--small" data-private-msg="${member.id}" data-private-subj="Compétence croisée (#12) : ${c.domain}">
              Solliciter ce membre
            </button>
          </div>
        </article>
      `;
    })
    .join('');

  container.innerHTML = `
    <div class="filter-bar" style="margin-bottom:1.5rem;">
      <div class="filter-group">
        <button type="button" class="filter-btn ${activeCompDomainFilter === 'all' ? 'active' : ''}" data-comp-dom="all">Toutes les compétences (${competences.length})</button>
        <button type="button" class="filter-btn ${activeCompDomainFilter === 'Photographie d’œuvres & Captation scénique' ? 'active' : ''}" data-comp-dom="Photographie d’œuvres & Captation scénique">Photo d'œuvres &amp; Captation</button>
        <button type="button" class="filter-btn ${activeCompDomainFilter === 'Intégration multimédia, Mapping & 3D' ? 'active' : ''}" data-comp-dom="Intégration multimédia, Mapping & 3D">Mapping, 3D &amp; Numérique</button>
        <button type="button" class="filter-btn ${activeCompDomainFilter === 'Rédaction, Dramaturgie & Dossiers de subvention' ? 'active' : ''}" data-comp-dom="Rédaction, Dramaturgie & Dossiers de subvention">Dossiers CALQ/CAC &amp; Rédaction</button>
        <button type="button" class="filter-btn ${activeCompDomainFilter === 'Direction musicale, Sonorisation & Régie' ? 'active' : ''}" data-comp-dom="Direction musicale, Sonorisation & Régie">Sonorisation &amp; Régie</button>
        <button type="button" class="filter-btn ${activeCompDomainFilter === 'Commissariat, Arts visuels & Gouvernance' ? 'active' : ''}" data-comp-dom="Commissariat, Arts visuels & Gouvernance">Commissariat &amp; Accrochage</button>
      </div>
    </div>

    <div class="maillage-layout">
      <div class="cards-2col">${compHtml || '<p style="color:var(--text-muted);">Aucune offre dans ce domaine.</p>'}</div>
      <aside class="panel-card">
        <h3 class="panel-card__title">Offrir une compétence aux membres (#12)</h3>
        <form id="newCompetenceForm">
          <div class="form-group">
            <label class="form-label">Domaine d'expertise</label>
            <select name="domain" class="form-select" required>
              <option value="Photographie d’œuvres & Captation scénique">Photographie d'œuvres &amp; Captation scénique</option>
              <option value="Intégration multimédia, Mapping & 3D">Intégration multimédia, Mapping &amp; 3D</option>
              <option value="Rédaction, Dramaturgie & Dossiers de subvention">Rédaction, Dramaturgie &amp; Dossiers CALQ/CAC</option>
              <option value="Direction musicale, Sonorisation & Régie">Direction musicale, Sonorisation &amp; Régie</option>
              <option value="Commissariat, Arts visuels & Gouvernance">Commissariat, Accrochage &amp; Muséologie</option>
              <option value="Recherche artistique & Rayonnement contemporain">Recherche artistique &amp; Rayonnement</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Service ou savoir-faire offert</label>
            <input type="text" name="title" class="form-input" placeholder="Ex. Montage vidéo de bande-annonce / Révision..." required />
          </div>
          <div class="form-group">
            <label class="form-label">Modalité d'entraide</label>
            <select name="modality" class="form-select" required>
              <option value="Échange de services entre membres">Échange de services entre membres</option>
              <option value="Tarif solidaire membre">Tarif solidaire membre</option>
              <option value="Mentorat / Entraide bénévole">Mentorat / Entraide bénévole</option>
              <option value="Co-création sur projet">Co-création sur projet</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Précisions</label>
            <textarea name="details" class="form-textarea" required></textarea>
          </div>
          <button type="submit" class="btn" style="width:100%;">Publier dans la bourse de compétences</button>
        </form>
      </aside>
    </div>
  `;

  container.querySelectorAll('[data-comp-dom]').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCompDomainFilter = btn.dataset.compDom;
      renderCompetences(container);
    });
  });

  container.querySelectorAll('[data-private-msg]').forEach((btn) => {
    btn.addEventListener('click', () => openPrivateMsgModal(btn.dataset.privateMsg, btn.dataset.privateSubj));
  });

  document.getElementById('newCompetenceForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    state.competences = state.competences || [];
    state.competences.unshift({
      id: 'comp-' + Date.now(),
      memberId: state.currentMemberId,
      domain: fd.get('domain'),
      title: fd.get('title'),
      modality: fd.get('modality'),
      details: fd.get('details')
    });
    saveState();
    renderCompetences(container);
  });
}

// #14 : Radar des appels de dossiers, subventions, 1 % et résidences avec création d'équipe en 1 clic
let activeBourseCatFilter = 'all';
function renderBourses(container) {
  const bourses = (state.bourses || []).filter(
    (b) => activeBourseCatFilter === 'all' || (b.category || 'Bourses CALQ / CAC') === activeBourseCatFilter
  );

  const boursesHtml = bourses
    .map(
      (b) => `
      <article class="editorial-card">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem; margin-bottom:0.35rem;">
            <span class="editorial-card__kicker" style="margin-bottom:0;">${b.agency}</span>
            <span style="font-size:0.7rem; padding:0.12rem 0.5rem; border:1px solid var(--border-color); background:var(--bg-page);">
              ${b.category || 'Subvention'}
            </span>
          </div>
          <h3 class="editorial-card__title">${b.program}</h3>
          ${
            b.amount
              ? `<p style="font-size:0.82rem; color:var(--text-primary); margin:0.35rem 0;">
                  <strong>Soutien financier :</strong> ${b.amount}
                </p>`
              : ''
          }
          <p style="font-size:0.84rem; color:var(--text-secondary); margin:0.35rem 0;">
            <strong>Disciplines :</strong> ${b.targetDisciplines}
          </p>
          <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:1rem;">
            <strong>Échéance :</strong> ${b.deadline}
          </p>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; gap:0.45rem; flex-wrap:wrap; padding-top:0.75rem; border-top:1px solid var(--bg-subtle);">
          <a href="${b.url}" target="_blank" rel="noopener" class="btn btn--outline btn--small">Appel officiel &nearr;</a>
          <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
            <button type="button" class="btn btn--outline btn--small" data-create-grant-team="${b.id}">
              Créer une équipe de réponse (#14)
            </button>
            <button type="button" class="btn btn--small" data-request-support-for="${b.agency} — ${b.program}">
              Lettre d'appui C.A.
            </button>
          </div>
        </div>
      </article>
    `
    )
    .join('');

  container.innerHTML = `
    <div class="filter-bar" style="margin-bottom:1.5rem;">
      <div class="filter-group">
        <button type="button" class="filter-btn ${activeBourseCatFilter === 'all' ? 'active' : ''}" data-bcat="all">Tous les appels (${(state.bourses || []).length})</button>
        <button type="button" class="filter-btn ${activeBourseCatFilter === 'Bourses CALQ / CAC' ? 'active' : ''}" data-bcat="Bourses CALQ / CAC">Bourses CALQ &amp; CAC</button>
        <button type="button" class="filter-btn ${activeBourseCatFilter === 'Art public (Politique du 1 %)' ? 'active' : ''}" data-bcat="Art public (Politique du 1 %)">Art public (1 %)</button>
        <button type="button" class="filter-btn ${activeBourseCatFilter === 'Fonds municipaux & MRC' ? 'active' : ''}" data-bcat="Fonds municipaux & MRC">Fonds municipaux &amp; MRC</button>
        <button type="button" class="filter-btn ${activeBourseCatFilter === 'Résidences & Galeries' ? 'active' : ''}" data-bcat="Résidences & Galeries">Résidences &amp; Galeries</button>
      </div>
    </div>

    <div class="maillage-layout">
      <div class="cards-2col">${boursesHtml || '<p style="color:var(--text-muted);">Aucun appel dans ce volet.</p>'}</div>
      <aside class="panel-card">
        <h3 class="panel-card__title">Inscrire un appel au Radar (#14)</h3>
        <form id="newBourseForm">
          <div class="form-group">
            <label class="form-label">Volet</label>
            <select name="category" class="form-select" required>
              <option value="Bourses CALQ / CAC">Bourses CALQ / CAC</option>
              <option value="Art public (Politique du 1 %)">Art public (Politique du 1 %)</option>
              <option value="Fonds municipaux & MRC">Fonds municipaux &amp; MRC</option>
              <option value="Résidences & Galeries">Résidences &amp; Galeries</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Organisme / Lieu</label>
            <input type="text" name="agency" class="form-input" placeholder="Ex. CALQ, Ville, Centre d'artistes..." required />
          </div>
          <div class="form-group">
            <label class="form-label">Titre du programme ou de l'appel</label>
            <input type="text" name="program" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label">Montant / Soutien offert</label>
            <input type="text" name="amount" class="form-input" placeholder="Ex. Jusqu'à 25 000 $ / Cachet CARFAC" required />
          </div>
          <div class="form-group">
            <label class="form-label">Date limite</label>
            <input type="text" name="deadline" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label">Disciplines visées</label>
            <input type="text" name="targetDisciplines" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label">Lien officiel</label>
            <input type="url" name="url" class="form-input" placeholder="https://..." required />
          </div>
          <button type="submit" class="btn" style="width:100%;">Publier au radar culturel</button>
        </form>
      </aside>
    </div>
  `;

  container.querySelectorAll('[data-bcat]').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeBourseCatFilter = btn.dataset.bcat;
      renderBourses(container);
    });
  });

  container.querySelectorAll('[data-request-support-for]').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeAtelierSubtab = 'appui';
      saveState();
      navigateToRoute('#/atelier/appui');
    });
  });

  // #14 + #13 : Créer en 1 clic un Groupe de travail dédié pour répondre à cet appel de dossier
  container.querySelectorAll('[data-create-grant-team]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const b = (state.bourses || []).find((x) => x.id === btn.dataset.createGrantTeam);
      if (!b) return;
      const me = getArtistById(state.currentMemberId);
      const newId = 'chantier-grant-' + Date.now();
      state.chantiers.unshift({
        id: newId,
        title: `Comité de dépôt : ${b.program} (${b.agency})`,
        members: [me.id],
        disciplines: b.targetDisciplines,
        stage: `Préparation du dossier — Échéance : ${b.deadline}`,
        target: `${b.agency} (${b.amount || 'Subvention'})`,
        milestones: [
          { id: 'mg-1-' + Date.now(), title: 'Définir le concept artistique et réunir les co-créateurs membres', due: 'Étape 1', owner: me.name, done: false },
          { id: 'mg-2-' + Date.now(), title: 'Rédiger l’argumentaire (Mérite 50 %, Impact 30 %, Faisabilité 20 %)', due: 'Étape 2', owner: 'Équipe du projet', done: false },
          { id: 'mg-3-' + Date.now(), title: 'Demander la lettre d’appui officielle au C.A. de La Cargaison', due: 'Étape 3', owner: me.name, done: false },
          { id: 'mg-4-' + Date.now(), title: `Dépôt final auprès de : ${b.agency}`, due: b.deadline, owner: me.name, done: false }
        ],
        discussions: [
          {
            authorName: me.name,
            date: 'À l’instant',
            text: `Groupe de travail créé à partir du Radar des bourses (#14) pour répondre à l’appel « ${b.program} » (${b.url}).`
          }
        ]
      });
      saveState();
      navigateToRoute(`#/projets/${newId}`);
    });
  });

  document.getElementById('newBourseForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    state.bourses = state.bourses || [];
    state.bourses.unshift({
      id: 'bourse-' + Date.now(),
      category: fd.get('category'),
      agency: fd.get('agency'),
      program: fd.get('program'),
      amount: fd.get('amount'),
      deadline: fd.get('deadline'),
      targetDisciplines: fd.get('targetDisciplines'),
      url: fd.get('url')
    });
    saveState();
    renderBourses(container);
  });
}

// #15 : Répertoire des lieux de diffusion partenaires
function renderLieuxPartenaires(container) {
  const lieux = state.lieuxPartenaires || [];
  const cardsHtml = lieux
    .map(
      (l) => `
      <article class="editorial-card">
        <div>
          <div class="editorial-card__kicker">${l.city} &bull; ${l.type}</div>
          <h3 class="editorial-card__title">${l.name}</h3>
          <p style="font-size:0.84rem; color:var(--text-secondary); margin:0.4rem 0;">
            <strong>Disciplines accueillies :</strong> ${l.disciplines}
          </p>
          <p style="font-size:0.82rem; color:var(--text-primary); margin:0.45rem 0; padding:0.55rem 0.7rem; background:var(--bg-page); border:1px solid var(--border-color);">
            <strong>Caractéristiques techniques :</strong> ${l.techSpecs}
          </p>
          <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1rem;">
            <strong>Collaborations &amp; œuvres de La Cargaison diffusées :</strong> ${l.collaborations}
          </p>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; padding-top:0.75rem; border-top:1px solid var(--bg-subtle);">
          <a href="${l.website}" target="_blank" rel="noopener" class="btn btn--outline btn--small">Site du lieu &nearr;</a>
          <button type="button" class="btn btn--small" data-create-venue-project="${l.id}">
            Proposer un projet pour ce lieu
          </button>
        </div>
      </article>
    `
    )
    .join('');

  const addLieuSidebar =
    state.currentRole === 'public'
      ? `
      <aside class="panel-card">
        <h3 class="panel-card__title">Réseau de diffusion régional (#15)</h3>
        <p style="font-size:0.85rem; color:var(--text-secondary);">
          Ce répertoire recense la nef principale de La Cargaison (Cathédrale Saint-Jean-l'Évangéliste / Mur [à] mur) ainsi que les lieux culturels, patrimoniaux et municipaux partenaires où rayonnent les 99 membres.
        </p>
      </aside>
    `
      : `
      <aside class="panel-card">
        <h3 class="panel-card__title">Ajouter un lieu de diffusion partenaire (#15)</h3>
        <form id="newLieuForm">
          <div class="form-group">
            <label class="form-label">Nom du lieu culturel / Galerie / Salle</label>
            <input type="text" name="name" class="form-input" placeholder="Ex. Maison de la culture..." required />
          </div>
          <div class="form-group">
            <label class="form-label">Ville / MRC</label>
            <input type="text" name="city" class="form-input" placeholder="Ex. Saint-Jean-sur-Richelieu / Longueuil" required />
          </div>
          <div class="form-group">
            <label class="form-label">Type de lieu</label>
            <input type="text" name="type" class="form-input" placeholder="Ex. Centre d'exposition / Salle de spectacle" required />
          </div>
          <div class="form-group">
            <label class="form-label">Disciplines accueillies</label>
            <input type="text" name="disciplines" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label">Équipements &amp; conditions techniques</label>
            <input type="text" name="techSpecs" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label">Historique avec les membres de La Cargaison</label>
            <textarea name="collaborations" class="form-textarea" required></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Site web officiel</label>
            <input type="url" name="website" class="form-input" placeholder="https://..." required />
          </div>
          <button type="submit" class="btn" style="width:100%;">Ajouter au répertoire des lieux</button>
        </form>
      </aside>
    `;

  container.innerHTML = `
    <div class="maillage-layout">
      <div class="cards-2col">${cardsHtml}</div>
      ${addLieuSidebar}
    </div>
  `;

  container.querySelectorAll('[data-create-venue-project]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (state.currentRole === 'public') {
        state.currentRole = 'member';
      }
      const lieu = (state.lieuxPartenaires || []).find((x) => x.id === btn.dataset.createVenueProject);
      if (!lieu) return;
      const me = getArtistById(state.currentMemberId);
      const newId = 'chantier-lieu-' + Date.now();
      state.chantiers.unshift({
        id: newId,
        title: `Projet de diffusion : ${lieu.name} (${lieu.city})`,
        members: [me.id],
        disciplines: lieu.disciplines,
        stage: 'En conception pour proposition au diffuseur',
        target: `${lieu.name} — ${lieu.city}`,
        milestones: [
          { id: 'ml-1-' + Date.now(), title: `Vérifier l'adéquation avec la fiche technique du lieu (${lieu.techSpecs})`, due: 'Étape 1', owner: me.name, done: false },
          { id: 'ml-2-' + Date.now(), title: 'Réunir les œuvres et co-créateurs membres de La Cargaison', due: 'Étape 2', owner: me.name, done: false }
        ],
        discussions: [
          { authorName: me.name, date: 'À l’instant', text: `Groupe de travail initié pour proposer un projet au lieu partenaire : ${lieu.name}.` }
        ]
      });
      saveState();
      renderAll();
      navigateToRoute(`#/projets/${newId}`);
    });
  });

  const newLieuForm = document.getElementById('newLieuForm');
  if (newLieuForm) {
    newLieuForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      state.lieuxPartenaires = state.lieuxPartenaires || [];
      state.lieuxPartenaires.unshift({
        id: 'lieu-' + Date.now(),
        name: fd.get('name'),
        city: fd.get('city'),
        type: fd.get('type'),
        disciplines: fd.get('disciplines'),
        techSpecs: fd.get('techSpecs'),
        collaborations: fd.get('collaborations'),
        website: fd.get('website')
      });
      saveState();
      renderLieuxPartenaires(container);
    });
  }
}

function renderCalendrierHorsLesMurs(container) {
  const evtsHtml = state.horsLesMurs
    .map((ev) => {
      const artist = getArtistById(ev.artistId);
      return `
        <article class="editorial-card">
          <div>
            <div class="editorial-card__kicker">${ev.date} &bull; ${ev.category}</div>
            <h3 class="editorial-card__title">${ev.title}</h3>
            <p style="font-size:0.86rem; color:var(--text-secondary); margin-bottom:0.4rem;">
              Membre : <strong style="cursor:pointer; text-decoration:underline;" data-open-artist="${artist.id}">${artist.name}</strong> (${artist.roleTitle})
            </p>
            <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1rem;">
              Lieu : ${ev.location}
            </p>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; padding-top:0.75rem; border-top:1px solid var(--bg-subtle);">
            <button type="button" class="btn btn--outline btn--small" data-open-artist="${artist.id}">Voir la fiche artiste</button>
            <a href="${ev.link}" target="_blank" rel="noopener" class="btn btn--small">Lien officiel &nearr;</a>
          </div>
        </article>
      `;
    })
    .join('');

  const addEventSidebar =
    state.currentRole === 'public'
      ? `
      <aside class="panel-card">
        <h3 class="panel-card__title">Rayonnement des membres</h3>
        <p style="font-size:0.85rem; color:var(--text-secondary);">
          Cet agenda rassemble les événements réels, expositions, installations et spectacles des membres de La Cargaison.
        </p>
      </aside>
    `
      : `
      <aside class="panel-card">
        <h3 class="panel-card__title">Annoncer un événement</h3>
        <form id="newEventForm">
          <div class="form-group">
            <label class="form-label">Catégorie</label>
            <input type="text" name="category" class="form-input" placeholder="Ex. Exposition solo / Concert" required />
          </div>
          <div class="form-group">
            <label class="form-label">Titre</label>
            <input type="text" name="title" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label">Date(s)</label>
            <input type="text" name="date" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label">Lieu</label>
            <input type="text" name="location" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label">Lien officiel</label>
            <input type="url" name="link" class="form-input" placeholder="https://..." required />
          </div>
          <button type="submit" class="btn" style="width:100%;">Publier au calendrier</button>
        </form>
      </aside>
    `;

  container.innerHTML = `
    <div class="maillage-layout">
      <div class="cards-2col">${evtsHtml}</div>
      ${addEventSidebar}
    </div>
  `;

  container.querySelectorAll('[data-open-artist]').forEach((el) => {
    el.addEventListener('click', () => openArtistModal(el.dataset.openArtist));
  });

  const newEventForm = document.getElementById('newEventForm');
  if (newEventForm) {
    newEventForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      state.horsLesMurs.unshift({
        id: 'evt-' + Date.now(),
        artistId: state.currentMemberId,
        date: fd.get('date'),
        location: fd.get('location'),
        category: fd.get('category'),
        title: fd.get('title'),
        link: fd.get('link')
      });
      saveState();
      renderCalendrierHorsLesMurs(container);
    });
  }
}

/* ==========================================================================
   04. RENDU DE MON ATELIER (#2 Téléversement local, #5 Co-créateur, #6 Multi-liens, #9 Journal, #13 Messages)
   ========================================================================== */
function renderAtelier() {
  const container = document.getElementById('atelierContentArea');
  const me = getArtistById(state.currentMemberId);
  document.getElementById('atelierHeaderTitle').textContent = `Mon atelier — ${me.name}`;

  if (state.currentRole === 'public') {
    container.innerHTML = `
      <div class="member-gate-notice">
        <h2 style="font-family:var(--font-heading); font-weight:500; margin-bottom:0.75rem;">Accès à l'atelier membre</h2>
        <p style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:1.5rem;">
          Connectez-vous pour gérer votre portfolio, votre journal d'atelier, téléverser vos œuvres, consulter vos messages reçus ou demander une lettre d'appui au C.A.
        </p>
        <button type="button" class="btn" id="gateLoginAtelier">Activer la Vue Membre (${me.name})</button>
      </div>
    `;
    document.getElementById('gateLoginAtelier').addEventListener('click', () => {
      state.currentRole = 'member';
      saveState();
      renderAll();
    });
    return;
  }

  if (activeAtelierSubtab === 'portfolio') {
    renderAtelierPortfolio(container, me);
  } else if (activeAtelierSubtab === 'messages') {
    renderAtelierMessages(container, me);
  } else if (activeAtelierSubtab === 'appui') {
    renderAtelierAppui(container, me);
  } else if (activeAtelierSubtab === 'depot') {
    renderAtelierDepot(container, me);
  }
}

function renderAtelierPortfolio(container, me) {
  const myWorks = getWorksForArtist(me.id);
  const link1 = me.links && me.links[0] ? me.links[0].url : '';
  const link2 = me.links && me.links[1] ? me.links[1].url : '';
  const myJournal = (state.studioJournals && state.studioJournals[me.id]) || [];

  const myWorksHtml =
    myWorks.length === 0
      ? `<p style="font-size:0.84rem; color:var(--text-muted);">Aucune œuvre publiée dans la galerie sous le profil de ${me.name}.</p>`
      : myWorks
          .map(
            (w) => `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:0.7rem 0; border-bottom:1px solid var(--border-color); font-size:0.84rem;">
            <div>
              <strong>${w.title}</strong> (${w.year})
              <div style="color:var(--text-muted); font-size:0.75rem;">${w.medium} &bull; ${w.images ? w.images.length : 0} vue(s)</div>
            </div>
            <button type="button" class="btn btn--outline btn--small" data-remove-own-work="${w.id}">Retirer</button>
          </div>
        `
          )
          .join('');

  const journalHtml =
    myJournal.length === 0
      ? `<p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:0.75rem;">Aucune note d'atelier publiée.</p>`
      : myJournal
          .map(
            (j) => `
          <div style="padding:0.55rem 0; border-bottom:1px solid var(--border-color); font-size:0.83rem;">
            <strong>${j.date} :</strong> ${j.text}
          </div>
        `
          )
          .join('');

  container.innerHTML = `
    <div class="atelier-grid">
      <div>
        <div class="panel-card">
          <h3 class="panel-card__title">Fiche publique &amp; Liens externes (#6)</h3>
          <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.15rem;">
            <img src="${me.photo}" alt="${me.name}" style="width:64px; height:64px; object-fit:cover; filter:grayscale(100%); border:1px solid var(--border-color);" />
            <div>
              <div style="font-family:var(--font-heading); font-weight:600;">${me.name}</div>
              <div style="font-size:0.78rem; color:var(--text-secondary);">${me.roleTitle} &bull; ${me.disciplineGroup}</div>
            </div>
          </div>
          <form id="profileUpdateForm">
            <div class="form-group">
              <label class="form-label">Statut de disponibilité au maillage</label>
              <select name="availabilityStatus" class="form-select">
                <option value="Membre actif — La Cargaison" ${me.availabilityStatus === 'Membre actif — La Cargaison' ? 'selected' : ''}>Membre actif — La Cargaison</option>
                <option value="Ouvert aux collaborations" ${me.availabilityStatus === 'Ouvert aux collaborations' ? 'selected' : ''}>Ouvert aux collaborations</option>
                <option value="Disponible pour contrat / commande" ${me.availabilityStatus === 'Disponible pour contrat / commande' ? 'selected' : ''}>Disponible pour contrat / commande</option>
                <option value="En production" ${me.availabilityStatus === 'En production' ? 'selected' : ''}>En production</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Démarche artistique &amp; biographie</label>
              <textarea name="bio" class="form-textarea" required>${me.bio}</textarea>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Lien officiel 1 (Page d'artiste / Réseau)</label>
                <input type="url" name="externalUrl1" class="form-input" value="${link1}" placeholder="https://..." />
              </div>
              <div class="form-group">
                <label class="form-label">Lien artistique 2 (Instagram / Portfolio / Audio)</label>
                <input type="url" name="externalUrl2" class="form-input" value="${link2}" placeholder="https://..." />
              </div>
            </div>
            <button type="submit" class="btn btn--outline">Enregistrer ma fiche</button>
            <span id="profileSavedNotice" style="font-size:0.78rem; color:var(--text-muted); margin-left:0.6rem; display:none;">Enregistré.</span>
          </form>
        </div>

        <!-- #9 : Journal d'atelier -->
        <div class="panel-card">
          <h3 class="panel-card__title">Mon journal d'atelier (#9)</h3>
          <div style="margin-bottom:1rem;">${journalHtml}</div>
          <form id="addJournalForm" style="display:flex; gap:0.5rem;">
            <input type="text" name="journalText" class="form-input" placeholder="Ajouter une note d'atelier sur vos recherches en cours..." required />
            <button type="submit" class="btn btn--small">Publier</button>
          </form>
        </div>

        <div class="panel-card">
          <h3 class="panel-card__title">Œuvres rattachées à mon profil (${myWorks.length})</h3>
          ${myWorksHtml}
        </div>
      </div>

      <!-- #2 (Téléversement depuis l'ordinateur) & #5 (Co-créateur membre) -->
      <div class="panel-card">
        <h3 class="panel-card__title">Publier une œuvre (Téléversement local #2 &amp; Maillage #5)</h3>
        <form id="publishWorkForm">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Titre de l'œuvre</label>
              <input type="text" name="title" class="form-input" required />
            </div>
            <div class="form-group">
              <label class="form-label">Année</label>
              <input type="text" name="year" class="form-input" value="2026" required />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Discipline</label>
              <select name="discipline" class="form-select" required>
                <option value="${me.disciplineGroup}">${me.disciplineGroup}</option>
                <option value="Arts visuels & Photographie">Arts visuels &amp; Photographie</option>
                <option value="Arts vivants & Scène">Arts vivants &amp; Scène</option>
                <option value="Musique & Son">Musique &amp; Son</option>
                <option value="Arts numériques & 3D">Arts numériques &amp; 3D</option>
                <option value="Littérature & Parole">Littérature &amp; Parole</option>
                <option value="Cinéma & Réalisation">Cinéma &amp; Réalisation</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Membre co-créateur associé (Optionnel #5)</label>
              <select name="coArtistId" class="form-select">
                <option value="">— Création individuelle (Aucun co-créateur) —</option>
                ${state.artists
                  .filter((a) => a.id !== me.id)
                  .map((a) => `<option value="${a.id}">${a.name} (${a.roleTitle})</option>`)
                  .join('')}
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Médium, dimensions ou durée</label>
            <input type="text" name="medium" class="form-input" required />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Statut</label>
              <select name="availability" class="form-select" required>
                <option value="Disponible (Acquisition)">Disponible pour acquisition</option>
                <option value="Disponible (Diffusion / Spectacle)">Disponible pour diffusion / programmation</option>
                <option value="Exposition / Archive">Archive / Collection privée</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Format affiché</label>
              <select name="formatType" class="form-select" required>
                <option value="Image HD (Multi-vues)">Image HD (1 à 3 vues)</option>
                <option value="Lecteur Audio intégré">Audio / Musique</option>
                <option value="Vidéo intégrée">Vidéo (YouTube / Vimeo)</option>
                <option value="Art numérique">Art numérique / 3D</option>
                <option value="Extrait littéraire">Texte / Extrait littéraire</option>
              </select>
            </div>
          </div>

          <!-- #2 : Téléversement direct depuis l'ordinateur -->
          <div class="form-group">
            <label class="form-label">Téléverser 1 ou plusieurs photos depuis votre ordinateur (#2)</label>
            <div class="file-dropzone" id="localDropzone">
              <input type="file" id="localFileInput" accept="image/*" multiple style="display:none;" />
              <div style="font-size:0.84rem; color:var(--text-secondary);">
                Cliquez ici pour choisir des images (JPG, PNG, WebP) depuis votre ordinateur
              </div>
              <div class="upload-previews" id="localUploadPreviews"></div>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Ou indiquer une URL d'image web (si aucun fichier local choisi)</label>
            <input type="url" name="image1" class="form-input" value="${me.photo}" />
          </div>

          <div class="form-group">
            <label class="form-label">Description de l'œuvre</label>
            <textarea name="description" class="form-textarea" required></textarea>
          </div>

          <!-- #10 : Gestionnaire de fiche technique (« Technical Rider » & Conditions d'exposition) -->
          <div style="padding:1rem; background:var(--bg-page); border:1px solid var(--border-color); margin-bottom:1.15rem;">
            <div style="font-size:0.72rem; text-transform:uppercase; letter-spacing:0.07em; color:var(--text-muted); margin-bottom:0.65rem;">
              Fiche technique (« Technical Rider » &amp; Conditions de diffusion — Idée #10)
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Espace requis / Accrochage</label>
                <input type="text" name="techSpace" class="form-input" value="Cimaises de galerie ou espace scénique adapté" style="background:var(--bg-surface);" />
              </div>
              <div class="form-group">
                <label class="form-label">Éclairage, son &amp; équipement</label>
                <input type="text" name="techLighting" class="form-input" value="Éclairage directionnel 3000K / Besoins standards" style="background:var(--bg-surface);" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group" style="margin-bottom:0;">
                <label class="form-label">Durée, montage &amp; démontage</label>
                <input type="text" name="techSetup" class="form-input" value="Montage : demi-journée" style="background:var(--bg-surface);" />
              </div>
              <div class="form-group" style="margin-bottom:0;">
                <label class="form-label">Transport &amp; assurance</label>
                <input type="text" name="techInsurance" class="form-input" value="Assurance exposition clou à clou par le diffuseur" style="background:var(--bg-surface);" />
              </div>
            </div>
          </div>

          <button type="submit" class="btn">Publier dans la galerie (avec fiche technique)</button>
        </form>
      </div>
    </div>
  `;

  // Gestion du sélecteur de fichiers locaux (#2)
  pendingLocalFilesDataUrls = [];
  const dropzone = document.getElementById('localDropzone');
  const fileInput = document.getElementById('localFileInput');
  const previewsBox = document.getElementById('localUploadPreviews');

  dropzone.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files || []);
    pendingLocalFilesDataUrls = [];
    previewsBox.innerHTML = '';
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        pendingLocalFilesDataUrls.push(ev.target.result);
        const img = document.createElement('img');
        img.src = ev.target.result;
        img.className = 'upload-preview-thumb';
        previewsBox.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  });

  document.getElementById('profileUpdateForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    me.availabilityStatus = fd.get('availabilityStatus');
    me.bio = fd.get('bio');
    const u1 = fd.get('externalUrl1');
    const u2 = fd.get('externalUrl2');
    const newLinks = [];
    if (u1) newLinks.push({ label: u1.includes('facebook') ? 'Facebook' : 'Page officielle', url: u1 });
    if (u2) newLinks.push({ label: u2.includes('instagram') ? 'Instagram' : 'Lien 2', url: u2 });
    if (newLinks.length > 0) me.links = newLinks;
    saveState();
    renderArtists();
    const notice = document.getElementById('profileSavedNotice');
    notice.style.display = 'inline';
    setTimeout(() => (notice.style.display = 'none'), 2500);
  });

  document.getElementById('addJournalForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const txt = fd.get('journalText');
    if (txt) {
      state.studioJournals = state.studioJournals || {};
      state.studioJournals[me.id] = state.studioJournals[me.id] || [];
      state.studioJournals[me.id].unshift({
        date: new Date().toLocaleDateString('fr-CA'),
        text: txt
      });
      saveState();
      renderAtelierPortfolio(container, me);
    }
  });

  container.querySelectorAll('[data-remove-own-work]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.works = state.works.filter((w) => w.id !== btn.dataset.removeOwnWork);
      saveState();
      renderAll();
    });
  });

  document.getElementById('publishWorkForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const images =
      pendingLocalFilesDataUrls.length > 0
        ? [...pendingLocalFilesDataUrls]
        : [fd.get('image1')].filter((u) => u && u.trim() !== '');
    const coId = fd.get('coArtistId');

    state.works.unshift({
      id: 'work-' + Date.now(),
      artistId: me.id,
      coArtistIds: coId ? [coId] : [],
      capsuleId: 'cap-1',
      title: fd.get('title'),
      year: fd.get('year'),
      discipline: fd.get('discipline'),
      medium: fd.get('medium'),
      formatType: fd.get('formatType'),
      availability: fd.get('availability'),
      priceIndication: 'Contact direct avec l’artiste',
      sourceUrl: link1,
      images,
      embedUrl: '',
      description: fd.get('description'),
      techRider: {
        spaceRequired: fd.get('techSpace') || 'Cimaises ou espace scénique standard',
        lightingAudio: fd.get('techLighting') || 'Éclairage de galerie standard',
        setupDuration: fd.get('techSetup') || 'Montage : demi-journée',
        insuranceTransport: fd.get('techInsurance') || 'Assurance par le diffuseur'
      }
    });
    saveState();
    renderAll();
    navigateToRoute('#/galerie');
  });
}

// #13 : Boîte de réception réelle des messages dans Mon atelier
function renderAtelierMessages(container, me) {
  const myMessages = (state.messages || []).filter((m) => m.recipientId === me.id);
  const listHtml =
    myMessages.length === 0
      ? `<p style="font-size:0.86rem; color:var(--text-muted); padding:1rem 0;">Aucun message reçu pour ${me.name}.</p>`
      : myMessages
          .map(
            (m) => `
          <div style="padding:1.15rem; border:1px solid var(--border-color); background:var(--bg-page); margin-bottom:0.85rem;">
            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.4rem;">
              <strong>Objet : ${m.subject}</strong>
              <span style="font-size:0.75rem; color:var(--text-muted);">${m.date}</span>
            </div>
            <div style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:0.65rem;">
              De : <strong>${m.senderName}</strong> ${m.senderEmail ? `(${m.senderEmail})` : ''}
            </div>
            <p style="font-size:0.88rem; line-height:1.6;">${m.body}</p>
          </div>
        `
          )
          .join('');

  container.innerHTML = `
    <div class="panel-card">
      <h3 class="panel-card__title">Boîte de réception directe de ${me.name} (${myMessages.length} message(s))</h3>
      <p style="font-size:0.84rem; color:var(--text-secondary); margin-bottom:1.15rem;">
        Tous les messages envoyés depuis vos fiches d'œuvres ou via le bouton « Écrire en privé » arrivent directement ici.
      </p>
      ${listHtml}
    </div>
  `;
}

function renderAtelierAppui(container, me) {
  const myLetters = state.supportLetters.filter((l) => l.artistId === me.id);
  const listHtml =
    myLetters.length === 0
      ? `<p style="font-size:0.84rem; color:var(--text-muted);">Aucune demande de lettre d'appui soumise par ${me.name}.</p>`
      : myLetters
          .map(
            (l) => `
          <div style="padding:0.9rem 0; border-bottom:1px solid var(--border-color); font-size:0.85rem;">
            <div style="display:flex; justify-content:space-between; gap:1rem;">
              <strong>${l.projectTitle}</strong>
              <span style="padding:0.12rem 0.5rem; border:1px solid var(--border-color); font-size:0.74rem;">${l.status}</span>
            </div>
            <div style="color:var(--text-secondary); margin-top:0.25rem;">${l.grantAgency} &bull; Tombée : ${l.deadline}</div>
          </div>
        `
          )
          .join('');

  container.innerHTML = `
    <div class="atelier-grid">
      <div class="panel-card">
        <h3 class="panel-card__title">Mes demandes de lettres d'appui (${myLetters.length})</h3>
        ${listHtml}
      </div>

      <div class="panel-card">
        <h3 class="panel-card__title">Nouvelle demande de lettre d'appui officielle (#16)</h3>
        <form id="newSupportLetterForm">
          <div class="form-group">
            <label class="form-label">Membre demandeur</label>
            <input type="text" class="form-input" value="${me.name} (${me.roleTitle})" disabled />
          </div>
          <div class="form-group">
            <label class="form-label">Organisme subventionnaire &amp; programme</label>
            <select name="grantAgency" class="form-select" required>
              <option value="CALQ — Conseil des arts et des lettres du Québec (Programme territorial Montérégie)">CALQ — Programme de partenariat territorial de la Montérégie</option>
              <option value="CALQ — Bourse de recherche et création">CALQ — Bourse de recherche et création</option>
              <option value="CAC — Conseil des arts du Canada">CAC — Conseil des arts du Canada</option>
              <option value="MRC du Haut-Richelieu / Fonds culturel">MRC du Haut-Richelieu / Fonds culturel</option>
            </select>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Titre du projet</label>
              <input type="text" name="projectTitle" class="form-input" required />
            </div>
            <div class="form-group">
              <label class="form-label">Date limite du dépôt</label>
              <input type="date" name="deadline" class="form-input" value="2026-11-30" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Résumé du projet</label>
            <textarea name="summary" class="form-textarea" required></textarea>
          </div>
          <button type="submit" class="btn">Transmettre la demande au C.A.</button>
        </form>
      </div>
    </div>
  `;

  document.getElementById('newSupportLetterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    state.supportLetters.unshift({
      id: 'let-' + Date.now(),
      artistId: me.id,
      grantAgency: fd.get('grantAgency'),
      deadline: fd.get('deadline'),
      projectTitle: fd.get('projectTitle'),
      summary: fd.get('summary'),
      status: 'En attente du C.A.'
    });
    saveState();
    renderAll();
  });
}

function renderAtelierDepot(container, me) {
  container.innerHTML = `
    <div class="atelier-grid">
      <div class="panel-card">
        <h3 class="panel-card__title">Grille d'évaluation officielle du C.A. (50 / 30 / 20)</h3>
        <div style="font-size:0.84rem; border-top:1px solid var(--border-color);">
          <div style="padding:0.75rem 0; border-bottom:1px solid var(--border-color);">
            <strong>1. Mérite artistique — 50 %</strong> (Note minimale : <strong>35 / 50</strong>)
          </div>
          <div style="padding:0.75rem 0; border-bottom:1px solid var(--border-color);">
            <strong>2. Impact — 30 %</strong> (Note minimale : <strong>20 / 30</strong>)
          </div>
          <div style="padding:0.75rem 0; border-bottom:1px solid var(--border-color);">
            <strong>3. Faisabilité — 20 %</strong> (Note minimale : <strong>12 / 20</strong>)
          </div>
        </div>
      </div>

      <div class="panel-card">
        <h3 class="panel-card__title">Soumettre un projet de création à La Cargaison (#17)</h3>
        <form id="newProjectSubmissionForm">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Titre du projet</label>
              <input type="text" name="title" class="form-input" required />
            </div>
            <div class="form-group">
              <label class="form-label">Budget global estimé</label>
              <input type="text" name="budget" class="form-input" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Autres membres du collectif impliqués (Maillage)</label>
            <input type="text" name="coArtists" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label">1. Mérite artistique (50 %)</label>
            <textarea name="meritText" class="form-textarea" required></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">2. Impact &amp; Maillage (30 %)</label>
            <textarea name="impactText" class="form-textarea" required></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">3. Faisabilité &amp; Conditions (20 %)</label>
            <textarea name="feasibilityText" class="form-textarea" required></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Déclaration de conflits d'intérêts</label>
            <input type="text" name="conflictDeclared" class="form-input" value="Aucun conflit d’intérêts à déclarer." required />
          </div>
          <button type="submit" class="btn">Soumettre le dossier au C.A.</button>
        </form>
      </div>
    </div>
  `;

  document.getElementById('newProjectSubmissionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    state.projectSubmissions.unshift({
      id: 'proj-' + Date.now(),
      artistId: me.id,
      coArtists: fd.get('coArtists'),
      title: fd.get('title'),
      budget: fd.get('budget'),
      meritText: fd.get('meritText'),
      impactText: fd.get('impactText'),
      feasibilityText: fd.get('feasibilityText'),
      conflictDeclared: fd.get('conflictDeclared'),
      scoreMerit: 38,
      scoreImpact: 22,
      scoreFeasibility: 15,
      status: 'En évaluation par le C.A.'
    });
    saveState();
    state.currentRole = 'admin';
    renderAll();
    navigateToRoute('#/gouvernance-ca');
  });
}

/* ==========================================================================
   05. RENDU GOUVERNANCE C.A. (#16 Ordre du jour & Convocation, #17 Suivi budgétaire, Lettres & Adhésions)
   ========================================================================== */
function renderCaAdmin() {
  const container = document.getElementById('caAdminContentArea');

  // Calculs du module de Suivi budgétaire (#17)
  state.budgetData = state.budgetData || {
    annualEnvelope: 145000,
    fiscalYear: 'Exercice 2026–2027',
    allocations: []
  };
  const envelope = Number(state.budgetData.annualEnvelope) || 145000;
  const allocations = state.budgetData.allocations || [];
  const committedTotal = allocations
    .filter((a) => a.status === 'Adopté / Engagé')
    .reduce((sum, a) => sum + (Number(a.amount) || 0), 0);
  const pendingTotal = allocations
    .filter((a) => a.status !== 'Adopté / Engagé')
    .reduce((sum, a) => sum + (Number(a.amount) || 0), 0);
  const availableBalance = Math.max(0, envelope - committedTotal - pendingTotal);
  const committedPct = Math.min(100, Math.round((committedTotal / envelope) * 100));
  const pendingPct = Math.min(100 - committedPct, Math.round((pendingTotal / envelope) * 100));

  const fmtCurrency = (n) => Number(n || 0).toLocaleString('fr-CA') + ' $';

  const budgetRowsHtml = allocations
    .map(
      (b) => `
      <tr>
        <td><strong>${b.projectTitle}</strong></td>
        <td>${b.category}</td>
        <td>${b.beneficiary}</td>
        <td>
          <input type="number" min="0" step="500" value="${b.amount}" class="score-input" style="width:92px;" data-budget-amount="${b.id}" /> $
        </td>
        <td>
          <select class="filter-select" style="font-size:0.74rem; padding:0.2rem 0.45rem;" data-budget-status="${b.id}">
            <option value="Adopté / Engagé" ${b.status === 'Adopté / Engagé' ? 'selected' : ''}>Adopté / Engagé</option>
            <option value="En réserve (Évaluation C.A.)" ${b.status === 'En réserve (Évaluation C.A.)' ? 'selected' : ''}>En réserve (Évaluation C.A.)</option>
          </select>
        </td>
        <td>
          <button type="button" class="btn btn--outline btn--small" data-remove-budget="${b.id}">Retirer</button>
        </td>
      </tr>
    `
    )
    .join('');

  const lettersRows = state.supportLetters
    .map((l) => {
      const artist = getArtistById(l.artistId);
      return `
        <tr>
          <td><strong>${artist.name}</strong><br><span style="color:var(--text-muted); font-size:0.75rem;">${artist.roleTitle}</span></td>
          <td><strong>${l.projectTitle}</strong><br><span style="color:var(--text-secondary); font-size:0.8rem;">${l.summary}</span></td>
          <td>${l.grantAgency}</td>
          <td>${l.deadline}</td>
          <td><strong>${l.status}</strong></td>
          <td>
            <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
              <button type="button" class="btn btn--outline btn--small" data-toggle-letter="${l.id}">
                ${l.status.includes('Approuvée') ? 'Remettre en attente' : 'Approuver'}
              </button>
              <button type="button" class="btn btn--small" data-generate-letter-doc="${l.id}">
                Générer la lettre officielle
              </button>
            </div>
          </td>
        </tr>
      `;
    })
    .join('');

  const projectsRows = state.projectSubmissions
    .map((p) => {
      const artist = getArtistById(p.artistId);
      const mOk = p.scoreMerit >= 35;
      const iOk = p.scoreImpact >= 20;
      const fOk = p.scoreFeasibility >= 12;
      const allOk = mOk && iOk && fOk;
      const total = Number(p.scoreMerit) + Number(p.scoreImpact) + Number(p.scoreFeasibility);

      return `
        <tr>
          <td>
            <strong>${p.title}</strong>
            <div style="font-size:0.78rem; color:var(--text-secondary); margin-top:0.2rem;">
              Déposé par <strong>${artist.name}</strong> &bull; Maillage : ${p.coArtists} &bull; Budget : ${p.budget}
            </div>
          </td>
          <td>
            <input type="number" min="0" max="50" value="${p.scoreMerit}" class="score-input" data-score-proj="${p.id}" data-field="scoreMerit" /> / 50
            <div style="font-size:0.7rem;">Min. 35 (${mOk ? 'Atteint' : 'Insuffisant'})</div>
          </td>
          <td>
            <input type="number" min="0" max="30" value="${p.scoreImpact}" class="score-input" data-score-proj="${p.id}" data-field="scoreImpact" /> / 30
            <div style="font-size:0.7rem;">Min. 20 (${iOk ? 'Atteint' : 'Insuffisant'})</div>
          </td>
          <td>
            <input type="number" min="0" max="20" value="${p.scoreFeasibility}" class="score-input" data-score-proj="${p.id}" data-field="scoreFeasibility" /> / 20
            <div style="font-size:0.7rem;">Min. 12 (${fOk ? 'Atteint' : 'Insuffisant'})</div>
          </td>
          <td>
            <strong style="font-size:1rem;">${total} / 100</strong>
            <div style="font-size:0.75rem;">${allOk ? '<strong>Admissible</strong>' : 'Non admissible'}</div>
          </td>
        </tr>
      `;
    })
    .join('');

  const apps = state.membershipApplications || [];
  const appsRows =
    apps.length === 0
      ? `<tr><td colspan="5" style="color:var(--text-muted);">Aucune nouvelle demande d'adhésion en attente (testez le formulaire dans l'onglet 06 Devenir membre).</td></tr>`
      : apps
          .map(
            (app) => `
          <tr>
            <td><strong>${app.name}</strong></td>
            <td>${app.category}</td>
            <td>${app.roleTitle} (${app.disciplineGroup})</td>
            <td>${app.status}</td>
            <td>
              ${
                app.status === 'Approuvé (Ajouté au répertoire)'
                  ? 'Membre actif ✓'
                  : `<button type="button" class="btn btn--small" data-approve-member-app="${app.id}">Approuver &amp; ajouter au répertoire</button>`
              }
            </td>
          </tr>
        `
          )
          .join('');

  container.innerHTML = `
    <!-- #17 : Suivi budgétaire et Répartition des fonds par projet du C.A. -->
    <div class="panel-card">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; padding-bottom:0.75rem; margin-bottom:1.15rem; border-bottom:1px solid var(--border-color);">
        <h3 style="font-family:var(--font-heading); font-size:1.02rem; font-weight:500; margin:0;">
          1. Suivi budgétaire &amp; Répartition des fonds par projet du C.A. (#17)
        </h3>
        <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.8rem;">
          <label for="annualEnvelopeInput" style="color:var(--text-secondary);">Enveloppe annuelle (${state.budgetData.fiscalYear}) :</label>
          <input type="number" id="annualEnvelopeInput" value="${envelope}" step="1000" class="score-input" style="width:105px;" /> $
        </div>
      </div>

      <div class="budget-kpi-grid">
        <div class="budget-kpi-card">
          <div class="budget-kpi-card__label">Enveloppe globale C.A.</div>
          <div class="budget-kpi-card__value">${fmtCurrency(envelope)}</div>
          <div class="budget-kpi-card__sub">${state.budgetData.fiscalYear}</div>
        </div>
        <div class="budget-kpi-card">
          <div class="budget-kpi-card__label">Fonds adoptés / engagés</div>
          <div class="budget-kpi-card__value">${fmtCurrency(committedTotal)}</div>
          <div class="budget-kpi-card__sub">${committedPct} % de l'enveloppe annuelle</div>
        </div>
        <div class="budget-kpi-card">
          <div class="budget-kpi-card__label">En réserve (Évaluation 50/30/20)</div>
          <div class="budget-kpi-card__value">${fmtCurrency(pendingTotal)}</div>
          <div class="budget-kpi-card__sub">${pendingPct} % en délibération</div>
        </div>
        <div class="budget-kpi-card">
          <div class="budget-kpi-card__label">Solde disponible (Maillages)</div>
          <div class="budget-kpi-card__value">${fmtCurrency(availableBalance)}</div>
          <div class="budget-kpi-card__sub">Disponible pour nouveaux projets</div>
        </div>
      </div>

      <div class="budget-bar-track" title="Répartition budgétaire">
        <div class="budget-bar-fill-committed" style="width:${committedPct}%;"></div>
        <div class="budget-bar-fill-pending" style="width:${pendingPct}%;"></div>
      </div>

      <div style="overflow-x:auto; margin-bottom:1.25rem;">
        <table class="ca-table">
          <thead>
            <tr>
              <th>Projet ou poste budgétaire</th>
              <th>Catégorie</th>
              <th>Membres / Bénéficiaires</th>
              <th>Montant alloué</th>
              <th>Statut C.A.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>${budgetRowsHtml}</tbody>
        </table>
      </div>

      <form id="addBudgetLineForm" style="display:grid; grid-template-columns: 1.5fr 1fr 1fr 120px auto; gap:0.6rem; align-items:end;">
        <div>
          <label class="form-label">Nouveau poste ou projet financé</label>
          <input type="text" name="projectTitle" class="form-input" placeholder="Ex. Résidence croisée Printemps 2027" required />
        </div>
        <div>
          <label class="form-label">Catégorie</label>
          <input type="text" name="category" class="form-input" value="Production & Maillage" required />
        </div>
        <div>
          <label class="form-label">Membres bénéficiaires</label>
          <input type="text" name="beneficiary" class="form-input" placeholder="Noms des membres..." required />
        </div>
        <div>
          <label class="form-label">Montant ($)</label>
          <input type="number" name="amount" min="100" step="100" value="5000" class="form-input" required />
        </div>
        <button type="submit" class="btn">Inscrire au budget</button>
      </form>
    </div>

    <!-- #16 : Générateur d'Ordre du jour et Convocation d'assemblée (C.A. / AGA) -->
    <div class="panel-card">
      <h3 class="panel-card__title">2. Générateur d'Ordre du jour &amp; Convocation officielle (C.A. / AGA — Idée #16)</h3>
      <p style="font-size:0.84rem; color:var(--text-secondary); margin-bottom:1.15rem;">
        Cet outil compile automatiquement les points en attente (suivi budgétaire, demandes de lettres d'appui, dossiers soumis à la grille 50/30/20 et nouvelles candidatures de membres) dans un avis de convocation formel prêt à imprimer ou envoyer.
      </p>
      <form id="generateAgendaForm">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Type d'assemblée</label>
            <select name="meetingType" class="form-select" required>
              <option value="Séance régulière du Conseil d'administration (C.A.)">Séance régulière du Conseil d'administration (C.A.)</option>
              <option value="Assemblée générale annuelle (AGA) des 99 membres">Assemblée générale annuelle (AGA) des 99 membres</option>
              <option value="Séance extraordinaire du Conseil d'administration">Séance extraordinaire du Conseil d'administration</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Date et heure de la séance</label>
            <input type="text" name="meetingDate" class="form-input" value="Mercredi 18 novembre 2026 à 19 h 00" required />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Lieu / Modalité de réunion</label>
            <input type="text" name="meetingLocation" class="form-input" value="215, rue Longueuil, Saint-Jean-sur-Richelieu (Cathédrale / Mur [à] mur) & Visioconférence" required />
          </div>
          <div class="form-group">
            <label class="form-label">Points particuliers à inscrire au Varia (optionnel)</label>
            <input type="text" name="customVaria" class="form-input" placeholder="Ex. Programmation estivale, partenariat municipal..." />
          </div>
        </div>
        <button type="submit" class="btn">Générer l'Ordre du jour &amp; la Convocation officielle (PDF / Impression)</button>
      </form>
    </div>

    <div class="panel-card">
      <h3 class="panel-card__title">3. Demandes de lettres d'appui &amp; Générateur de lettre officielle</h3>
      <div style="overflow-x:auto;">
        <table class="ca-table">
          <thead>
            <tr>
              <th>Artiste membre</th>
              <th>Projet &amp; Résumé</th>
              <th>Programme visé</th>
              <th>Tombée</th>
              <th>Statut</th>
              <th>Actions du C.A.</th>
            </tr>
          </thead>
          <tbody>${lettersRows}</tbody>
        </table>
      </div>
    </div>

    <div class="panel-card">
      <h3 class="panel-card__title">4. Évaluation des dépôts de projets — Grille officielle 50 / 30 / 20</h3>
      <div style="overflow-x:auto;">
        <table class="ca-table">
          <thead>
            <tr>
              <th style="width:42%;">Dossier déposé</th>
              <th>Mérite (50 %)</th>
              <th>Impact (30 %)</th>
              <th>Faisabilité (20 %)</th>
              <th>Résultat C.A.</th>
            </tr>
          </thead>
          <tbody>${projectsRows}</tbody>
        </table>
      </div>
    </div>

    <div class="panel-card">
      <h3 class="panel-card__title">5. Demandes d'adhésion au collectif reçues</h3>
      <div style="overflow-x:auto;">
        <table class="ca-table">
          <thead>
            <tr>
              <th>Candidat(e)</th>
              <th>Catégorie demandée</th>
              <th>Discipline</th>
              <th>Statut</th>
              <th>Décision C.A.</th>
            </tr>
          </thead>
          <tbody>${appsRows}</tbody>
        </table>
      </div>
    </div>
  `;

  // Gestionnaires Suivi budgétaire (#17)
  const envInput = document.getElementById('annualEnvelopeInput');
  if (envInput) {
    envInput.addEventListener('change', (e) => {
      state.budgetData.annualEnvelope = Number(e.target.value) || 145000;
      saveState();
      renderCaAdmin();
    });
  }

  container.querySelectorAll('[data-budget-amount]').forEach((inp) => {
    inp.addEventListener('change', (e) => {
      const item = state.budgetData.allocations.find((x) => x.id === inp.dataset.budgetAmount);
      if (item) {
        item.amount = Number(e.target.value) || 0;
        saveState();
        renderCaAdmin();
      }
    });
  });

  container.querySelectorAll('[data-budget-status]').forEach((sel) => {
    sel.addEventListener('change', (e) => {
      const item = state.budgetData.allocations.find((x) => x.id === sel.dataset.budgetStatus);
      if (item) {
        item.status = e.target.value;
        saveState();
        renderCaAdmin();
      }
    });
  });

  container.querySelectorAll('[data-remove-budget]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.budgetData.allocations = state.budgetData.allocations.filter((x) => x.id !== btn.dataset.removeBudget);
      saveState();
      renderCaAdmin();
    });
  });

  document.getElementById('addBudgetLineForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    state.budgetData.allocations.push({
      id: 'bud-' + Date.now(),
      projectTitle: fd.get('projectTitle'),
      category: fd.get('category'),
      beneficiary: fd.get('beneficiary'),
      amount: Number(fd.get('amount')) || 0,
      status: 'Adopté / Engagé'
    });
    saveState();
    renderCaAdmin();
  });

  // Gestionnaire Ordre du jour & Convocation (#16)
  document.getElementById('generateAgendaForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    openAgendaConvocationModal({
      meetingType: fd.get('meetingType'),
      meetingDate: fd.get('meetingDate'),
      meetingLocation: fd.get('meetingLocation'),
      customVaria: fd.get('customVaria')
    });
  });

  container.querySelectorAll('[data-toggle-letter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = state.supportLetters.find((l) => l.id === btn.dataset.toggleLetter);
      if (item) {
        item.status = item.status.includes('Approuvée') ? 'En attente du C.A.' : 'Approuvée par le C.A.';
        saveState();
        renderAll();
      }
    });
  });

  container.querySelectorAll('[data-generate-letter-doc]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openSupportLetterDocModal(btn.dataset.generateLetterDoc);
    });
  });

  container.querySelectorAll('[data-score-proj]').forEach((inp) => {
    inp.addEventListener('input', () => {
      const proj = state.projectSubmissions.find((p) => p.id === inp.dataset.scoreProj);
      const field = inp.dataset.field;
      if (proj && field) {
        proj[field] = Number(inp.value) || 0;
        saveState();
        renderCaAdmin();
      }
    });
  });

  container.querySelectorAll('[data-approve-member-app]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const app = (state.membershipApplications || []).find((a) => a.id === btn.dataset.approveMemberApp);
      if (app && app.status !== 'Approuvé (Ajouté au répertoire)') {
        app.status = 'Approuvé (Ajouté au répertoire)';
        const newId = app.name
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '-');
        state.artists.push({
          id: newId,
          name: app.name,
          roleTitle: app.roleTitle,
          disciplineGroup: app.disciplineGroup,
          photo: app.photo || 'https://www.lacargaison.org/wp-content/uploads/2025/01/Cargaison_membre_Evan_Patruno.jpg',
          location: 'Montérégie / Québec',
          availabilityStatus: 'Ouvert aux collaborations',
          bio: app.bio,
          personalNews: 'Nouveau membre approuvé par le C.A.',
          maillageSkills: app.roleTitle,
          links: app.website ? [{ label: 'Site officiel', url: app.website }] : []
        });
        saveState();
        populateMemberSelector();
        renderAll();
      }
    });
  });
}

/* ==========================================================================
   06. RENDU DEVENIR MEMBRE (#15 : Critères officiels lacargaison.org/membres/)
   ========================================================================== */
function renderAdhesion() {
  const container = document.getElementById('adhesionContentArea');
  if (!container) return;

  container.innerHTML = `
    <div class="atelier-grid">
      <div>
        <div class="panel-card">
          <h3 class="panel-card__title">Catégories officielles de membres (La Cargaison)</h3>
          <div style="font-size:0.85rem; line-height:1.65;">
            <div style="padding-bottom:1rem; margin-bottom:1rem; border-bottom:1px solid var(--border-color);">
              <strong>1. Membre ACTIF (Artiste professionnel — Adhésion à vie : 20 $)</strong>
              <p style="color:var(--text-secondary); margin-top:0.25rem;">
                Artiste professionnel au sens de la Loi sur le statut de l'artiste travaillant dans un esprit de maillage. Seuls les membres actifs peuvent participer aux mandats de création de La Cargaison | collectif créatif. (Virement de 20 $ à <code>finances@lacargaison.org</code>).
              </p>
            </div>
            <div style="padding-bottom:1rem; margin-bottom:1rem; border-bottom:1px solid var(--border-color);">
              <strong>2. Membre ASSOCIÉ (Cotisation annuelle)</strong>
              <p style="color:var(--text-secondary); margin-top:0.25rem;">
                Personne, entreprise ou organisme du monde des arts et de la culture (artiste de la relève, technicien, organisme culturel) souhaitant soutenir ou collaborer aux projets du collectif.
              </p>
            </div>
            <div>
              <strong>3. Membre OBSERVATEUR</strong>
              <p style="color:var(--text-secondary); margin-top:0.25rem;">
                Personne déléguée par un organisme partenaire ou reconnue par la municipalité et nommée par le Conseil d'administration.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="panel-card">
        <h3 class="panel-card__title">Formulaire de demande d'adhésion au C.A. (#15)</h3>
        <form id="adhesionForm">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Prénom et Nom</label>
              <input type="text" name="name" class="form-input" required />
            </div>
            <div class="form-group">
              <label class="form-label">Catégorie demandée</label>
              <select name="category" class="form-select" required>
                <option value="Membre Actif (Artiste professionnel — 20 $ à vie)">Membre Actif (Artiste professionnel — 20 $ à vie)</option>
                <option value="Membre Associé">Membre Associé</option>
                <option value="Membre Observateur">Membre Observateur</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Discipline / Métier</label>
              <input type="text" name="roleTitle" class="form-input" placeholder="Ex. Sculpteur, Musicienne..." required />
            </div>
            <div class="form-group">
              <label class="form-label">Famille disciplinaire</label>
              <select name="disciplineGroup" class="form-select" required>
                <option value="Arts visuels & Photographie">Arts visuels &amp; Photographie</option>
                <option value="Arts vivants & Scène">Arts vivants &amp; Scène</option>
                <option value="Musique & Son">Musique &amp; Son</option>
                <option value="Arts numériques & 3D">Arts numériques &amp; 3D</option>
                <option value="Littérature & Parole">Littérature &amp; Parole</option>
                <option value="Cinéma & Réalisation">Cinéma &amp; Réalisation</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Site web ou page artistique (URL)</label>
            <input type="url" name="website" class="form-input" placeholder="https://..." />
          </div>
          <div class="form-group">
            <label class="form-label">Brève présentation &amp; motivation de maillage</label>
            <textarea name="bio" class="form-textarea" required></textarea>
          </div>
          <button type="submit" class="btn">Soumettre ma candidature au C.A.</button>
        </form>
        <div id="adhesionSuccessNotice" style="display:none; margin-top:1rem; padding:1rem; border:1px solid var(--border-color); background:var(--bg-page); font-size:0.85rem;">
          Votre demande a été transmise au Conseil d'administration (consultable dans l'onglet <strong>05 Gouvernance C.A.</strong>).
        </div>
      </div>
    </div>
  `;

  document.getElementById('adhesionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    state.membershipApplications = state.membershipApplications || [];
    state.membershipApplications.unshift({
      id: 'app-' + Date.now(),
      name: fd.get('name'),
      category: fd.get('category'),
      roleTitle: fd.get('roleTitle'),
      disciplineGroup: fd.get('disciplineGroup'),
      website: fd.get('website'),
      bio: fd.get('bio'),
      status: 'En attente du C.A.'
    });
    saveState();
    renderAll();
    document.getElementById('adhesionSuccessNotice').style.display = 'block';
    e.target.reset();
  });
}

/* ==========================================================================
   SOUS-PAGE DÉDIÉE 1 : PAGE D'UNE ŒUVRE (#3 Cartel QR, #5 Co-créateurs, #10 Fiche technique diffuseur)
   ========================================================================== */
function openArtworkModal(workId) {
  navigateToRoute(`#/oeuvres/${workId}`);
}

function renderOeuvreSubpage(workId) {
  const container = document.getElementById('oeuvreSubpageContainer');
  const idx = state.works.findIndex((w) => w.id === workId);
  const work = state.works[idx] || state.works[0];
  if (!work) return;

  const prevWork = state.works[(idx - 1 + state.works.length) % state.works.length];
  const nextWork = state.works[(idx + 1) % state.works.length];

  const artist = getArtistById(work.artistId);
  const coArtists = (work.coArtistIds || []).map((id) => getArtistById(id));
  const images = work.images || [];
  const mainImg = images[0] || '';

  const rider = work.techRider || {
    spaceRequired: 'Cimaises d’exposition ou espace scénique adapté',
    lightingAudio: 'Éclairage directionnel de galerie / sonorisation selon le lieu',
    setupDuration: 'Montage : demi-journée',
    insuranceTransport: 'Assurance exposition par le diffuseur'
  };

  const thumbsHtml =
    images.length > 1
      ? `<div class="stage-thumbs">
          ${images
            .map(
              (url, i) =>
                `<img src="${url}" alt="Vue ${i + 1}" class="stage-thumb ${i === 0 ? 'active' : ''}" data-stage-img="${url}" />`
            )
            .join('')}
        </div>`
      : '';

  const quoteHtml = work.textExcerpt
    ? `<blockquote style="max-width:480px; margin-top:1.25rem; font-family:Georgia,serif; font-style:italic; font-size:0.95rem; line-height:1.65; color:#dcd9d0; border-left:2px solid #555; padding-left:1rem;">${work.textExcerpt}</blockquote>`
    : '';

  const coArtistsHtml =
    coArtists.length > 0
      ? `<div style="margin-bottom:1rem; font-size:0.84rem; color:var(--text-secondary);">
          <strong>Membres co-créateurs associés (#5) :</strong>
          ${coArtists
            .map(
              (c) =>
                `<a href="#/artistes/${c.id}" style="color:var(--text-primary); text-decoration:underline; margin-left:0.35rem;">${c.name} (${c.roleTitle})</a>`
            )
            .join(' &bull; ')}
        </div>`
      : '';

  const artistLinksHtml = (artist.links || [])
    .map(
      (l) =>
        `<a href="${l.url}" target="_blank" rel="noopener" class="btn btn--outline btn--small">${l.label} de ${artist.name} &nearr;</a>`
    )
    .join(' ');

  const sourceBtnHtml = work.sourceUrl
    ? `<a href="${work.sourceUrl}" target="_blank" rel="noopener" class="btn btn--small">Voir la page source réelle &nearr;</a>`
    : '';

  container.innerHTML = `
    <div class="subpage-top-nav">
      <a href="#/galerie" class="btn btn--outline btn--small">&larr; Retour à la galerie d'œuvres</a>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
        <button type="button" class="btn btn--outline btn--small" id="openWorkTechRiderBtn">Fiche technique diffuseur (#10)</button>
        <button type="button" class="btn btn--outline btn--small" id="openWorkCartelQrBtn">Cartel &amp; Code QR (#3)</button>
        <button type="button" class="btn btn--outline btn--small" id="shareWorkBtn">Partager</button>
        <a href="#/oeuvres/${prevWork.id}" class="btn btn--outline btn--small">&larr; Précédente</a>
        <a href="#/oeuvres/${nextWork.id}" class="btn btn--outline btn--small">Suivante &rarr;</a>
      </div>
    </div>

    <div class="subpage-sheet">
      <div class="artwork-modal-grid">
        <div class="artwork-modal__stage">
          ${mainImg ? `<img src="${mainImg}" alt="${work.title}" id="mainStageImg" />` : ''}
          ${thumbsHtml}
          ${quoteHtml}
        </div>
        <div class="artwork-modal__cartel">
          <span style="font-size:0.7rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted);">
            ${work.discipline} &bull; ${work.formatType}
          </span>
          <h1 style="font-family:var(--font-heading); font-size:1.45rem; font-weight:500; margin:0.3rem 0;">
            ${work.title} (${work.year})
          </h1>
          <p style="font-size:0.92rem; color:var(--text-secondary); margin-bottom:0.5rem;">
            Par <a href="#/artistes/${artist.id}" style="color:var(--text-primary); font-weight:600; text-decoration:underline;">${artist.name}</a> — ${artist.roleTitle}
          </p>
          ${coArtistsHtml}

          <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.15rem;">
            ${sourceBtnHtml}
            ${artistLinksHtml}
          </div>

          <div style="border-top:1px solid var(--border-color); border-bottom:1px solid var(--border-color); padding:0.85rem 0; margin-bottom:1.15rem; font-size:0.83rem;">
            <div><strong>Médium / Format :</strong> ${work.medium}</div>
            <div style="margin-top:0.25rem;"><strong>Statut :</strong> ${work.availability}</div>
            <div style="margin-top:0.25rem;"><strong>Référence :</strong> ${work.priceIndication}</div>
          </div>

          <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.65; margin-bottom:1.25rem;">
            ${work.description}
          </p>

          <!-- #10 : Fiche technique (« Technical Rider » & Conditions d'exposition) -->
          <div class="tech-rider-box">
            <div class="tech-rider-box__header">
              <span style="font-size:0.72rem; text-transform:uppercase; letter-spacing:0.07em; font-weight:600;">
                Fiche technique &amp; Conditions de diffusion (#10)
              </span>
              <button type="button" class="btn btn--outline btn--small" id="inlinePrintTechRiderBtn">Imprimer Fiche PDF</button>
            </div>
            <div class="tech-rider-grid">
              <div class="tech-rider-item">
                <strong>Espace requis / Accrochage</strong>
                <span>${rider.spaceRequired}</span>
              </div>
              <div class="tech-rider-item">
                <strong>Éclairage, Son &amp; Équipement</strong>
                <span>${rider.lightingAudio}</span>
              </div>
              <div class="tech-rider-item">
                <strong>Durée &amp; Temps de montage</strong>
                <span>${rider.setupDuration}</span>
              </div>
              <div class="tech-rider-item">
                <strong>Transport &amp; Assurance</strong>
                <span>${rider.insuranceTransport}</span>
              </div>
            </div>
          </div>

          <div style="background:var(--bg-page); border:1px solid var(--border-color); padding:1.15rem;">
            <h3 style="font-family:var(--font-heading); font-size:0.88rem; font-weight:500; margin-bottom:0.35rem;">
              Contacter directement ${artist.name}
            </h3>
            <form id="directContactForm">
              <div class="form-group">
                <input type="text" name="senderName" class="form-input" placeholder="Votre nom" required style="background:var(--bg-surface);" />
              </div>
              <div class="form-group">
                <input type="email" name="senderEmail" class="form-input" placeholder="Votre courriel" required style="background:var(--bg-surface);" />
              </div>
              <div class="form-group">
                <textarea name="body" class="form-textarea" required style="min-height:66px; background:var(--bg-surface);">Bonjour ${artist.name}, je souhaite communiquer avec vous au sujet de « ${work.title} » présenté sur le portail de La Cargaison.</textarea>
              </div>
              <button type="submit" class="btn" style="width:100%;">Envoyer à l'artiste</button>
            </form>
            <div id="contactSuccessMsg" style="display:none; font-size:0.82rem; padding-top:0.5rem;">
              Message enregistré dans la boîte de réception de <strong>${artist.name}</strong> (consultable dans <em>Mon atelier &gt; Messages reçus</em>).
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.querySelectorAll('[data-stage-img]').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const mainStage = document.getElementById('mainStageImg');
      if (mainStage) mainStage.src = thumb.dataset.stageImg;
      container.querySelectorAll('.stage-thumb').forEach((t) => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // #10 : Ouvrir la Fiche technique imprimable pour diffuseurs
  const openRiderHandler = () => openTechRiderModal(work, artist, coArtists, rider);
  document.getElementById('openWorkTechRiderBtn').addEventListener('click', openRiderHandler);
  document.getElementById('inlinePrintTechRiderBtn').addEventListener('click', openRiderHandler);

  // #3 : Cartel & Code QR imprimable
  document.getElementById('openWorkCartelQrBtn').addEventListener('click', () => {
    openCartelQrModal({
      kicker: work.discipline,
      title: `${work.title} (${work.year})`,
      subtitle: `${artist.name} — ${artist.roleTitle}`,
      details: work.medium,
      url: window.location.href
    });
  });

  document.getElementById('shareWorkBtn').addEventListener('click', (e) => {
    triggerShare(`${work.title} — ${artist.name} | La Cargaison`, window.location.href, e.target);
  });

  document.getElementById('directContactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    state.messages = state.messages || [];
    state.messages.unshift({
      id: 'msg-' + Date.now(),
      recipientId: artist.id,
      senderName: fd.get('senderName'),
      senderEmail: fd.get('senderEmail'),
      date: 'À l’instant',
      subject: `Œuvre : ${work.title}`,
      body: fd.get('body')
    });
    saveState();
    renderAll();
    e.target.style.display = 'none';
    document.getElementById('contactSuccessMsg').style.display = 'block';
  });
}

/* ==========================================================================
   SOUS-PAGE DÉDIÉE 2 : PORTFOLIO D'UN MEMBRE (#3 Cartel QR, #5 Co-créations, #9 Journal)
   ========================================================================== */
function openArtistModal(artistId) {
  navigateToRoute(`#/artistes/${artistId}`);
}

function renderArtisteSubpage(artistId) {
  const container = document.getElementById('artisteSubpageContainer');
  const idx = state.artists.findIndex((a) => a.id === artistId);
  const artist = state.artists[idx] || state.artists[0];
  const prevArtist = state.artists[(idx - 1 + state.artists.length) % state.artists.length];
  const nextArtist = state.artists[(idx + 1) % state.artists.length];

  const artistWorks = getWorksForArtist(artist.id);
  const journalEntries = (state.studioJournals && state.studioJournals[artist.id]) || [];

  const linksHtml = (artist.links || [])
    .map(
      (l) =>
        `<a href="${l.url}" target="_blank" rel="noopener" class="btn btn--small">Ouvrir sa page (${l.label}) &nearr;</a>`
    )
    .join('');

  const journalSectionHtml =
    journalEntries.length > 0
      ? `
      <div style="margin-bottom:2rem;">
        <h3 style="font-family:var(--font-heading); font-size:1.02rem; font-weight:500; margin-bottom:0.85rem; padding-bottom:0.5rem; border-bottom:1px solid var(--border-color);">
          Journal d'atelier &amp; recherches en cours (#9)
        </h3>
        ${journalEntries
          .map(
            (j) => `
          <div style="padding:0.75rem 1rem; background:var(--bg-page); border:1px solid var(--border-color); margin-bottom:0.5rem; font-size:0.86rem;">
            <strong>${j.date}</strong> — ${j.text}
          </div>
        `
          )
          .join('')}
      </div>
    `
      : '';

  const worksHtml =
    artistWorks.length === 0
      ? `<p style="color:var(--text-muted); font-size:0.86rem;">Consultez directement la page officielle de <strong>${artist.name}</strong> via le bouton ci-dessus, ou cliquez sur « Simuler son atelier » pour publier une œuvre sous son profil.</p>`
      : `<div class="gallery-grid" style="grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap:1.25rem;">
          ${artistWorks
            .map((w) => {
              const cover = w.images && w.images[0] ? w.images[0] : '';
              const isCo = w.artistId !== artist.id;
              return `
                <article class="artwork-card" data-subpage-open-work="${w.id}">
                  <div class="artwork-card__media">
                    ${
                      cover
                        ? `<img src="${cover}" alt="${w.title}" />`
                        : `<div class="artwork-card__text-preview"><p>${w.textExcerpt || w.description}</p></div>`
                    }
                    ${isCo ? `<span class="artwork-card__multi-badge">Maillage / Co-création</span>` : ''}
                  </div>
                  <div class="artwork-card__body" style="padding:1rem;">
                    <h4 class="artwork-card__title" style="font-size:0.95rem;">${w.title} (${w.year})</h4>
                    <p style="font-size:0.76rem; color:var(--text-muted);">${w.medium}</p>
                  </div>
                </article>
              `;
            })
            .join('')}
        </div>`;

  container.innerHTML = `
    <div class="subpage-top-nav">
      <a href="#/artistes" class="btn btn--outline btn--small">&larr; Retour au répertoire (${state.artists.length} membres)</a>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
        <button type="button" class="btn btn--outline btn--small" id="openArtistCartelQrBtn">Cartel &amp; Code QR (#3)</button>
        <button type="button" class="btn btn--outline btn--small" id="shareArtistBtn">Partager ce profil</button>
        <a href="#/artistes/${prevArtist.id}" class="btn btn--outline btn--small">&larr; ${prevArtist.name}</a>
        <a href="#/artistes/${nextArtist.id}" class="btn btn--outline btn--small">${nextArtist.name} &rarr;</a>
      </div>
    </div>

    <div class="subpage-sheet">
      <div class="artist-modal-header">
        <img src="${artist.photo}" alt="${artist.name}" class="artist-modal-header__photo" />
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
            <span style="font-size:0.7rem; text-transform:uppercase; letter-spacing:0.09em; color:var(--text-muted);">
              Membre n° ${idx + 1} sur ${state.artists.length} — ${artist.disciplineGroup}
            </span>
            <span style="font-size:0.74rem; padding:0.15rem 0.55rem; border:1px solid var(--border-color);">
              <span class="status-dot"></span>${artist.availabilityStatus || 'Membre actif'}
            </span>
          </div>
          <h1 style="font-family:var(--font-heading); font-size:1.75rem; font-weight:600; margin:0.2rem 0;">
            ${artist.name}
          </h1>
          <p style="font-size:0.86rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-secondary); margin-bottom:0.95rem;">
            ${artist.roleTitle}
          </p>
          <p style="font-size:0.92rem; color:var(--text-primary); line-height:1.65; margin-bottom:1.1rem;">
            ${artist.bio}
          </p>
          <div style="background:var(--bg-page); border:1px solid var(--border-color); padding:0.85rem 1rem; font-size:0.82rem;">
            <div><strong>Référence / Page liée sur lacargaison.org :</strong> ${artist.personalNews}</div>
          </div>
          <div class="external-links-row">
            ${linksHtml}
            <button type="button" class="btn btn--outline btn--small" id="artistSubpageContactBtn">Écrire à ${artist.name}</button>
            <button type="button" class="btn btn--outline btn--small" id="artistSubpageImpersonateBtn">Simuler son atelier</button>
          </div>
        </div>
      </div>
      <div class="artist-modal-body">
        ${journalSectionHtml}
        <h3 style="font-family:var(--font-heading); font-size:1.02rem; font-weight:500; margin-bottom:1.15rem; padding-bottom:0.55rem; border-bottom:1px solid var(--border-color);">
          Œuvres et créations rattachées à ${artist.name} (${artistWorks.length})
        </h3>
        ${worksHtml}
      </div>
    </div>
  `;

  document.getElementById('openArtistCartelQrBtn').addEventListener('click', () => {
    openCartelQrModal({
      kicker: `Membre — ${artist.disciplineGroup}`,
      title: artist.name,
      subtitle: artist.roleTitle,
      details: 'Portfolio et œuvres sur le portail de La Cargaison | collectif créatif',
      url: window.location.href
    });
  });

  document.getElementById('shareArtistBtn').addEventListener('click', (e) => {
    triggerShare(`${artist.name} (${artist.roleTitle}) | La Cargaison`, window.location.href, e.target);
  });

  document.getElementById('artistSubpageContactBtn').addEventListener('click', () => {
    openPrivateMsgModal(artist.id, `Prise de contact via le répertoire de La Cargaison`);
  });

  document.getElementById('artistSubpageImpersonateBtn').addEventListener('click', () => {
    state.currentMemberId = artist.id;
    if (state.currentRole === 'public') state.currentRole = 'member';
    saveState();
    renderAll();
    navigateToRoute('#/atelier/portfolio');
  });

  container.querySelectorAll('[data-subpage-open-work]').forEach((card) => {
    card.addEventListener('click', () => {
      navigateToRoute(`#/oeuvres/${card.dataset.subpageOpenWork}`);
    });
  });
}

/* ==========================================================================
   SOUS-PAGE DÉDIÉE 3 : ESPACE GROUPE DE TRAVAIL / COMITÉ ARTISTIQUE (#/projets/[id]) (#13)
   ========================================================================== */
function renderProjetSubpage(projetId) {
  const container = document.getElementById('projetSubpageContainer');
  if (!container) return;

  const me = getArtistById(state.currentMemberId);

  // Chercher dans chantiers ou convertir dynamiquement un post du babillard en groupe de travail
  let group = (state.chantiers || []).find((c) => c.id === projetId);
  if (!group) {
    const post = (state.maillagePosts || []).find((p) => p.id === projetId);
    if (post) {
      group = {
        id: post.id,
        title: post.title,
        members: post.interestedMemberIds && post.interestedMemberIds.length > 0 ? post.interestedMemberIds : [post.authorId],
        disciplines: post.soughtDiscipline,
        stage: post.category,
        target: post.body,
        milestones: [
          { id: 'mp-1', title: 'Constitution de l’équipe interdisciplinaire', due: 'En cours', owner: getArtistById(post.authorId).name, done: true },
          { id: 'mp-2', title: 'Première rencontre de travail en atelier / nef', due: 'À planifier', owner: 'Membres embarqués', done: false }
        ],
        discussions: (post.replies || []).map((r) => ({
          authorName: r.authorName,
          date: r.date,
          text: r.text
        }))
      };
      state.chantiers.push(group);
      saveState();
    } else {
      group = state.chantiers[0];
    }
  }

  const isMemberInGroup = (group.members || []).includes(me.id);
  const memberProfiles = (group.members || []).map((id) => getArtistById(id));
  const milestones = group.milestones || [];
  const discussions = group.discussions || [];

  const membersHtml = memberProfiles
    .map(
      (m) => `
      <a href="#/artistes/${m.id}" style="display:flex; align-items:center; gap:0.75rem; padding:0.7rem 0.9rem; border:1px solid var(--border-color); background:var(--bg-page); text-decoration:none; color:var(--text-primary);">
        <img src="${m.photo}" alt="${m.name}" style="width:44px; height:44px; object-fit:cover; filter:grayscale(100%); border:1px solid var(--border-color);" />
        <div>
          <div style="font-family:var(--font-heading); font-weight:600; font-size:0.88rem;">${m.name}</div>
          <div style="font-size:0.75rem; color:var(--text-secondary);">${m.roleTitle}</div>
        </div>
      </a>
    `
    )
    .join('');

  const milestonesHtml =
    milestones.length === 0
      ? `<p style="font-size:0.84rem; color:var(--text-muted);">Aucun jalon inscrit pour le moment.</p>`
      : milestones
          .map(
            (ms) => `
          <div class="milestone-row ${ms.done ? 'is-done' : ''}">
            <label style="display:flex; align-items:center; gap:0.65rem; cursor:pointer; flex:1;">
              <input type="checkbox" ${ms.done ? 'checked' : ''} data-toggle-milestone="${ms.id}" />
              <span class="milestone-title"><strong>${ms.title}</strong></span>
            </label>
            <div style="font-size:0.76rem; color:var(--text-muted); text-align:right;">
              <span>Resp. : ${ms.owner}</span> &bull; <strong>${ms.due}</strong>
            </div>
          </div>
        `
          )
          .join('');

  const discussionsHtml =
    discussions.length === 0
      ? `<p style="font-size:0.84rem; color:var(--text-muted); margin-bottom:0.85rem;">Aucune note de comité publiée.</p>`
      : discussions
          .map(
            (d) => `
          <div style="padding:0.8rem 1rem; border:1px solid var(--border-color); background:var(--bg-page); margin-bottom:0.6rem; font-size:0.85rem;">
            <div style="display:flex; justify-content:space-between; margin-bottom:0.25rem;">
              <strong>${d.authorName}</strong>
              <span style="font-size:0.74rem; color:var(--text-muted);">${d.date}</span>
            </div>
            <p style="color:var(--text-secondary);">${d.text}</p>
          </div>
        `
          )
          .join('');

  container.innerHTML = `
    <div class="subpage-top-nav">
      <a href="#/maillage/chantiers" class="btn btn--outline btn--small">&larr; Retour aux groupes de travail</a>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
        <button type="button" class="btn ${isMemberInGroup ? 'btn--outline' : ''} btn--small" id="toggleJoinGroupBtn">
          ${isMemberInGroup ? `Membre du groupe (${me.name}) — Quitter` : `Rejoindre ce groupe de travail (${me.name})`}
        </button>
        <button type="button" class="btn btn--outline btn--small" id="shareProjetBtn">Partager le lien du groupe</button>
      </div>
    </div>

    <div class="subpage-sheet" style="padding:2.25rem;">
      <div style="border-bottom:1px solid var(--border-color); padding-bottom:1.25rem; margin-bottom:1.75rem;">
        <span style="font-size:0.72rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted);">
          Espace Groupe de travail / Comité artistique (#13) &bull; ${group.disciplines}
        </span>
        <h1 style="font-family:var(--font-heading); font-size:1.6rem; font-weight:600; margin:0.3rem 0 0.5rem;">
          ${group.title}
        </h1>
        <p style="font-size:0.9rem; color:var(--text-secondary);">
          <strong>État d'avancement :</strong> ${group.stage} &bull; <strong>Objectif / Cible :</strong> ${group.target}
        </p>
      </div>

      <div class="atelier-grid">
        <div>
          <div class="panel-card">
            <h3 class="panel-card__title">Membres embarqués dans ce comité (${memberProfiles.length})</h3>
            <div style="display:grid; grid-template-columns:1fr; gap:0.6rem; margin-bottom:1rem;">
              ${membersHtml}
            </div>
          </div>

          <div class="panel-card">
            <h3 class="panel-card__title">Fil de discussion &amp; Notes de travail du groupe</h3>
            <div style="margin-bottom:1rem;">${discussionsHtml}</div>
            <form id="addGroupDiscussionForm">
              <div class="form-group">
                <textarea name="text" class="form-textarea" placeholder="Ajouter une note de travail ou un compte rendu pour l'équipe..." required style="min-height:70px;"></textarea>
              </div>
              <button type="submit" class="btn btn--small">Publier au journal du groupe (${me.name})</button>
            </form>
          </div>
        </div>

        <div class="panel-card">
          <h3 class="panel-card__title">Échéancier partagé &amp; Jalons de production (#13)</h3>
          <div style="margin-bottom:1.25rem;">${milestonesHtml}</div>
          <form id="addMilestoneForm" style="padding-top:1rem; border-top:1px solid var(--border-color);">
            <div style="font-size:0.74rem; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-muted); margin-bottom:0.65rem;">
              Ajouter une étape à l'échéancier
            </div>
            <div class="form-group">
              <label class="form-label">Intitulé de l'étape / livrable</label>
              <input type="text" name="title" class="form-input" placeholder="Ex. Répétition technique en nef / Dépôt CALQ..." required />
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Responsable</label>
                <input type="text" name="owner" class="form-input" value="${me.name}" required />
              </div>
              <div class="form-group">
                <label class="form-label">Échéance</label>
                <input type="text" name="due" class="form-input" placeholder="Ex. 15 novembre 2026" required />
              </div>
            </div>
            <button type="submit" class="btn btn--outline" style="width:100%;">Ajouter ce jalon</button>
          </form>
        </div>
      </div>
    </div>
  `;

  document.getElementById('toggleJoinGroupBtn').addEventListener('click', () => {
    group.members = group.members || [];
    const i = group.members.indexOf(me.id);
    if (i >= 0 && group.members.length > 1) {
      group.members.splice(i, 1);
    } else if (i < 0) {
      group.members.push(me.id);
    }
    saveState();
    renderProjetSubpage(projetId);
  });

  document.getElementById('shareProjetBtn').addEventListener('click', (e) => {
    triggerShare(`Groupe de travail : ${group.title} | La Cargaison`, window.location.href, e.target);
  });

  container.querySelectorAll('[data-toggle-milestone]').forEach((chk) => {
    chk.addEventListener('change', () => {
      const m = (group.milestones || []).find((x) => x.id === chk.dataset.toggleMilestone);
      if (m) {
        m.done = chk.checked;
        saveState();
        renderProjetSubpage(projetId);
      }
    });
  });

  document.getElementById('addMilestoneForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    group.milestones = group.milestones || [];
    group.milestones.push({
      id: 'ms-' + Date.now(),
      title: fd.get('title'),
      owner: fd.get('owner'),
      due: fd.get('due'),
      done: false
    });
    saveState();
    renderProjetSubpage(projetId);
  });

  document.getElementById('addGroupDiscussionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    group.discussions = group.discussions || [];
    group.discussions.push({
      authorName: `${me.name} (${me.roleTitle})`,
      date: 'À l’instant',
      text: fd.get('text')
    });
    saveState();
    renderProjetSubpage(projetId);
  });
}

/* ==========================================================================
   OUTILS TRANSVERSAUX : FICHE TECHNIQUE (#10), ORDRE DU JOUR (#16), CARTEL QR (#3), LETTRE C.A.
   ========================================================================== */
function openTechRiderModal(work, artist, coArtists, rider) {
  const qrImgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(window.location.href)}`;
  const body = document.getElementById('documentModalBody');
  const coNames = coArtists.length > 0 ? coArtists.map((c) => `${c.name} (${c.roleTitle})`).join(', ') : 'Création individuelle';

  body.innerHTML = `
    <div class="no-print" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem;">
      <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted);">
        Fiche technique officielle (« Technical Rider » — Idée #10)
      </span>
      <button type="button" class="btn btn--small" onclick="window.print()">Imprimer / Exporter en PDF</button>
    </div>
    <div class="official-letter-sheet" style="font-family:var(--font-body);">
      <div style="border-bottom:1px solid var(--border-color); padding-bottom:1rem; margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <strong style="font-family:var(--font-heading); font-size:1.05rem;">LA CARGAISON | COLLECTIF CRÉATIF — FICHE TECHNIQUE DIFFUSEUR</strong><br>
          <span style="font-size:0.8rem; color:var(--text-secondary);">215, rue Longueuil, Saint-Jean-sur-Richelieu (Québec) J3B 6P6 &bull; lacargaison.org</span>
        </div>
        <img src="${qrImgUrl}" alt="QR Œuvre" style="width:74px; height:74px; border:1px solid var(--border-color); padding:0.2rem; background:#fff;" />
      </div>

      <h2 style="font-family:var(--font-heading); font-size:1.35rem; font-weight:600; margin-bottom:0.25rem;">
        ${work.title} (${work.year})
      </h2>
      <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:1.25rem;">
        Artiste porteur : <strong>${artist.name}</strong> (${artist.roleTitle}) &bull; Discipline : ${work.discipline}<br>
        Co-créateurs membres : ${coNames}
      </p>

      <table class="ca-table" style="margin-bottom:1.5rem;">
        <tbody>
          <tr>
            <th style="width:32%;">Médium / Format</th>
            <td>${work.medium} (${work.formatType})</td>
          </tr>
          <tr>
            <th>Statut de diffusion</th>
            <td>${work.availability} — ${work.priceIndication}</td>
          </tr>
          <tr>
            <th>1. Espace requis &amp; Accrochage</th>
            <td>${rider.spaceRequired}</td>
          </tr>
          <tr>
            <th>2. Éclairage, Sonorisation &amp; Multimédia</th>
            <td>${rider.lightingAudio}</td>
          </tr>
          <tr>
            <th>3. Durée, Montage &amp; Démontage</th>
            <td>${rider.setupDuration}</td>
          </tr>
          <tr>
            <th>4. Transport &amp; Conditions d'assurance</th>
            <td>${rider.insuranceTransport}</td>
          </tr>
        </tbody>
      </table>

      <div style="font-size:0.86rem; color:var(--text-secondary); margin-bottom:1.5rem;">
        <strong>Synopsis / Description :</strong> ${work.description}
      </div>

      <div style="font-size:0.8rem; color:var(--text-muted); border-top:1px solid var(--border-color); padding-top:0.85rem;">
        Document technique généré depuis le portail de <strong>La Cargaison | collectif créatif</strong> — Permalien : <code>${window.location.href}</code>
      </div>
    </div>
  `;

  document.getElementById('documentModal').classList.add('open');
}

function openAgendaConvocationModal({ meetingType, meetingDate, meetingLocation, customVaria }) {
  const body = document.getElementById('documentModalBody');
  const today = new Date().toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' });
  const me = getArtistById(state.currentMemberId);

  const env = Number(state.budgetData?.annualEnvelope) || 145000;
  const committed = (state.budgetData?.allocations || [])
    .filter((a) => a.status === 'Adopté / Engagé')
    .reduce((s, a) => s + (Number(a.amount) || 0), 0);
  const avail = Math.max(0, env - committed);

  const lettersList = state.supportLetters
    .map((l) => `<li><strong>${l.projectTitle}</strong> — Demandeur : ${getArtistById(l.artistId).name} (${l.grantAgency}) — Statut : ${l.status}</li>`)
    .join('');

  const projectsList = state.projectSubmissions
    .map((p) => {
      const tot = Number(p.scoreMerit) + Number(p.scoreImpact) + Number(p.scoreFeasibility);
      return `<li><strong>${p.title}</strong> (${getArtistById(p.artistId).name}) — Pointage grille 50/30/20 : <strong>${tot} / 100</strong></li>`;
    })
    .join('');

  const appsList =
    (state.membershipApplications || []).length === 0
      ? `<li>Aucune nouvelle demande d'adhésion en attente de ratification.</li>`
      : state.membershipApplications
          .map((a) => `<li><strong>${a.name}</strong> — ${a.category} (${a.roleTitle}) — Statut : ${a.status}</li>`)
          .join('');

  body.innerHTML = `
    <div class="no-print" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem;">
      <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted);">
        Avis de convocation &amp; Ordre du jour officiel (#16)
      </span>
      <button type="button" class="btn btn--small" onclick="window.print()">Imprimer / Exporter en PDF</button>
    </div>
    <div class="official-letter-sheet">
      <div style="border-bottom:1px solid var(--border-color); padding-bottom:1rem; margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <strong style="font-family:var(--font-heading); font-size:1.05rem;">LA CARGAISON | COLLECTIF CRÉATIF</strong><br>
          <span style="font-size:0.8rem; color:var(--text-secondary);">215, rue Longueuil, Saint-Jean-sur-Richelieu (Québec) J3B 6P6</span>
        </div>
        <div style="font-size:0.82rem; color:var(--text-secondary);">Émis le ${today}</div>
      </div>

      <h2 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:600; margin-bottom:0.35rem;">
        AVIS DE CONVOCATION &amp; PROJET D'ORDRE DU JOUR
      </h2>
      <p style="font-size:0.9rem; margin-bottom:1.25rem;">
        <strong>Instances :</strong> ${meetingType}<br>
        <strong>Date et heure :</strong> ${meetingDate}<br>
        <strong>Lieu :</strong> ${meetingLocation}
      </p>

      <ol style="margin-left:1.25rem; line-height:1.85; font-size:0.9rem;">
        <li><strong>Ouverture de la séance et vérification du quorum</strong></li>
        <li><strong>Lecture et adoption de l'ordre du jour</strong></li>
        <li><strong>Adoption du procès-verbal de la séance précédente et suivis</strong></li>
        <li>
          <strong>Trésorerie et suivi budgétaire (#17) :</strong>
          <ul style="margin-left:1.1rem; font-size:0.85rem; color:var(--text-secondary);">
            <li>Enveloppe annuelle : ${env.toLocaleString('fr-CA')} $ &bull; Engagé : ${committed.toLocaleString('fr-CA')} $ &bull; Solde disponible : ${avail.toLocaleString('fr-CA')} $</li>
          </ul>
        </li>
        <li>
          <strong>Évaluation des projets de création déposés (Grille 50 / 30 / 20) :</strong>
          <ul style="margin-left:1.1rem; font-size:0.85rem; color:var(--text-secondary);">${projectsList}</ul>
        </li>
        <li>
          <strong>Ratification des demandes de lettres d'appui officielles (CALQ / CAC / MRC) :</strong>
          <ul style="margin-left:1.1rem; font-size:0.85rem; color:var(--text-secondary);">${lettersList}</ul>
        </li>
        <li>
          <strong>Admission de nouveaux membres (Actifs, Associés, Observateurs) :</strong>
          <ul style="margin-left:1.1rem; font-size:0.85rem; color:var(--text-secondary);">${appsList}</ul>
        </li>
        <li>
          <strong>Vie associative, mutualisation (#11-#12) et lieux de diffusion partenaires (#15)</strong>
        </li>
        <li>
          <strong>Varia :</strong> ${customVaria ? customVaria : 'Points divers ajoutés en début de séance'}
        </li>
        <li><strong>Date de la prochaine rencontre et levée de l'assemblée</strong></li>
      </ol>

      <div style="margin-top:2rem; padding-top:1rem; border-top:1px solid var(--border-color); font-size:0.85rem;">
        Préparé pour le Conseil d'administration par <strong>${me.name}</strong> — La Cargaison | collectif créatif (99 membres répertoriés).
      </div>
    </div>
  `;

  document.getElementById('documentModal').classList.add('open');
}

function openCartelQrModal({ kicker, title, subtitle, details, url }) {
  const qrImgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(url)}`;
  const body = document.getElementById('documentModalBody');

  body.innerHTML = `
    <div class="no-print" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem;">
      <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted);">
        Étiquette muséale &amp; Code QR d'exposition (#3)
      </span>
      <button type="button" class="btn btn--small" onclick="window.print()">Imprimer ce cartel</button>
    </div>
    <div class="cartel-print-card">
      <div>
        <div style="font-size:0.7rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--text-muted); margin-bottom:0.35rem;">
          La Cargaison | collectif créatif &bull; ${kicker}
        </div>
        <h2 style="font-family:var(--font-heading); font-size:1.5rem; font-weight:600; margin-bottom:0.25rem;">
          ${title}
        </h2>
        <div style="font-size:0.95rem; font-weight:500; margin-bottom:0.65rem;">
          ${subtitle}
        </div>
        <div style="font-size:0.84rem; color:var(--text-secondary);">
          ${details}
        </div>
      </div>
      <div style="text-align:center; flex-shrink:0;">
        <img src="${qrImgUrl}" alt="Code QR" style="width:130px; height:130px; border:1px solid var(--border-color); padding:0.35rem; background:#fff;" />
        <div style="font-size:0.65rem; color:var(--text-muted); margin-top:0.25rem;">Scanner pour voir en ligne</div>
      </div>
    </div>
  `;

  document.getElementById('documentModal').classList.add('open');
}

function openSupportLetterDocModal(letterId) {
  const letter = state.supportLetters.find((l) => l.id === letterId) || state.supportLetters[0];
  const artist = getArtistById(letter.artistId);
  const today = new Date().toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' });
  const body = document.getElementById('documentModalBody');

  body.innerHTML = `
    <div class="no-print" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem;">
      <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted);">
        Lettre d'appui officielle du C.A. (#16)
      </span>
      <button type="button" class="btn btn--small" onclick="window.print()">Imprimer / Exporter en PDF</button>
    </div>
    <div class="official-letter-sheet">
      <div style="border-bottom:1px solid var(--border-color); padding-bottom:1rem; margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <strong style="font-family:var(--font-heading); font-size:1.05rem;">LA CARGAISON | COLLECTIF CRÉATIF</strong><br>
          <span style="font-size:0.8rem; color:var(--text-secondary);">215, rue Longueuil, Saint-Jean-sur-Richelieu (Québec) J3B 6P6</span>
        </div>
        <div style="font-size:0.82rem; color:var(--text-secondary);">Le ${today}</div>
      </div>

      <p style="margin-bottom:1rem;"><strong>À l'attention du jury d'évaluation :</strong> ${letter.grantAgency}</p>
      <p style="margin-bottom:1.25rem;"><strong>Objet : Lettre d'appui officielle — Projet « ${letter.projectTitle} » de ${artist.name}</strong></p>

      <p style="margin-bottom:1rem;">Madame, Monsieur,</p>
      <p style="margin-bottom:1rem;">
        Au nom du Conseil d'administration de l'organisme sans but lucratif <strong>La Cargaison | collectif créatif</strong>, nous souhaitons par la présente exprimer notre appui enthousiaste à la démarche et au dépôt du projet <em>« ${letter.projectTitle} »</em> présenté par notre membre actif <strong>${artist.name}</strong> (${artist.roleTitle}).
      </p>
      <p style="margin-bottom:1rem;">
        ${letter.summary}
      </p>
      <p style="margin-bottom:1.75rem;">
        La pratique professionnelle de ${artist.name} contribue directement à la vitalité artistique de la Montérégie et s'inscrit pleinement dans notre mission de rayonnement et de maillage interdisciplinaire.
      </p>

      <div style="margin-top:2rem;">
        <strong>Le Conseil d'administration</strong><br>
        La Cargaison | collectif créatif — <code>lacargaison.org</code>
      </div>
    </div>
  `;

  document.getElementById('documentModal').classList.add('open');
}

function triggerShare(title, url, btnEl) {
  if (navigator.share) {
    navigator.share({ title, url }).catch(() => {});
  } else {
    navigator.clipboard.writeText(`${title} — ${url}`).then(() => {
      const orig = btnEl.textContent;
      btnEl.textContent = 'Lien de partage copié !';
      setTimeout(() => {
        btnEl.textContent = orig;
      }, 1800);
    });
  }
}

function openPrivateMsgModal(targetArtistId, subjectText) {
  const target = getArtistById(targetArtistId);
  const me = getArtistById(state.currentMemberId);
  const body = document.getElementById('privateMsgModalBody');

  body.innerHTML = `
    <span style="font-size:0.7rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted);">
      Messagerie directe entre artistes (#12 &amp; #13)
    </span>
    <h2 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:500; margin:0.3rem 0 1rem;">
      Écrire en privé à ${target.name}
    </h2>
    <form id="sendPrivateMsgForm">
      <div class="form-group">
        <label class="form-label">Objet</label>
        <input type="text" name="subject" class="form-input" value="${subjectText || 'Collaboration / Maillage'}" required />
      </div>
      <div class="form-group">
        <label class="form-label">Votre message (${state.currentRole === 'public' ? 'Visiteur' : me.name})</label>
        <textarea name="body" class="form-textarea" required placeholder="Votre message sera transmis dans la boîte de réception de ${target.name}..."></textarea>
      </div>
      <button type="submit" class="btn" style="width:100%;">Envoyer le message privé</button>
    </form>
    <div id="privateMsgSuccess" style="display:none; padding:1rem; background:var(--bg-page); border:1px solid var(--border-color); font-size:0.86rem; margin-top:1rem;">
      Message transmis à <strong>${target.name}</strong> (consultable dans son atelier sous l'onglet <em>Messages reçus</em>).
    </div>
  `;

  document.getElementById('sendPrivateMsgForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    state.messages = state.messages || [];
    state.messages.unshift({
      id: 'msg-' + Date.now(),
      recipientId: target.id,
      senderName: state.currentRole === 'public' ? 'Visiteur du portail' : `${me.name} (${me.roleTitle})`,
      senderEmail: '',
      date: 'À l’instant',
      subject: fd.get('subject'),
      body: fd.get('body')
    });
    saveState();
    renderAll();
    e.target.style.display = 'none';
    document.getElementById('privateMsgSuccess').style.display = 'block';
  });

  document.getElementById('privateMsgModal').classList.add('open');
}
