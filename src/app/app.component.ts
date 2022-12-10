import { Component } from '@angular/core';
import { Employee } from './models/Employee';
import { Employees } from './models/Employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employeesList: Array<Employee> = [
    new Employee(1, 'Mark', 25, { id: 1, name: 'Google' }, true),
    new Employee(2, 'John', 30, { id: 2, name: 'Microsoft' }, false),
    new Employee(3, 'Mary', 28, { id: 3, name: 'Facebook' }, true),
  ];
}
