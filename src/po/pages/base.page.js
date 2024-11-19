import { ListHeaderComponent, SideMenuComponent } from '../components';

class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new ListHeaderComponent();
    this.sideMenu = new SideMenuComponent();
  }

  async open() {
    await browser.url(this.url);
  }
}

export default BasePage;
