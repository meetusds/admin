import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './modules/main/main.module';
import { BusinessErrorModule } from './modules/business-error/business-error.module';

import { StepGuardService } from './step-guard.service';

import { User } from './models/user';
import { Permissions } from './models/permissions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MainModule,
    BusinessErrorModule,
    AppRoutingModule
  ],
  providers: [
    StepGuardService,
    User,
    Permissions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
