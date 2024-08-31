import { Component } from '@angular/core';
import { IPerson } from '../../../core/models/interface/IPerson';
import { IStudent } from '../../../core/models/interface/Student';
import { Student } from '../../../core/models/class/Student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-model-example',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './model-example.component.html',
  styleUrl: './model-example.component.css',
})
export class ModelExampleComponent {
  persons: IPerson[] = [];

  personsData = [
    { name: 'John', age: 25, city: 'San Francisco' },
    { name: 'Jane', age: 30, city: 'Pune' },
    { name: 'Mike', age: 28, city: 'Sangli' },
    {
      name: 'Lisa',
      age: 22,
      city: 'Mumbai',
    },
    {
      name: 'Tom',
      age: 35,
      city: 'Delhi',
    },
    {
      name: 'Sara',
      age: 27,
      city: 'Boston',
    },
  ];

  // personsData = ['name', 'age', 'city'];
  getPersons() {
    this.persons = this.personsData;
    console.log(this.persons);
  }

  student: Student = new Student();

  showStudent() {
    console.log(this.student);
  }

  signup() {
    alert(this.student);
    console.log(this.student);
  }
}
