import { Component, OnInit } from '@angular/core';

import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styles: [`
  .stock-container {
    border: 1px solid black;
    border-radius: 5px;
    display: inline-block;
    padding: 10px;
  }
  
  .stock-container .name h3, .stock-container .name h4 {
    display: inline-block;
  }
  
  .positive {
    color: green;
  }
  
  .negative {
    color: red;
  }
  
  .large-change {
    font-size: 1.2em;
  }
  
  .small-change {
    font-size: 0.8em;
  }
  `]
})
export class StockItemComponent implements OnInit {

  public stocks: Array<Stock>;
  public stockStyles;

  constructor() { }

  ngOnInit(): void {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765)
    ];
  }

  toggleFavorite(event, index) {
    console.log('We are toggling the favorite state for this stock', index, event);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }

  trackStockByCode(index, stock) {
    return stock.code;
  }
}
