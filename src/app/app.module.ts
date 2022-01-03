import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsPaperPublisherComponent } from './news-paper-publisher/news-paper-publisher.component';
import { NewsPaperSubscriberComponent } from './news-paper-subscriber/news-paper-subscriber.component';
import { NewsPaperSubscriberMailboxComponent } from './news-paper-subscriber/news-paper-subscriber-mailbox/news-paper-subscriber-mailbox.component';
import { MailDeliveryDistributorComponent } from './mail-delivery-distributor/mail-delivery-distributor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule  } from "@angular/material/card";
import { MatButtonModule  } from "@angular/material/button";
import { MatButtonToggleModule  } from "@angular/material/button-toggle";
@NgModule({
  declarations: [
    AppComponent,
    NewsPaperPublisherComponent,
    NewsPaperSubscriberComponent,
    NewsPaperSubscriberMailboxComponent,
    MailDeliveryDistributorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
