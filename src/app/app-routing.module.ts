import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileNsettingsComponent } from './profile-nsettings/profile-nsettings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path:"pNs",component:ProfileNsettingsComponent},
  {path:"logout", component:LogoutComponent},
  {path:"", component:LandingPageComponent},
  {path:"sidebar", component:SidebarComponent},
  {path:"navbar", component:NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
