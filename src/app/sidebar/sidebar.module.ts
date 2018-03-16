import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './component/sidebar.component';
import { BodyModule } from '../body/body.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
