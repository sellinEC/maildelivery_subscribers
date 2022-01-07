import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NewsPaperPublisherService } from '../news-paper-publisher.service';
import { NewsPaper, NewsPaperForDelivery } from '../news-paper-publisher/NewsPaper.model';
import { Prenumerant } from './Prenumerant.model';


@Injectable({
  providedIn: 'root'
})
export class MailDeliveryService {
  public paperDelivery = new Subject<NewsPaperForDelivery>();
  public emptyMailbox = new Subject<NewsPaperForDelivery>()

  prenumeranter: Prenumerant[] =  []
  papersForDelivery: NewsPaperForDelivery[] = []


  /**
   *
   * hanterar signalering av när en ny utgåva finns tillgänglig för prenumeranterna ;
   *
   * @example
   * prenumerera med .subscribe("DIN funktion här som ska agera på nästa utgåva")
   * publicera ny utgåva genom att använda .next(newsPaper);
   */




  constructor(private paperService: NewsPaperPublisherService) { }


  getPrenumeranter() {
    this.prenumeranter = this.paperService.prenumeranter
  }

  handleOutboxPapers(adress: string, newspaper: NewsPaper) {
   let readyToDeliverNewspaper = new NewsPaperForDelivery(adress, newspaper)
   this.papersForDelivery.push(readyToDeliverNewspaper)
   console.log(readyToDeliverNewspaper)
  }



 //**Flyttar service till mailbox för att kunna rensa postens outbox när post levereras */



}
