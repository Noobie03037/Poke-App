import { Component } from '@angular/core';
import { NavModel } from 'src/app/Interface/nav-model';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  pic: string= 'https://pbs.twimg.com/profile_images/1538108303372439552/QRV20CVc_400x400.jpg';
  navMenu: NavModel[]= [
    {icon:'fa-solid fa-house', link:'Home'},
    {icon:'fa-solid fa-box-archive', link:'Pokedex'},
    {icon:'fa-solid fa-bomb', link:'Items'},
    {icon:'fa-solid fa-candy-cane', link:'Candies'}
  ];
}
