import { Injectable } from '@angular/core';
import { Subject, Subscriber } from 'rxjs';
import { MailDeliveryService } from 'src/app/mail-delivery-distributor/MailDeliveryService.service';
import { NewsPaper, NewsPaperForDelivery } from 'src/app/news-paper-publisher/NewsPaper.model';


@Injectable({
  providedIn: 'root'
})
export class MailboxService {
public boxHasChanged = new Subject<NewsPaperForDelivery[]>()
userInbox: NewsPaperForDelivery[] = []


  constructor() { }


  boxCleaner(userEmail: string) {
    let slimArray: NewsPaperForDelivery[] = []

    this.userInbox.forEach(paper => {
      if(userEmail != paper.address) {
        slimArray.push(paper)
      }

    this.userInbox = slimArray
    this.boxHasChanged.next(this.userInbox)
    console.log('BOX HAS CHANGED')
  });
  }

  setInbox(inbox: NewsPaperForDelivery[]) {
    this.userInbox = inbox
    this.boxHasChanged.next(this.userInbox)
  }

  addToMailbox(paper: NewsPaperForDelivery) {
    this.userInbox.push(paper)
  }

  onTester() {
    console.log('Kontakt!')
  }

}
