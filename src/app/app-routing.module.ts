import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; //add this for route
import { AboutComponent } from './about/about.component'; //add this for route

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'about/:id',
    component: AboutComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
