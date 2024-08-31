import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { zip } from 'rxjs';

@Component({
  selector: 'app-deault-pipes',
  standalone: true,
  imports: [
    /*CommonModule*/ DecimalPipe,JsonPipe,
    PercentPipe,
    CurrencyPipe,
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
  ],
  templateUrl: './deault-pipes.component.html',
  styleUrl: './deault-pipes.component.css',
})
export class DeaultPipesComponent {
  institute = 'spark';
  course = 'ANGULAR';
  str =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dicta optio quos.';
  date = new Date();
  price = 1000;
  mark = 0.78;
  person = {
    name: 'Rhaul',
    age: 21,
    address: {
      street: '123 galli',
      city: 'pune',
      state: 'MH',
      zip: '833838',
    },
  };
  floatValue = 5.564;
}
