import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomePageComponent } from './app/home-page/home-page.component';
import { ApiDataPageComponent } from './app/api-data-page/api-data-page.component';
import { FormPageComponent } from './app/form-page/form-page.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter([
      { path: '', component: HomePageComponent },
      { path: 'api-data', component: ApiDataPageComponent },
      { path: 'form', component: FormPageComponent }
    ], withEnabledBlockingInitialNavigation())
  ]
}).catch(err => console.error(err));
