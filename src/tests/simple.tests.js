import { pages } from '../po';

describe('Doctors page', () => {
  beforeEach(async () => {
    await pages('dashboard').open();
  });

  it('Check page title', async () => {
    await expect(browser).toHaveTitle(
      'Appointment Planner - Syncfusion Angular Components Showcase App',
    );
  });

  it('Open modal window for adding a new doctor', async () => {
    await pages('dashboard').sideMenu.item('doctors').click();
    await pages('doctors').doctorsListHeader.addNewDoctorBtn.click();
    await expect(pages('doctors').addDoctorModal.rootEl).toBeDisplayed();
  });

  it('Add a new doctor', async () => {
    // click doctors item in the side menu
    await pages('dashboard').sideMenu.item('doctors').click();
    // click on add new doctor btn
    await pages('doctors').doctorsListHeader.addNewDoctorBtn.click();
    // wait for visibility of modal window
    await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();

    // Enter doctor's name
    await pages('doctors').addDoctorModal.input('name').setValue('Harry Potter');
    // Enter doctor's mobile
    await pages('doctors').addDoctorModal.input('phone').setValue('1111111111');
    // Enter doctor's email
    await pages('doctors').addDoctorModal.input('email').setValue('harrypotter@gmail.com');
    // Enter doctor's education
    await pages('doctors').addDoctorModal.input('education').setValue('Basic');
    // Enter doctor's designation
    await pages('doctors').addDoctorModal.input('designation').setValue('Test');
    // Click Save button
    await pages('doctors').addDoctorModal.saveBtn.click();

    await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();

    // Check new doctor on the page
    await expect(pages('doctors').specialistCard(8).rootEl).toBeDisplayed();
    await expect(pages('doctors').specialistCard(8).name).toHaveText('Dr. Harry Potter');
    await expect(pages('doctors').specialistCard(8).education).toHaveText('Basic', { ignoreCase: true });
  });

  it('Close a modal window for adding a new doctor', async () => {
    // click doctors item in the side menu
    await pages('dashboard').sideMenu.item('doctors').click();
    // click on add new doctor btn
    await pages('doctors').doctorsListHeader.addNewDoctorBtn.click();
    // wait for visibility of modal window
    await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();
    // clock close icon
    await pages('doctors').addDoctorModal.closeBtn.click();
    // check the modal is not displayed
    await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
  });
});
