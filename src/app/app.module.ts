import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ForBusinessComponent } from './components/for-business/for-business.component';
import { CategoryComponent } from './components/component/category/category.component';
import { MaterialModule } from './material.module';
import { BusinessesComponent } from './components/component/businesses/businesses.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';
import { BusinessComponent } from "./components/registerPages/business/business.component"
import { CustomersComponent } from './components/registerPages/customers/customers.component';
import { ScheduleComponent } from './components/registerPages/steps/schedule/schedule.component';
import { MediaComponent } from './components/registerPages/steps/media/media.component';
import { AvailabilityComponent } from './components/registerPages/steps/availability/availability.component';
import { BusinessDetailsComponent } from './components/registerPages/steps/business-details/business-details.component';
import { ServiceComponent } from './components/registerPages/steps/service/service.component';
import { BusinessDashboardComponent } from './components/registerPages/business-dashboard/business-dashboard.component';
import { OverviewComponent } from './components/registerPages/steps/overview/overview.component';
import { CalenderComponent } from './components/registerPages/steps/calender/calender.component';
import { BookingsComponent } from './components/registerPages/steps/bookings/bookings.component';
import { ServicesComponent } from './components/registerPages/steps/services/services.component';
import { NotificationsComponent } from './components/registerPages/steps/notifications/notifications.component';
import { SettingsComponent } from './components/registerPages/steps/settings/settings.component';
import { ProfileComponent } from './components/registerPages/steps/profile/profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    SignupComponent,
    LoginComponent,
    ForBusinessComponent,
    CategoryComponent,
    BusinessesComponent,
    TestimoniesComponent,
    BusinessComponent,
    CustomersComponent,
    ScheduleComponent,
    MediaComponent,
    AvailabilityComponent,
    BusinessDetailsComponent,
    ServiceComponent,
    BusinessDashboardComponent,
    OverviewComponent,
    CalenderComponent,
    BookingsComponent,
    ServicesComponent,
    NotificationsComponent,
    SettingsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
