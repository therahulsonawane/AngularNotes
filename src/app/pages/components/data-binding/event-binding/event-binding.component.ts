import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  city: string = 'pune';
  onChange = (event: any) => {
    this.city = event.target.value;
  };

  mobile = '8945468745';
  changeNumber = (event: any) => {
    console.log(event.value);
    this.mobile = event.value;
  };

  getElement = (ele: any) => {
    let element: any = document.getElementById('inputMobile');
    console.log('by id: ', element);
    console.log('by id: ', element.value);

    console.log('by template variable: ', ele);
    console.log('by template variable: ', ele.value);
  };
}
