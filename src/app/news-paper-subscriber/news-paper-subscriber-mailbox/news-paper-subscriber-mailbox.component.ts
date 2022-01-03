import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-paper-subscriber-mailbox',
  templateUrl: './news-paper-subscriber-mailbox.component.html',
  styleUrls: ['./news-paper-subscriber-mailbox.component.scss']
})
export class NewsPaperSubscriberMailboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onEmptyMailbox() {
    console.log('mailmail')
  }

}
