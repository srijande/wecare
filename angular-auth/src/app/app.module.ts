import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ServicesComponent } from './services/services.component';
import { RequestsComponent } from './requests/requests.component';
import { ContributeComponent } from './contribute/contribute.component';
import { CovidsupportComponent } from './covidsupport/covidsupport.component';

import { MaterialModule } from "./material/material.module";
import { AskforhelpComponent } from './askforhelp/askforhelp.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {MatAccordionHarness} from '@angular/material/expansion/testing';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    ServicesComponent,
    RequestsComponent,
    ContributeComponent,
    CovidsupportComponent,
    AskforhelpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
