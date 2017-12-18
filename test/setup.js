import { JSDOM } from 'jsdom';
import { format } from 'date-fns';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = document.defaultView;

Object.keys(window).forEach(key => {
  if (!(key in global)) global[key] = window[key];
});

console.log(`---------------${format(new Date(), 'HH:mm:ss')}---------------`);
