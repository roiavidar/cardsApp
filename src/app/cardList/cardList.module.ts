import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CardListComponent} from "./cardList.component";
import {CardModule} from "../card/card.module";
@NgModule({
  declarations: [CardListComponent],
  imports: [CommonModule, CardModule],
  exports: [CardListComponent]
})
export class CardListModule {}
