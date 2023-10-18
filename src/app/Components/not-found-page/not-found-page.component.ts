import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent {
  isNotFound(){
    const route= inject(ActivatedRoute);
    return `${route.snapshot.url} is not found`
  }

  not= this.isNotFound()
}
