import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RentComponent } from './pages/rent/rent.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewYorkComponent } from './pages/location/new-york/new-york.component';
import { TokyoComponent } from './pages/location/tokyo/tokyo.component';
import { DublinComponent } from './pages/location/dublin/dublin.component';
import { UsersComponent } from './components/users/users.component';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    NotfoundComponent,
    DashboardComponent,
    NavbarComponent,
    RentComponent,
    ContactComponent,
    NewYorkComponent,
    TokyoComponent,
    DublinComponent,
    UsersComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
