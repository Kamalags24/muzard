import { Album } from "./interfaces/album";
import { List } from "./interfaces/list";

export const ALBUMS: Album[] = [
    {
      id: '1',
      ref: 'Afro-hit',
      name: 'Sessime',
      title: 'Guigo Nouwe',
      description:
        'Voluptate mollit consectetur pariatur labore. Quis amet quis minim nulla voluptate amet nisi. Ut sint veniam magna aute velit minim laborum eiusmod mollit dolor laborum. Minim Lorem Lorem pariatur adipisicing laborum tempor consequat est officia proident. Qui consequat duis ipsum minim Lorem cillum in excepteur.\r\n',
      duration: 600,
      url: '../assets/img/Sessime.jpg',
      like: 'Much',
      tags: ['nisi', 'do', 'id', 'laborum', 'non', 'sint', 'cillum'],
      status: 'off',
    },
    {
      id: '2',
      ref: 'Afro-hit',
      name: 'Nikanor',
      title: 'Manvo Manvo',
      description:
        'Magna laborum quis qui deserunt id. Aute sint consequat aliquip minim duis tempor reprehenderit laborum pariatur ut anim culpa. Laboris sit ea cillum ex nostrud deserunt. Nulla deserunt exercitation non eu ipsum. Cillum ut irure et ea esse ea anim nostrud proident. Non incididunt ut velit pariatur. Occaecat qui fugiat cupidatat est pariatur irure sunt excepteur anim.\r\n',
      duration: 480,
      url: '../assets/img/Nikanor.jpeg',
      like: 'Much',
      status: 'off',
    },
    {
      id: '3',
      ref: 'Rock',
      name: 'Gnonnas Pedro',
      title: 'laboris nisi',
      description:
        'Exercitation sunt qui sint eiusmod velit est dolor duis commodo nulla cillum cupidatat dolor voluptate. Amet aute duis deserunt ad quis eiusmod est. In veniam veniam mollit velit qui amet quis. Et do sint ipsum nisi velit culpa laborum.\r\n',
      duration: 360,
      url: '../assets/img/gnonnas-pedro.jpg',
      tags: ['elit', 'eiusmod', 'qui', 'voluptate', 'ea', 'incididunt', 'amet'],
      status: 'off',
    },
    {
      id: '4',
      ref: 'Afro-hit',
      name: 'Angelique-KIDJO',
      title: "Toutes les filles a l'école",
      description:
        'Cillum proident commodo do non esse cillum incididunt officia qui occaecat. Excepteur id voluptate esse tempor aliqua voluptate in labore anim incididunt ea nostrud nisi. Proident adipisicing adipisicing enim adipisicing nisi elit irure.\r\n',
      duration: 840,
      url: '../assets/img/ANG2LIQUE-KIDJO.jpg',
      like: 'Rather',
      tags: ['laborum', 'elit', 'tempor', 'eu', 'laborum', 'mollit', 'aliqua'],
      status: 'off',
    },
    {
      id: '5',
      ref: 'Afro-pop',
      name: 'Burna Boy',
      title: 'Love Damimi',
      description:
        'Labore tempor laborum voluptate exercitation velit tempor magna ut pariatur sint ex. Est id magna mollit ipsum mollit minim officia. Enim aliquip eiusmod sunt incididunt aliquip occaecat eu. Eiusmod fugiat aliquip officia tempor esse ut et nulla. Commodo consectetur aliquip mollit laborum velit dolor quis nisi do. Consectetur voluptate quis nostrud deserunt incididunt ea in ad adipisicing ea laboris ullamco. Occaecat consectetur mollit deserunt excepteur enim consectetur dolor nostrud aute.\r\n',
      duration: 840,
      url: '../assets/img/burna-boy.jpg',
      like: 'Rather',
      status: 'off',
    },
    {
      id: '6',
      ref: 'RnB',
      name: 'Davido',
      title: 'Timeless',
      description:
        'Nostrud veniam dolor velit id occaecat cupidatat aliquip exercitation id aliqua nostrud. Ad mollit Lorem consectetur minim consequat est eiusmod deserunt pariatur est ullamco. Veniam anim veniam Lorem excepteur irure. Esse adipisicing nulla in incididunt. Consectetur fugiat exercitation aliquip excepteur ipsum ullamco ullamco magna commodo.\r\n',
      duration: 360,
      url: '../assets/img/davido.jpg',
      like: 'Much',
      tags: [
        'consectetur',
        'do',
        'commodo',
        'consequat',
        'pariatur',
        'irure',
        'fugiat',
      ],
      status: 'off',
    },
    {
      id: '7',
      ref: 'Afro-hit',
      name: 'Fanicko',
      title: 'Le feu',
      description:
        'Nostrud veniam dolor velit id occaecat cupidatat aliquip exercitation id aliqua nostrud. Ad mollit Lorem consectetur minim consequat est eiusmod deserunt pariatur est ullamco. Veniam anim veniam Lorem excepteur irure. Esse adipisicing nulla in incididunt. Consectetur fugiat exercitation aliquip excepteur ipsum ullamco ullamco magna commodo.\r\n',
      duration: 240,
      url: '../assets/img/fanicko-2-600x600.jpg',
      like: 'Much',
      tags: [
        'consectetur',
        'do',
        'commodo',
        'consequat',
        'pariatur',
        'irure',
        'fugiat',
      ],
      status: 'off',
    },
    {
      id: '8',
      ref: 'Afro-pop',
      name: 'Tems',
      title: 'Me&U',
      description:
        'Nostrud veniam dolor velit id occaecat cupidatat aliquip exercitation id aliqua nostrud. Ad mollit Lorem consectetur minim consequat est eiusmod deserunt pariatur est ullamco. Veniam anim veniam Lorem excepteur irure. Esse adipisicing nulla in incididunt. Consectetur fugiat exercitation aliquip excepteur ipsum ullamco ullamco magna commodo.\r\n',
      duration: 240,
      url: '../assets/img/Tems-2.jpg',
      like: 'Much',
      tags: [
        'consectetur',
        'do',
        'commodo',
        'consequat',
        'pariatur',
        'irure',
        'fugiat',
      ],
      status: 'off',
    },
    {
      id: '9',
      ref: 'Afro-hit',
      name: 'Vano Baby',
      title: 'Azeto-Gbede',
      description:
        'Nostrud veniam dolor velit id occaecat cupidatat aliquip exercitation id aliqua nostrud. Ad mollit Lorem consectetur minim consequat est eiusmod deserunt pariatur est ullamco. Veniam anim veniam Lorem excepteur irure. Esse adipisicing nulla in incididunt. Consectetur fugiat exercitation aliquip excepteur ipsum ullamco ullamco magna commodo.\r\n',
      duration: 240,
      url: '../assets/img/vano-baby-artiste-de-annee-benin-top-10.jpg',
      like: 'Much',
      tags: [
        'consectetur',
        'do',
        'commodo',
        'consequat',
        'pariatur',
        'irure',
        'fugiat',
      ],
      status: 'off',
    },
    // {
    //   id: '10',
    //   ref: 'Jazz',
    //   name: 'Harry Potter IV',
    //   title: 'Lorem Potter IV',
    //   description:
    //     'Nostrud veniam dolor velit id occaecat cupidatat aliquip exercitation id aliqua nostrud. Ad mollit Lorem consectetur minim consequat est eiusmod deserunt pariatur est ullamco. Veniam anim veniam Lorem excepteur irure. Esse adipisicing nulla in incididunt. Consectetur fugiat exercitation aliquip excepteur ipsum ullamco ullamco magna commodo.\r\n',
    //   duration: 240,
    //   url: 'http://placehold.it/32x32',
    //   like: 'Much',
    //   tags: [
    //     'consectetur',
    //     'do',
    //     'commodo',
    //     'consequat',
    //     'pariatur',
    //     'irure',
    //     'fugiat',
    //   ],
    //   status: 'off',
    // },
  ];
  
  export const ALBUM_LISTS: List[] = [
    {
      id: '1',
      list: ['ad', 'qui', 'deserunt', 'nulla', 'cupidatat'],
    },
    {
      id: '2',
      list: ['ipsum', 'nostrud', 'aliqua', 'sunt'],
    },
    {
      id: '3',
      list: [
        'et',
        'qui',
        'consectetur',
        'reprehenderit',
        'sunt',
        'Lorem',
        'laborum',
      ],
    },
    {
      id: '4',
      list: ['nulla', 'velit', 'do'],
    },
    {
      id: '5',
      list: [
        'exercitation',
        'magna',
        'deserunt',
        'fugiat',
        'eu',
        'irure',
        'dolore',
      ],
    },
    {
      id: '6',
      list: ['sint', 'minim', 'nisi', 'labore', 'consequat', 'duis', 'elit'],
    },
    {
      id: '7',
      list: ['in', 'nostrud', 'deserunt'],
    },
    {
      id: '8',
      list: ['in', 'nostrud'],
    },
  ];
  