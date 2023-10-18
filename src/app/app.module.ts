import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './Components/aside/aside.component';
import { BodyComponent } from './Components/body/body.component';
import { ItemsComponent } from './Components/items/items.component';
import { CandiesComponent } from './Components/candies/candies.component';
import {PokedexComponent} from './Components/pokedex/pokedex.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    BodyComponent,
    ItemsComponent,
    CandiesComponent,
    PokedexComponent,
    NotFoundPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
