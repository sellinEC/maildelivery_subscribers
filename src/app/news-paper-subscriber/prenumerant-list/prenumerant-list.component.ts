import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Prenumerant } from 'src/app/mail-delivery-distributor/Prenumerant.model';
import { NewsPaperPublisherService } from 'src/app/news-paper-publisher.service';
import { NewsPaperForDelivery } from 'src/app/news-paper-publisher/NewsPaper.model';
import { MailboxService } from '../news-paper-subscriber-mailbox/MailboxService.service';

@Component({
  selector: 'app-prenumerant-list',
  templateUrl: './prenumerant-list.component.html',
  styleUrls: ['./prenumerant-list.component.scss']
})
export class PrenumerantListComponent implements OnInit {
  private subscription?: Subscription;
  prenumeranter: Prenumerant[] = []
  deliveredPapers: NewsPaperForDelivery[] = []
  mailCount: number= 0
  allNewsPapersReceived: NewsPaperForDelivery[] = [];
  constructor(private parerService: NewsPaperPublisherService, private mailBoxService: MailboxService) { }

  ngOnInit(): void {
    this.prenumeranter = this.parerService.prenumeranter
    this.deliveredPapers = this.mailBoxService.deliveredPapers

     this.mailBoxService.boxHasChanged.subscribe(
       (changedbox: NewsPaperForDelivery[]) => {
         this.deliveredPapers = changedbox;

       }
     )

     this.mailBoxService.mailCount.subscribe(
      (mailCount: number) => {
        this.mailCount = mailCount
      }
     )

     this.subscription = this.mailBoxService.emptyMailbox.subscribe(
      // denna kod körs när .next(newspaper) körs och signalerar en förändring.
      (deliveredPapers: NewsPaperForDelivery[]) => {
        deliveredPapers.forEach(paper => {

          this.allNewsPapersReceived.push(paper);
        })
      }
    );

   }



  onCollect(email: string) {
    this.mailBoxService.boxCleaner(email)
    this.mailBoxService
  }
}
