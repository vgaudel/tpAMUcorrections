import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

class Devise{
    constructor(public code:string="?",
                public name:string="?",
                public change:number=1){}
}​

@Injectable({
  providedIn: 'root',
})
export class DeviseService {

 //jeu de données (en dur) pour pré-version (simulation asynchrone)
  private devises : Devise[] = [
    new Devise('EUR','euro',1.0),
    new Devise('USD','dollar',1.1),
    new Devise('GBP','livre',0.9)
  ];

  getAllDevise$() : Observable<Devise[]> {
    return of(this.devises).
      pipe(
        delay(5000) //simuler un appel Ajax avec un delay de 500ms
      );
  }

}
