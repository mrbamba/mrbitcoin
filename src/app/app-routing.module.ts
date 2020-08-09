import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'contact', component:ContactPageComponent},
  {path:'statistics',component:StatisticsPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
