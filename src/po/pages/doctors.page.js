import BasePage from './base.page';

import { ListHeaderComponent, AddDoctorComponent, SpecialistCard } from '../components';

class DoctorsPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/doctors');
    this.doctorsListHeader = new ListHeaderComponent();
    this.addDoctorModal = new AddDoctorComponent();
  }

  specialistCard(id) {
    return new SpecialistCard(id);
  }
}

export default DoctorsPage;
