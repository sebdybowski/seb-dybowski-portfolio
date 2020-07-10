export const NAVIGATION_LINKS = [
  { ORDER: 0, PATH: '/#welcome', LABEL: 'Welcome' },
  { ORDER: 1, PATH: '/#skills', LABEL: 'Skills' },
  { ORDER: 1, PATH: '/portfolio', LABEL: 'Portfolio' },
  { ORDER: 2, PATH: '/#contact', LABEL: 'Contact' },
].sort((LINK1, LINK2) => LINK1.ORDER - LINK2.ORDER);
