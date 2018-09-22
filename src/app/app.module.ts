import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-ssr' }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
