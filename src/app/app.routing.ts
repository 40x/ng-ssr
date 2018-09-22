import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
