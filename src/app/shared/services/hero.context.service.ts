import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { HeroService } from './hero.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroContextService {
  private _page = 0;

  private listSubject = new BehaviorSubject<Array<Character>>([]);

  constructor(private heroService: HeroService) {
  }

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }

  get list$(): Observable<Array<Character>> {
    return this.listSubject.asObservable();
  }

  set list(value: Array<Character>) {
    this.listSubject.next(value);
  }

  getList(offset: number, limit: number, nameStartsWith?: string) {
    this.heroService.getCharacter(offset, limit, nameStartsWith)
      .pipe(map(this.lastSeriesEvents))
      .subscribe((list: Array<Character>) => {
        if (offset === 0) {
          this.list = list;
        } else {
          this.list = [...this.listSubject.value, ...list];
        }
      });
  }

  lastSeriesEvents = (character: Array<Character>) => {
    character.forEach(r => {
      const endSerie = r.series.returned < 3 ? r.series.returned : 3;
      const endEvent = r.events.returned < 3 ? r.events.returned : 3;

      r.series.items = r.series.items.slice(0, endSerie);
      r.events.items = r.events.items.slice(0, endEvent);
    });

    return character;
  }
}
