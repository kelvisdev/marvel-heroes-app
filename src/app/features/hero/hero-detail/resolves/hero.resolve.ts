import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Character } from '../../../../shared/models/character.model';
import { HeroService } from '../../../../shared/services/hero.service';

@Injectable()
export class HeroResolve implements Resolve<Character> {
  constructor(private heroService: HeroService){}

  resolve(route: ActivatedRouteSnapshot) {
    return this.heroService.getCharacterById(route.params.id);
  }
}
