import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardListComponent} from "./cardList/cardList.component";
import {CardListResolver} from "./cardList/cardListResolver";


const routes: Routes = [{
  path: '',
  component: CardListComponent,
  resolve: {
    data: CardListResolver
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
