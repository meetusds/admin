import { Routes } from '@angular/router';

import { DashboardComponent } from './body/component/dashboard/dashboard.component';
import { UsersComponent } from './body/component/users/users.component';
import { ReportComponent } from './body/component/report/report.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'report', component: ReportComponent }
];
