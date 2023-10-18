import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Interface/post';

@Injectable({
  providedIn: 'root'
})
export class PokeStoreService {
  http= inject(HttpClient);
  id: number= Math.floor(Math.random()*150+1);
  apiUrl= `https://pokeapi.co/api/v2/pokemon/${this.id}/`;

  getUsers(){
    return this.http.get<Post<Object>>(this.apiUrl)
  }

  sayHello(){
    const name= localStorage.getItem('mail') as string;
    return(
      `hello ${name}`
    )
  }
}
