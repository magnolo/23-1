import { RouterModule, Routes } from '@angular/router';

import { mapRoutes } from './components/map/map.routes';

const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  ...mapRoutes
];

export const routing = RouterModule.forRoot(routes);
