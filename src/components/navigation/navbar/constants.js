export const NAVIGATION_LINKS = [
  { ORDER: 0, PATH: '/#welcome', LABEL: 'welcome' },
  { ORDER: 1, PATH: '/#skills', LABEL: 'skills' },
  { ORDER: 2, PATH: '/portfolio', LABEL: 'portfolio' },
  { ORDER: 3, PATH: '/#contact', LABEL: 'contact' }
].sort((LINK1, LINK2) => LINK1.ORDER - LINK2.ORDER);
