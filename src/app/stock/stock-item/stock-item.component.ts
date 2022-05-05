import { Component, OnInit } from '@angular/core';

import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  template: `
    <div class="stock-container" *ngFor="let stock of stocks; index as i; trackBy: trackStockByCode">
      <div class="name">{{stock.name + ' (' + stock.code + ')'}}</div>
      <div class="price"
       [class]="stock.isPositiveChange() ? 'positive' : 'negative'">$ {{stock.price}}</div>
      <button (click)="toggleFavorite($event, i)" *ngIf="!stock.favorite">Add to Favorite</button>
    </div>
  `,
  styleUrls: ['./stock-item.component.css']
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
