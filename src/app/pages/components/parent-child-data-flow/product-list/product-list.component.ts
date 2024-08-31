import { Component } from '@angular/core';
import { IProduct } from '../../../../core/models/interface/IProduct';
import { ProductCardComponent } from '../../../../shared/reusable/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  productData: IProduct[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'This is Product 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      description: 'This is Product 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      description: 'This is Product 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 400,
      description: 'This is Product 4',
      image: 'https://via.placeholder.com/150',
    },
  ];

  getMessageFromChild(value: string) {
    console.log('Message from child: ', value);
    alert('Message from child: ' + value);
  }

  deleteProduct(id: number) {
    this.productData = this.productData.filter((product) => product.id != id);
  }
}
