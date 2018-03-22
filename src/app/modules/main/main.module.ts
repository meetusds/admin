import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { BodyModule } from './body/body.module';

import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    BodyModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class MainModule { }
