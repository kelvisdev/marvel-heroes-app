import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharacterDataWrapper } from '../models/character-data-wrapper.model';
import { Character } from '../models/character.model';
import { environment } from '../../../environments/environment';
import { GetHeroParams } from '../models/get-hero-params.model';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url: string = environment.apiUrl;
  private publicKey: string = environment.publicKey;
  private hashKey: string = environment.hashKey;
  readonly timestamp = '1';

  constructor(public http: HttpClient) { }

  getCharacter(offset: number, limit: number, nameStartsWith?: string): Observable<Array<Character>> {
    let url = `${this.url}characters`;
    let httpParams = new HttpParams();
    let params: GetHeroParams = { ...this.paramsAddition, offset, limit };

    if (nameStartsWith) {
      params.nameStartsWith = nameStartsWith;
    }

    Object.keys(params).forEach(function (item) {
      // @ts-ignore
      httpParams = httpParams.set(item, params[item]);
    })

    return this.http.get<CharacterDataWrapper>(url, { params: httpParams })
      .pipe(map(res => res?.data?.results || []));
  }

  getCharacterById(id: number):  Observable<Character> {
    const url = `${this.url}characters/${id}`;
    let params: GetHeroParams = this.paramsAddition;
    let httpParams = new HttpParams();

    Object.keys(params).forEach(function (item: string) {
      // @ts-ignore
      httpParams = httpParams.set(item, params[item]);
    });

    return this.http.get<CharacterDataWrapper>(url, { params: httpParams })
      .pipe(map(res => res?.data?.results[0] || null));
  }

  get paramsAddition(): GetHeroParams {
    return {
      ts: this.timestamp,
      apikey: this.publicKey,
      hash: this.hashKey
    }
  }
}
