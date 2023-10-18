import { Component, inject, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeStoreService } from './Services/poke-store.service';
import { take, interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  route = inject(ActivatedRoute);
  ps = inject(PokeStoreService);
  pokeList!: object;

  imgUrl: string= 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg';

  async getPokemon(){
   return this.ps.getUsers().subscribe(data => {
    this.pokeList = data.abilities;
    
   }); 
  }

  number= interval(2000).pipe( take('hello'.length))
  async ngOnInit() {
  }

  task: string= 'faire une app to do';

  statu: string= 'is uncheked';
  isCheck: boolean= false;

  

  checked(box: HTMLInputElement): void{
    this.isCheck = !this.isCheck
  }

}