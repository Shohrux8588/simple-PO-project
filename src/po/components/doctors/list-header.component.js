import BaseComponent from '../common/base.component';

class ListHeaderComponent extends BaseComponent {
  constructor() {
    super('div.specialization-types');
  }

  get addNewDoctorBtn() {
    return this.rootEl.$('button.e-control');
  }
}

export default ListHeaderComponent;
