import SearchVacancy from '@containers/SearchVacancy';
import FavoriteVacancies from '@containers/FavoriteVacancies';

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: SearchVacancy,
  },
  {
    path: '/favorites',
    exact: true,
    component: FavoriteVacancies,
  },
];

export default routesConfig;
