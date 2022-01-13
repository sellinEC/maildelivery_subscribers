import { Component, OnInit } from '@angular/core';
import { NewsPaperPublisherService } from '../news-paper-publisher.service';
import {MailDeliveryService} from './MailDeliveryService.service'
import { NewsPaper, NewsPaperForDelivery } from "../news-paper-publisher/NewsPaper.model";

@Component({
  selector: 'app-mail-delivery-distributor',
  templateUrl: './mail-delivery-distributor.component.html',
  styleUrls: ['./mail-delivery-distributor.component.scss']
})
export class MailDeliveryDistributorComponent implements OnInit {
  subscription: any;
  outbox: NewsPaperForDelivery[] = []

  constructor(private paperService: NewsPaperPublisherService, private mailDeliveryService: MailDeliveryService ) { }

  ngOnInit(): void {
    this.outbox = this.mailDeliveryService.papersForDelivery

    this.subscription = this.paperService.newEditionPublished.subscribe(
      // denna kod körs när .next(newspaper) körs och signalerar en förändring.
      (newEdition: NewsPaper) => {
        this.pickupFromDN(newEdition);
      }
    );
  }

  /**
   *
   * @param newEdition simulating picking up from DN.
   */
  pickupFromDN(newEdition: NewsPaper): void{

    console.log(`pickup new edition from DN`, newEdition)

    setTimeout(
        () =>  {
          console.log('picked up paper from DN')
          // this.mailDeliveryService.papersForDelivery.push(newEdition)
          //Associera tidning med prenumerant:
          this.paperService.prenumeranter.forEach(prenumerant => {
            this.mailDeliveryService.handleOutboxPapers(prenumerant.email, newEdition)
          });

          console.log(...this.outbox)
        }
      , 1000)

      //TODO: deliver to subscribers.

  }

  /**
   * deliver to subscribers mailbox.
   * TODO: add logic for handling subscriber address
   */
  onDeliverToSubscriber(): void {
    this.mailDeliveryService.papersForDelivery.forEach(paper => {
      this.mailDeliveryService.paperDelivery.next(paper)
    })
    //clear papers after delivery
    this.outbox = []
    this.mailDeliveryService.emptyBox()

  }

}
