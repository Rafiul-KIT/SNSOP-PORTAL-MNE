import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Unauthorized } from './components/unauthorized/unauthorized';

export const routes: Routes = [
  {
    component: Dashboard,
    path: 'dashboard',
  },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    component: Unauthorized,
    path: '**',
  },
];
