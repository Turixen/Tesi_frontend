import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { RentComponent } from './pages/rent/rent.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewYorkComponent } from './pages/location/new-york/new-york.component';
import {  TokyoComponent} from './pages/location/tokyo/tokyo.component';
import { DublinComponent } from './pages/location/dublin/dublin.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },

  { path: 'tokyo', component: TokyoComponent },
  { path: 'dublin', component: DublinComponent },
  { path: 'newyork', component: NewYorkComponent },

  { path: 'rent', component: RentComponent },
  { path: 'main', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
