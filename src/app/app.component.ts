import { Component, OnInit } from '@angular/core';
import { HeroContextService } from './shared/services/hero.context.service';

@Component({
  selector: 'app-root',
  template: '<div class="container"><router-outlet></router-outlet></div>',
})
export class AppComponent implements OnInit {
  constructor(private heroContextService: HeroContextService) {
  }

  ngOnInit(): void {
    this.heroContextService.getList(0, 10);
  }
}
