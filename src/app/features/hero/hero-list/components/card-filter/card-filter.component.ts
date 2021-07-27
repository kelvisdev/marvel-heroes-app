import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrls: ['./card-filter.component.scss']
})
export class CardFilterComponent {
  @Input()
  searchTerm: any;

  @Output()
  searchTermChange = new EventEmitter<string>();

  readonly label = 'Nome do Personagem';


  onSearchTermChange() {
    this.searchTermChange.emit(this.searchTerm);
  }
}
