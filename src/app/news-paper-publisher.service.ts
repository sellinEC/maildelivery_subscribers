import { Injectable } from '@angular/core';
import { Subject, Subscriber } from 'rxjs';
import { NewsPaper } from "./news-paper-publisher/NewsPaper.model";
import { Prenumerant } from './mail-delivery-distributor/Prenumerant.model';

@Injectable({
  providedIn: 'root'
})
export class NewsPaperPublisherService {
  public newEditionPublished = new Subject<NewsPaper>();

  prenumeranter: Prenumerant[] = []
  // [{name: 'fruitface', email: 'test@mail.com'}]



  /**
   *
   * hanterar signalering av när en ny utgåva finns tillgänglig för prenumeranterna ;
   *
   * @example
   * prenumerera med .subscribe("DIN funktion här som ska agera på nästa utgåva")
   * publicera ny utgåva genom att använda .next(newsPaper);
   */



  constructor() { }

  addPrenumerant(prenumerant: Prenumerant) {
    this.prenumeranter.push(prenumerant)
  }



}
