import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsPaperPublisherService } from '../news-paper-publisher.service';
import { NewsPaper } from "../news-paper-publisher/NewsPaper.model";

@Component({
  selector: 'app-news-paper-subscriber',
  templateUrl: './news-paper-subscriber.component.html',
  styleUrls: ['./news-paper-subscriber.component.scss']
})
export class NewsPaperSubscriberComponent implements OnInit {

  public latestEditionPickedUpFromMailbox?: NewsPaper;


  //TODO: move to post box component
  private subscription?: Subscription;

  //TODO: ?  move to post box component
  allNewsPapersReceived: NewsPaper[] = [];
  public subscriptionIsActive: boolean = false;

  constructor(private paperService: NewsPaperPublisherService) { }

  ngOnInit(): void {
  }



  subscribeToNewsPaper(): void {

    this.subscriptionIsActive = true;

    //TODO: move to news paper publisher service, handling the subscriptions via user.Id or  user.email/address
    this.subscription = this.paperService.newEditionPublished.subscribe(
      // denna kod körs när .next(newspaper) körs och signalerar en förändring.
      (newEdition: NewsPaper) => {
        this.allNewsPapersReceived.push(newEdition);
      }
    );
  }

  /**
   *  hämta allt innehåll i brevlådan. (i e tidningar)
   */
  pickupMailFromMailbox(): void{

  }

}
