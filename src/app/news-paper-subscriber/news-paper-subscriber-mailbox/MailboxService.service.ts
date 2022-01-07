import { Injectable } from '@angular/core';
import { Subject, Subscriber } from 'rxjs';
import { MailDeliveryService } from 'src/app/mail-delivery-distributor/MailDeliveryService.service';
import { NewsPaper, NewsPaperForDelivery } from 'src/app/news-paper-publisher/NewsPaper.model';


@Injectable({
  providedIn: 'root'
})
export class MailboxService {
public boxHasChanged = new Subject<NewsPaperForDelivery[]>()
inbox: NewsPaperForDelivery[] = []








  constructor(private postalService: MailDeliveryService) { }

  boxCleaner(userEmail: string) {
    let slimArray: NewsPaperForDelivery[] = []

    this.inbox.forEach(paper => {
      if(userEmail != paper.address) {
        slimArray.push(paper)
      }


    this.inbox = slimArray
    this.boxHasChanged.next(this.inbox)
    console.log('BOX HAS CHANGED')
  });
  }

}
