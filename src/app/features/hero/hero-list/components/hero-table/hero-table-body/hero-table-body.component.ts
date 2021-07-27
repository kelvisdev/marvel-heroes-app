import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../../../../../shared/models/character.model';

@Component({
  selector: 'app-hero-table-body',
  templateUrl: './hero-table-body.component.html',
  styleUrls: ['./hero-table-body.component.scss']
})
export class HeroTableBodyComponent {
  @Input()
  list?: Array<Character>;

  @Output()
  itemSelected = new EventEmitter<Character>();

  handleItemSelected(item: Character) {
    this.itemSelected.emit(item);
  }
}
