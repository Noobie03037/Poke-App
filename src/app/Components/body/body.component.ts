import { Component, Input, OnInit, inject } from '@angular/core';
import { Post } from 'src/app/Interface/post';
import { PokeStoreService } from 'src/app/Services/poke-store.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit{
  
  name= inject(PokeStoreService).sayHello()
  ngOnInit(): void {
  }
}
