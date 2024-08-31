import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-control-flow',
  standalone: true,
  imports: [NgClass],
  templateUrl: './for-control-flow.component.html',
  styleUrl: './for-control-flow.component.css',
})
export class ForControlFlowComponent {
  // students = [
  //   {
  //     roleNo: 1,
  //     name: 'omkar',
  //   },
  //   {
  //     roleNo: 2,
  //     name: 'John',
  //   },
  //   {
  //     roleNo: 3,
  //     name: 'Ravi',
  //   },
  //   {
  //     roleNo: 4,
  //     name: 'Rahul',
  //   },
  //   {
  //     roleNo: 5,
  //     name: 'Suresh',
  //   },
  //   {
  //     roleNo: 6,
  //     name: 'Mahesh',
  //   },
  // ];
  students: any = [];
}
