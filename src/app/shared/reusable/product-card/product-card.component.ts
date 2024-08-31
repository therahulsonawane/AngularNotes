import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../core/models/interface/IProduct';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product: IProduct = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    image: '',
  };

  @Output() showMessage = new EventEmitter();

  emitShowMessage() {
    this.showMessage.emit('this is from child');
  }

  @Output() deleteProduct = new EventEmitter();
}
