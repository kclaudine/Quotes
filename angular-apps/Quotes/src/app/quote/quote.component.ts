import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'Love For All, Hatred For None.', ' Amy Poehler',new Date(2020,3,140)),
    new Quote(2, 'Every moment is a fresh beginning', 'T.S Eliot',new Date(2019,6,9)),
    new Quote(3, 'Die with memories, not dreams', 'Unknown',new Date(2022,1,12)),
    new Quote(4, 'Aspire to inspire before we expire', 'Unknown',new Date(2019,0,18)),
    new Quote(5, 'Everything you can imagine is real', 'Pablo Picasso',new Date(2019,2,14)),
    new Quote(6, 'Whatever you do, do it well','Walt Disney',new Date(2030,3,14)),
  ];

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
