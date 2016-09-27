import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {

  quotes : FirebaseListObservable<any>;

  constructor(private af : AngularFire) { }

  ngOnInit() {
    this.quotes = this.af.database.list('quotes',
      {
        query: {
          orderByChild: 'author'
        }
      });
  }

}
