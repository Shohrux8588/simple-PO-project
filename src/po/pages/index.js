import DashboardPage from './dashboard.page';
import DoctorsPage from './doctors.page';

/**
 *
 * @param name {'dashboard'| 'doctors'}
 * @returns {DashboardPage | DoctorsPage}
 */

function pages(name) {
  const items = {
    dashboard: new DashboardPage(),
    doctors: new DoctorsPage(),
  };

  return items[name.toLowerCase()];
}

export { DashboardPage, DoctorsPage, pages };
