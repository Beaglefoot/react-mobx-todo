import { footer, link as linkClass } from './Footer.scss';

class Footer {
  constructor() {
    const link = document.createElement('a');
    link.appendChild(document.createTextNode('Beaglefoot'));
    link.setAttribute('href', 'https://github.com/Beaglefoot');
    link.classList.add(linkClass);

    this.footer = document.createElement('footer');
    this.footer.appendChild(document.createTextNode('by '));
    this.footer.appendChild(link);
    this.footer.classList.add(footer);
  }

  appendToDocument() {
    document.body.appendChild(this.footer);
    return this;
  }

  removeFromDocument() {
    document.body.removeChild(this.footer);
    return this;
  }

  addClass(className) {
    this.footer.classList.add(className);
    return this;
  }
}

export default Footer;
