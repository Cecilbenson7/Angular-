import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ApiDataPageComponent } from './api-data-page/api-data-page.component';
import { FormPageComponent } from './form-page/form-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'api-data', component: ApiDataPageComponent },
  { path: 'form', component: FormPageComponent }
];
