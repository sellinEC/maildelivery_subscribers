import { Component, OnInit } from '@angular/core';
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
  prenumeranter: Prenumerant[] = []
  deliveredPapers: NewsPaperForDelivery[] = []
  constructor(private parerService: NewsPaperPublisherService, private mailBoxService: MailboxService) { }

  ngOnInit(): void {
    this.prenumeranter = this.parerService.prenumeranter
    this.deliveredPapers = this.mailBoxService.deliveredPapers

     this.mailBoxService.boxHasChanged.subscribe(
       (changedbox: NewsPaperForDelivery[]) => {
         this.deliveredPapers = changedbox;

       }
     )



   }



  onCollect(email: string) {
    this.mailBoxService.boxCleaner(email)
  }
}
