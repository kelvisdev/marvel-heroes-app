import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../../../../shared/models/character.model';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.scss']
})
export class HeroTableComponent {
  @Input()
  list?: Array<Character>;

  @Output()
  itemSelected = new EventEmitter<Character>();

  handleItemSelected(item: Character) {
    this.itemSelected.emit(item);
  }
}
