import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NewsPaper } from "./news-paper-publisher/NewsPaper.model";

@Injectable({
  providedIn: 'root'
})
export class NewsPaperPublisherService {


  /**
   *
   * hanterar signalering av när en ny utgåva finns tillgänglig för prenumeranterna ;
   *
   * @example
   * prenumerera med .subscribe("DIN funktion här som ska agera på nästa utgåva")
   * publicera ny utgåva genom att använda .next(newsPaper);
   */
   public newEditionPublished = new Subject<NewsPaper>();


  constructor() { }


}
