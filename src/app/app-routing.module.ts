import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ForBusinessComponent } from './components/for-business/for-business.component';
import { BusinessComponent } from './components/registerPages/business/business.component';
import { CustomersComponent } from './components/registerPages/customers/customers.component';
const routes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'for-business', component: ForBusinessComponent},
  {path: 'registerBusiness', component:BusinessComponent},
  {path: 'registerCustomer', component:CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 