import BaseComponent from './base.component';

class HeaderComponent extends BaseComponent {
  constructor() {
    super('div.planner-header');
  }

  get logoutBtn(){
    return this.rootEl.$('.logout-icon-container');
  }
}

export default HeaderComponent;
