import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent {
  @Input()
  buttonText?: string;

  @Output()
  buttonClick = new EventEmitter<void>();

  public handleClick() {
    this.buttonClick.emit();
  }
}
