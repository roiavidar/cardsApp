import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-card-list',
  templateUrl: './cardList.component.html'
})
export class CardListComponent {
  @Input() cards;
  counter = 0;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.cards = this.cards || this.route.snapshot.data.data.reduce((acc, card) => {
      this.counter++;
      acc[this.counter] = {
        id: this.counter,
        data: card,
        color: this.getRandomColor()
      };
      return acc;
    }, {});
  }

  OnCardDelete(cardId) {
    delete this.cards[cardId];

  }

  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  orderByName(cardAObj, cardBObj) {
    let cardA = cardAObj.value;
    let cardB = cardBObj.value;
    if(cardA.data.name > cardB.data.name) {
      return 1;
    } else if (cardA.data.name < cardB.data.name) {
      return -1;
    }

    return 0;
  }
}
