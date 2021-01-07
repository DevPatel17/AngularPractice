import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//Typical Route has two properties:
// 1. path: a string that matches the URL in the address bar
// 2. component: the component the router should create when navigating to this route 
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  //redirect a url that fully matches the empty path to the route whose path is '/dashboard'
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  // the semicolon in the ':id' is a placeholder for a specific hero
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  //add the RouterModule to the AppRoutingModule imports array and configure iw with the routes in one step (by calling 'RouterModule.forRoot()')
  imports: [RouterModule.forRoot(routes)],
 //export RouterModule so it can be available throughout the app
  exports: [RouterModule]
})
export class AppRoutingModule { }