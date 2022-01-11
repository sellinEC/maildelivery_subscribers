import { Injectable } from '@angular/core';
import { Subject, Subscriber } from 'rxjs';
import { MailDeliveryService } from 'src/app/mail-delivery-distributor/MailDeliveryService.service';
import { NewsPaper, NewsPaperForDelivery } from 'src/app/news-paper-publisher/NewsPaper.model';


@Injectable({
  providedIn: 'root'
})
export class MailboxService {
public boxHasChanged = new Subject<NewsPaperForDelivery[]>()
public emptyMailbox = new Subject<NewsPaperForDelivery[]>()
public mailCount = new Subject<number>()
userInbox: NewsPaperForDelivery[] = []
deliveredPapers: NewsPaperForDelivery[] = []


  constructor() { }


  boxCleaner(userEmail: string) {
    let slimArray: NewsPaperForDelivery[] = []
    let deliveredArray: NewsPaperForDelivery[] = []

    this.userInbox.forEach(paper => {
      if(userEmail != paper.address) {
        slimArray.push(paper)
      }else {
        deliveredArray.push(paper)
      }
    this.deliveredPapers = deliveredArray
    this.emptyMailbox.next(this.deliveredPapers)
    this.userInbox = slimArray
    this.boxHasChanged.next(this.userInbox)
    console.log('BOX HAS CHANGED')
  });
  }

  mailCounter(userEmail: string) {
    let countedMail: NewsPaperForDelivery[] = []


    this.userInbox.forEach(paper => {
      if(userEmail = paper.address) {
        countedMail.push(paper)
      }
      this.mailCount.next(countedMail.length)
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
