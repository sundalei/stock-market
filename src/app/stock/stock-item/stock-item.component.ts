import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockItemComponent implements OnInit {

  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  ngOnInit(): void {
      
  }

  onToggleFavorite(event) {
    this.toggleFavorite.emit(this.stock);
  }

  changeStockPrice() {
    this.stock.price += 5;
  }
}
