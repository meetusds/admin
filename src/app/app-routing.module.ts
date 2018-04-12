import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StepGuardService } from './step-guard.service';

import { PageNotFoundComponent } from './modules/business-error/page-not-found/page-not-found.component';
import { LoginComponent } from './modules/login/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }) // <-- debugging purposes only
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
