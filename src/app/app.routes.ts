import { RouterModule, Routes } from '@angular/router';

import { mapRoutes } from './components/map/map.routes';
import { CatalogComponent } from './components/catalog/catalog.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  //{ path: '', redirectTo: '/map', pathMatch: 'full' },
  ...mapRoutes
];

export const routing = RouterModule.forRoot(routes);
