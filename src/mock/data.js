import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Plabon - The Web Nerd',
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Plabon Chowdhury',
  subtitle: 'Front End Developer',
  cta: 'Resume',
};

// ABOUT DATA
export const aboutData = {
  img: 'dp.jpg',
  paragraphOne:
    "I'm a Front End Developer with reasonable knowledge of Back End. I can develope responsive , user interactive site with pixel perfect coding.",
  paragraphTwo:
    "I'm Also a student of Bangladesh University of Engineering and Technology (BUET). Currently doing B.Sc. in Water Resources Engineering.",
  resume: 'https://www.linkedin.com/in/plabon-chowdhury-3b17391b2/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: 'Shopify',
    info:
      'A React-based full-stack site of an online Shop where people can order various types of food item,glossaries etc',
    info2: [
      'React.js',
      'Javascript',
      'ES6',
      'HTML',
      'CSS',
      'Bootstrap',
      'React Router',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
      'Heroku',
    ],
    url: 'https://shopify-a3e90.web.app/',
    repo: 'https://github.com/Porgramming-Hero-web-course/full-stack-client-Plabss', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'Better Ride',
    info:
      'React-based single page application for online ride booking.',
    info2: [
      'React.js',
      'Javascript',
      'ES6',
      'HTML',
      'CSS',
      'Bootstrap',
      'React Router',
      'Firebase'
    ],
    url: 'https://better-ride-1cac5.web.app/',
    repo: 'https://github.com/Porgramming-Hero-web-course/react-auth-Plabss', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'Fixoria',
    info: " A React-based full-stack site of an online computer servicing shop where people can repair or fix problems of their computer.",
    info2: [
      'React.js',
      'Javascript',
      'ES6',
      'HTML',
      'CSS',
      'Bootstrap',
      'React Router',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
      'Heroku',
    ],
    url: 'https://fixoria-ae2f7.web.app/',
    repo: 'https://github.com/Porgramming-Hero-web-course/complete-website-client-Plabss', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel Free To Contact Me Anytime',
  btn: 'Get In Touch',
  email: 'plabonchowdhury9@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      iconName: 'facebook',
      url: 'https://www.facebook.com/plabonchowdhury1716023/',
    },
    {
      id: nanoid(),
      iconName: 'linkedin',
      url: 'https://www.linkedin.com/in/plabon-chowdhury-3b17391b2/',
    },
    {
      id: nanoid(),
      iconName: 'github',
      url: 'https://github.com/Plabss',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
