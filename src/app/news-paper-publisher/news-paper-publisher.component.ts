import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MailDeliveryService } from '../mail-delivery-distributor/MailDeliveryService.service';
import { Prenumerant } from '../mail-delivery-distributor/Prenumerant.model';
import { NewsPaperPublisherService } from '../news-paper-publisher.service';

import { NewsPaper } from './NewsPaper.model';





@Component({
  selector: 'app-news-paper-publisher',
  templateUrl: './news-paper-publisher.component.html',
  styleUrls: ['./news-paper-publisher.component.scss']
})
export class NewsPaperPublisherComponent implements OnInit {

  /**
   *
   * hanterar signalering av när en ny utgåva finns tillgänglig för prenumeranterna ;
   *
   * @example
   * prenumerera med .subscribe("DIN funktion här som ska agera på nästa utgåva")
   * publicera ny utgåva genom att använda .next(newsPaper);
   */
  // public newEditionPublished = new Subject<NewsPaper>();
  prenumeranter: Prenumerant[] = []

  public allPublishedEditions: NewsPaper[] = [];

  constructor(private paperService : NewsPaperPublisherService, private postalService: MailDeliveryService) { }

  ngOnInit(): void {
    this.prenumeranter = this.paperService.prenumeranter
  }


  publishNewEdition (): void {

    let nextEditionNumber = this.allPublishedEditions.length +1;
    let printDate = new Date().getDate();

    let newEdition = new NewsPaper(
      "DN",
      nextEditionNumber,
      printDate.toString()
      , "Dagens huvudrubrik " + nextEditionNumber);

      this.allPublishedEditions.push(newEdition);
      this.paperService.newEditionPublished.next(newEdition);

      console.log(`newEdition`, newEdition)
  }

/**
 *
 * newsPaperDeliveryService.newEditionPublished
.next(newspaper);
 *
 */

}
