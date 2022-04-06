import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  { path: "dashboard", component:DashboardComponent }, //create route modules
  { path: "about", component:AboutComponent }, //create route modules
  { path: "", redirectTo: "dashboard", pathMatch: "full" }  //set the home page as dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
