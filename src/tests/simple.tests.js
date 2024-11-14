// https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors

describe('Doctors page', () => {
  beforeEach(async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
  });

  it('Check page title', async () => {
    await expect(browser).toHaveTitle(
      'Appointment Planner - Syncfusion Angular Components Showcase App',
    );
  });

  it('Open modal window for adding a new doctor', async () => {});

  it('Add a new doctor', async () => {
    // click doctors item in the side menu
    await $('[routerlink="/doctors"]').click();
    // click on add new doctor btn
    await $('.specialization-types button.e-control').click();
    // wait for visibility of modal window
    await $('div.new-doctor-dialog').waitForDisplayed();

    // Enter doctor's name
    await $('[name=Name]').setValue('Harry Potter');
    // Enter doctor's mobile
    await $('#DoctorMobile').setValue('1111111111');
    // Enter doctor's email
    await $('[name=Email]').setValue('harrypotter@gmail.com');
    // Enter doctor's education
    await $('[name=Education]').setValue('Basic');
    // Enter doctor's designation
    await $('[name=Designation]').setValue('Test');
    // Click Save button
    await $('.e-footer-content button.e-primary').click();

    await expect($('div.new-doctor-dialog')).not.toBeDisplayed();

    // Check new doctor on the page
    await expect($('#Specialist_8')).toBeDisplayed();
    await expect($('#Specialist_8').$('.name')).toHaveText('Dr. Harry Potter');
    await expect($('#Specialist_8').$('.education')).toHaveText('Basic', { ignoreCase: true });
  });

  it('Close a modal window for adding a new doctor', async () => {
    // click doctors item in the side menu
    await $('[routerlink="/doctors"]').click();
    // click on add new doctor btn
    await $('.specialization-types button.e-control').click();
    // wait for visibility of modal window
    await $('div.new-doctor-dialog').waitForDisplayed();
    // clock close icon
    await $('div.new-doctor-dialog .e-dlg-closeicon-btn').click();
    // check the modal is not displayed
    await expect($('div.new-doctor-dialog')).not.toBeDisplayed();
  });
});
