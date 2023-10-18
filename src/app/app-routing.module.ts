import { NgModule, inject } from '@angular/core';
import { ROUTES, Router, RouterModule, Routes } from '@angular/router';
import  {PokedexComponent}  from './Components/pokedex/pokedex.component';
import { ItemsComponent } from './Components/items/items.component';
import { CandiesComponent } from './Components/candies/candies.component';
import { BodyComponent } from './Components/body/body.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Authentification',
    component: LoginComponent
  },
  {
    path: 'Home',
    title: 'home',
    component: BodyComponent
  },
  {path: 'Pokedex',
  title: 'Pokedex',
  component:PokedexComponent
},
  {path: 'Items',
  title: 'Items',
  component: ItemsComponent
},
{path: 'Candies',
  title: 'Candies',
  component: CandiesComponent,
},
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'login'
},
{
  path: "**",
  title: '404 | not Found',
  component: NotFoundPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
