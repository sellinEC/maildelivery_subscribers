import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { MailDeliveryService } from 'src/app/mail-delivery-distributor/MailDeliveryService.service';
import { NewsPaperForDelivery } from 'src/app/news-paper-publisher/NewsPaper.model';
import { MailboxService } from './MailboxService.service';


@Component({
  selector: 'app-news-paper-subscriber-mailbox',
  templateUrl: './news-paper-subscriber-mailbox.component.html',
  styleUrls: ['./news-paper-subscriber-mailbox.component.scss']
})
export class NewsPaperSubscriberMailboxComponent implements OnInit {

  inbox: NewsPaperForDelivery[] = []
  private paperSubscription?: Subscription;
  constructor(private postalService: MailDeliveryService, private mailBoxService: MailboxService) { }

  ngOnInit(): void {

    this.inbox = this.mailBoxService.userInbox

    this.paperSubscription = this.postalService.paperDelivery.subscribe(
     ( paper: NewsPaperForDelivery) => {
      this.mailBoxService.addToMailbox(paper)
     }
    )

    this.mailBoxService.boxHasChanged.subscribe(
      (changedbox: NewsPaperForDelivery[]) => {
        this.inbox = changedbox;

      }
    )



  }

  //Kaosfunktion som via service "plockar" ut endast tidnningar som tillhör specifik user
  onEmptyMailbox(email: string) {

    this.mailBoxService.boxCleaner(email)

    // this.inbox.forEach(paper => {
    //   console.log(paper.address + ' ' + paper.frontNewsHeadline + ' On empty mailbox')
    // });

    console.log(email)

  }

  onTest() {
    this.mailBoxService.onTester()
  }
}
