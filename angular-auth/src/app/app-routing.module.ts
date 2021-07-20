import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { RequestsComponent } from './requests/requests.component';
import { ContributeComponent } from './contribute/contribute.component';
import { CovidsupportComponent } from './covidsupport/covidsupport.component';
import { AskforhelpComponent } from "./askforhelp/askforhelp.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'covidsupport', component: CovidsupportComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'requests', component: RequestsComponent},
  {path: 'contribute', component: ContributeComponent},
  {path: 'request_for_help', component: AskforhelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
