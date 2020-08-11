import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ContactEditPageComponent} from './pages/contact-edit-page/contact-edit-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component'

const routes: Routes = [
  {
    path:'', 
    component:HomePageComponent},
  {
    path:'contact', 
    component:ContactPageComponent
  },
  {
    path:'contact/edit',
    component:ContactEditPageComponent
  },
  {
    path:'contact/edit/:id',
    component:ContactEditPageComponent
  },
  {
    path:'contact/:id',
    component:ContactDetailsPageComponent
  },
  
  
  {
    path:'statistics',
    component:StatisticsPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
