import { viewPage } from './constants/pages';

// switch to the current page
viewPage();

// then setup an event listener to watch for page changes
window.addEventListener('hashchange', () => viewPage(), false);
