import { Component, OnInit } from '@angular/core';
import { NewsPaperPublisherService } from '../news-paper-publisher.service';
import { NewsPaper } from "../news-paper-publisher/NewsPaper.model";

@Component({
  selector: 'app-mail-delivery-distributor',
  templateUrl: './mail-delivery-distributor.component.html',
  styleUrls: ['./mail-delivery-distributor.component.scss']
})
export class MailDeliveryDistributorComponent implements OnInit {
  subscription: any;

  constructor(private paperService: NewsPaperPublisherService) { }

  ngOnInit(): void {


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
        () => console.log('picked up paper from DN')
      , 1000)

      //TODO: deliver to subscribers.

  }

  /**
   * deliver to subscribers mailbox.
   * TODO: add logic for handling subscriber address
   */
  deliverToSubscriber(): void {


  }

}
