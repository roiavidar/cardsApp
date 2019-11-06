import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() card;
  @Output() deleteCard = new EventEmitter();
  constructor() {}

  OnDeleteClicked() {
    this.deleteCard.emit(this.card.id);
  }
}
