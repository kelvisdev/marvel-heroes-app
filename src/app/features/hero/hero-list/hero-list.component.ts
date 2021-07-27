import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../../../shared/models/character.model';
import { HeroContextService } from '../../../shared/services/hero.context.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  readonly nameCandidate = 'Kelvis Borges';
  public heroList: Array<Character> = [];
  public searchTerm?: string;

  constructor(
    private heroContextService: HeroContextService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  handleItemSelected(item: Character) {
    this.router.navigate([`heroes/details/${item.id}`]);
  }

  handleButtonClick() {
    const page = this.heroContextService.page + 1;

    this.heroContextService.page = page;
    this.heroContextService.getList(page, 10, this.searchTerm);
  }

  onSearchTermChange() {
    this.heroContextService.getList(0, 10, this.searchTerm);
  }

  private getCharacters() {
    this.heroContextService.list$
      .subscribe(list => this.heroList = list);
  }
}
