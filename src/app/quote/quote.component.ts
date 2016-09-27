import { Component, OnInit } from '@angular/core';
//import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  public quote : String = '';
  public author : String = '';
  public id : String = '';

  //constructor(private af: AngularFire) { }

  ngOnInit() {
    // this.af.database.list('quotes').subscribe( (quotes) => {
    //   console.log(quotes);
    //   var randomIdx = Math.floor(Math.random() * quotes.length);
    //   var quoteObj = quotes[randomIdx];
    //   this.quote = quoteObj.quote;
    //   this.author = quoteObj.author;
    // }, (error:any) => {
    //   console.log(error);
    // });
  }

  OnNextQuote() {

  }

}
