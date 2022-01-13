import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MailDeliveryService } from '../mail-delivery-distributor/MailDeliveryService.service';
import { Prenumerant } from '../mail-delivery-distributor/Prenumerant.model';
import { NewsPaperPublisherService } from '../news-paper-publisher.service';
import { NewsPaper, NewsPaperForDelivery } from "../news-paper-publisher/NewsPaper.model";
import { MailboxService } from './news-paper-subscriber-mailbox/MailboxService.service';


@Component({
  selector: 'app-news-paper-subscriber',
  templateUrl: './news-paper-subscriber.component.html',
  styleUrls: ['./news-paper-subscriber.component.scss']
})
export class NewsPaperSubscriberComponent implements OnInit {
  @ViewChild('form')
  public latestEditionPickedUpFromMailbox?: NewsPaper;
  // prenumerant = new Prenumerant('fritte', 'mail@mail.com' )

  //TODO: move to post box component
  // private subscription?: Subscription;

  //TODO: ?  move to post box component
  // allNewsPapersReceived: NewsPaperForDelivery[] = [];
  public subscriptionIsActive: boolean = false;

  constructor(private paperService: NewsPaperPublisherService, private postalService: MailDeliveryService, private mailBoxService: MailboxService) { }

  ngOnInit(): void {
  }



  subscribeToNewsPaper(form: NgForm): void {
    this.subscriptionIsActive = true;


    // this.subscription = this.mailBoxService.emptyMailbox.subscribe(
    //   // denna kod körs när .next(newspaper) körs och signalerar en förändring.
    //   (deliveredPapers: NewsPaperForDelivery[]) => {
    //     deliveredPapers.forEach(paper => {

    //       this.allNewsPapersReceived.push(paper);
    //     })
    //   }
    // );


    const value = form.value
    const newPrenumerant = new Prenumerant(value.name, value.email);

      this.paperService.addPrenumerant(newPrenumerant)


    form.reset();
    // this.paperService.addPrenumerant(this.prenumerant)


  }

  /**
   *  hämta allt innehåll i brevlådan. (i e tidningar)
   */
  pickupMailFromMailbox(): void{

  }

  onPrenumerera(form: NgForm) {
    const value = form.value
    const newPrenumerant = new Prenumerant(value.name, value.email);

      this.paperService.addPrenumerant(newPrenumerant)


    form.reset();

  }
}


