import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: '<router-outlet (activate)="onActivate()"></router-outlet>',
})
export class HeroComponent {
  onActivate() {
    window.scroll(0, 0);
  }
}
