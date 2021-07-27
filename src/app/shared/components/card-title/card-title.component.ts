import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss']
})
export class CardTitleComponent {

  @Input()
  candidateName?: string;

  @Input()
  hideCandidateName?: boolean;

  @Input()
  title = 'BUSCA';
}
