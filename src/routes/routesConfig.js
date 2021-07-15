import SearchVacancy from '@containers/SearchVacancy';
import FavoritePage from '@containers/FavoritePage';

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: SearchVacancy,
  },
  {
    path: '/favorites',
    exact: true,
    component: FavoritePage,
  },
];

export default routesConfig;
