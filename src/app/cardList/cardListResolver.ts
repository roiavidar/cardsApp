import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {of, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardListResolver implements Resolve<Observable<any>> {
  constructor() {}

  resolve() {
    return of([
        {"name": "c", "value": "1"},
        {"name": "b", "value": "2"},
        {"name": "a", "value": "3"},
        {"name": "aaa", "value": "3"}
      ]
    );
  }
}
