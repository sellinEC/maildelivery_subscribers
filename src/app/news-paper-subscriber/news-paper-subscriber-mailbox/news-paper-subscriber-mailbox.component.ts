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
    this.paperSubscription = this.postalService.paperDelivery.subscribe(
     ( paper: NewsPaperForDelivery) => {
      this.inbox.push(paper)
     }
    )
    this.mailBoxService.boxHasChanged.subscribe(
      (changedbox: NewsPaperForDelivery[]) => {
        this.inbox = changedbox
      }
    )
  }

  //Kaosfunktion som "plockar" ut endast tidnningar som tillhör specifik user
  onEmptyMailbox() {
    console.log('Empty!!!')
      let email = 'mail@mail.com'
      this.mailBoxService.boxCleaner(email)
    this.inbox.forEach(paper => {
      console.log(paper.address + ' ' + paper.frontNewsHeadline + ' On empty mailbox')
    });



  }

}
