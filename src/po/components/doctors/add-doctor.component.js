import BaseComponent from '../common/base.component';

class AddDoctorComponent extends BaseComponent {
  constructor() {
    super('div.new-doctor-dialog');
  }

get saveBtn(){
  return this.rootEl.$('.e-footer-content button.e-primary')
}

get closeBtn(){
  return this.rootEl.$('div.new-doctor-dialog .e-dlg-closeicon-btn');
}


  /**
   *
   * @param name {'name' | 'phone' | 'email' | 'education' | 'designation'}
   * @returns
   */

  input(name) {
    const selectors = {
      name: '[name=Name]',
      email: '[name=Email]',
      phone: '#DoctorMobile',
      designation: '[name=Designation]',
      education: '[name=Education]',
    };

    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

export default AddDoctorComponent;
