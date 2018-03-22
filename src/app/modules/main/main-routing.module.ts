import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StepGuardService } from '../../step-guard.service';

import { MainComponent } from './main.component';
import { DashboardComponent } from './body/component/dashboard/dashboard.component';
import { UsersComponent } from './body/component/users/users.component';
import { ReportComponent } from './body/component/report/report.component';

const mainRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [StepGuardService],
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [StepGuardService]
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [StepGuardService]
      },
      {
        path: 'report',
        component: ReportComponent,
        canActivate: [StepGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
