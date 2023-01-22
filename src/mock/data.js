import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'swing: wtf??', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'wtf is this',
  name: 'west coast swing',
  subtitle: 'everyone is talking about?',
  cta: 'I wanna know!',
};

// ABOUT DATA
export const aboutData = {
  img: 'dancing1.jpg',
  paragraphOne:
    "West coast swing (or sometimes 'modern swing' or 'street swing') is a modern evolution of traditional swing. It's danced to a huge variety of music, from modern top 40, to acoustic covers of classic songs, and from traditional blues music to rap and r&b.",
  paragraphTwo:
    "One person leads and one person follows, but there's no specific gender association with those roles, and a lot of folks dance both—sometimes even switching mid-dance.",
  paragraphThree:
    "It's a super chill dance, and a great way to connect with the music, the people, and the community.",
  resume: 'https://en.wikipedia.org/wiki/West_Coast_Swing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'It looks like this!',
    info: "These two are pros, but they had never danced together before this and they didn't know what song would be played. Nothing was choreographed, they are just improvising.",
    info2: '',
    videoUrl: 'https://www.youtube-nocookie.com/embed/MfUIaK87zGQ',
    spotifyUrl: '',
    primaryButtonText: "That's awesome! I want to see more",
    primaryButtonUrl:
      'https://www.youtube.com/watch?v=m_U_ZaFZ7j4&list=PL0llAbI-VIWXWSeRgcSg4XtQBZrpSKNXd',
    secondaryButtonText: '',
    secondaryButtonUrl: '',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'And this!',
    info: 'Again—pros, totally improvised—this shows some of the range of music.',
    info2: '',
    videoUrl: 'https://www.youtube-nocookie.com/embed/CipGn5udW9M',
    spotifyUrl: '',
    primaryButtonText: 'What about regular people though?',
    primaryButtonUrl: 'https://www.youtube.com/channel/UCw-XfJlsPuQVj6wnsKfUJaA/videos',
    secondaryButtonText: '',
    secondaryButtonUrl: '',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'And sounds like this',
    info: "Like we said: huge range of music. Something for everyone. Find tunes you wouldn't normally find. Bangers. Slaps. 'The Groove-Os', as the kids say.",
    info2: '',
    videoUrl: '',
    spotifyUrl:
      'https://open.spotify.com/embed/playlist/0y2WB6UNe5MeERYSxWzvRi?utm_source=generator',
    primaryButtonText: '',
    primaryButtonUrl: '',
    secondaryButtonText: 'you convinced me—what now?',
    secondaryButtonUrl: 'contact',
  },
];

// CONTACT DATA
export const contactData = {
  cta: "What are you waiting for? Swing is awesome and it's totally free to get started (at least in Minnesota)!",
  btn: 'I wanna be awesome!',
  url: 'https://www.facebook.com/events/576352127314978/576352137314977',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'github',
    //   url: '',
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
