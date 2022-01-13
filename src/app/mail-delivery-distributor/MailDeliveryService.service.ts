import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NewsPaperPublisherService } from '../news-paper-publisher.service';
import { NewsPaper, NewsPaperForDelivery } from '../news-paper-publisher/NewsPaper.model';
import { Prenumerant } from './Prenumerant.model';

//Gör om Newspaper till NewsPaper for delivery och skickar till mailbox

@Injectable({
  providedIn: 'root'
})
export class MailDeliveryService {
  public paperDelivery = new Subject<NewsPaperForDelivery>();


  prenumeranter: Prenumerant[] =  []
  papersForDelivery: NewsPaperForDelivery[] = []




  constructor(private paperService: NewsPaperPublisherService) { }


  getPrenumeranter() {
    this.prenumeranter = this.paperService.prenumeranter
  }

  handleOutboxPapers(adress: string, newspaper: NewsPaper) {
   let readyToDeliverNewspaper = new NewsPaperForDelivery(adress, newspaper)
   this.papersForDelivery.push(readyToDeliverNewspaper)
   console.log(readyToDeliverNewspaper)
  }

  emptyBox() {
    this.papersForDelivery = []
  }



 //**Flyttar service till mailbox för att kunna rensa postens outbox när post levereras */



}
