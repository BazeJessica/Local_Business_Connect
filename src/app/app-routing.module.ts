import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ForBusinessComponent } from './components/for-business/for-business.component';
import { BusinessComponent } from './components/registerPages/business/business.component';
import { CustomerComponent  } from './components/registerPages/steps/customer/customer.component';
import { BusinessDashboardComponent } from './components/registerPages/business-dashboard/business-dashboard.component';
import { OverviewComponent } from './components/registerPages/steps/overview/overview.component';
import { BookingsComponent } from './components/registerPages/steps/bookings/bookings.component';
import { ProfileComponent } from './components/registerPages/steps/profile/profile.component';
import { ServicesComponent } from './components/registerPages/steps/services/services.component';
import { SettingsComponent } from './components/registerPages/steps/settings/settings.component';
import { CustomersComponent } from './components/registerPages/customers/customers.component';
const routes: Routes = [
  { path: 'about', component: AboutUsComponent },
  {path: 'businessDashboard', component: BusinessDashboardComponent},
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'for-business', component: ForBusinessComponent},
  { path: 'registerBusiness', component:BusinessComponent},
  { path: 'registerCustomer', component:CustomersComponent},
  { 
    path: '',
    component: BusinessDashboardComponent,
    children:[
      { path: 'overview', component: OverviewComponent},
      { path: 'bookings', component: BookingsComponent },
      { path: 'profile', component: ProfileComponent},
      { path: 'customer', component: CustomerComponent },
      { path: 'services',component: ServicesComponent},
      { path: 'settings', component: SettingsComponent},
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 