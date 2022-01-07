import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MailDeliveryService } from '../mail-delivery-distributor/MailDeliveryService.service';
import { Prenumerant } from '../mail-delivery-distributor/Prenumerant.model';
import { NewsPaperPublisherService } from '../news-paper-publisher.service';
import { NewsPaper, NewsPaperForDelivery } from "../news-paper-publisher/NewsPaper.model";


@Component({
  selector: 'app-news-paper-subscriber',
  templateUrl: './news-paper-subscriber.component.html',
  styleUrls: ['./news-paper-subscriber.component.scss']
})
export class NewsPaperSubscriberComponent implements OnInit {

  public latestEditionPickedUpFromMailbox?: NewsPaper;
  prenumerant = new Prenumerant('fritte', 'mail@mail.com' )

  //TODO: move to post box component
  private subscription?: Subscription;

  //TODO: ?  move to post box component
  allNewsPapersReceived: NewsPaper[] = [];
  public subscriptionIsActive: boolean = false;

  constructor(private paperService: NewsPaperPublisherService, private postalService: MailDeliveryService) { }

  ngOnInit(): void {
  }



  subscribeToNewsPaper(): void {

    this.subscriptionIsActive = true;

    //TODO: move to news paper publisher service, handling the subscriptions via user.Id or  user.email/address
    this.subscription = this.postalService.emptyMailbox.subscribe(
      // denna kod körs när .next(newspaper) körs och signalerar en förändring.
      (deliveredPaper: NewsPaperForDelivery) => {
        this.allNewsPapersReceived.push(deliveredPaper);
      }
    );

    this.paperService.addPrenumerant(this.prenumerant)


  }

  /**
   *  hämta allt innehåll i brevlådan. (i e tidningar)
   */
  pickupMailFromMailbox(): void{

  }

}
