import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SettingsComponent} from "./settings/settings.component";
import {ErrorsComponent} from "./errors/errors.component";
import {SettingsProfileComponent} from "./settings-profile/settings-profile.component";
import {SettingsContactComponent} from "./settings-contact/settings-contact.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'}, // Default URL
  {path: 'home', component: HomeComponent}, // localhost:4200/home
  {path: 'settings', component: SettingsComponent, children: [ // localhost:4200/settings
      {path: '', redirectTo: 'profile', pathMatch: 'full'}, // Default URL for localhost:4200/settings => localhost:4200/settings/profile
      {path: 'profile', component: SettingsProfileComponent}, // localhost:4200/settings/profile
      {path: 'contact', component: SettingsContactComponent}, // localhost:4200/settings/contact
      {path: '**', redirectTo: 'profile', pathMatch: 'full'}, // localhost:4200/settings/badUrl => localhost:4200/settings/profile
    ]},
  // {path: '**', component: ErrorsComponent} // localhost:4200/badUrl
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
