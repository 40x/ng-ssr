import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: 'http://jsonplaceholder.typicode.com'
    }
  ],
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}
