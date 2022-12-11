import { Component } from '@angular/core';
import { Employee } from './models/Employee';
import { Product } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  totalFavs: number = 0;

  employeesList: Array<Employee> = [
    new Employee(1, 'Mark', 25, { id: 1, name: 'Google' }, true),
    new Employee(2, 'John', 30, { id: 2, name: 'Microsoft' }, false),
    new Employee(3, 'Mary', 28, { id: 3, name: 'Facebook' }, true),
    new Employee(4, 'Steve', 35, { id: 1, name: 'Google' }, false),
    new Employee(5, 'Bill', 40, { id: 2, name: 'Microsoft' }, true),
    new Employee(6, 'Ram', 45, { id: 3, name: 'Facebook' }, false),
  ];
  productList: Array<Product> = [
    new Product(1, 'Laptop', 2000, true),
    new Product(2, 'Mobile', 1000, false),
    new Product(3, 'Tablet', 1500, true),
    new Product(4, 'Desktop', 3000, false),
    new Product(5, 'Monitor', 500, true),
    new Product(6, 'Keyboard', 100, false),
  ];

  getFavs(event: any) {
    this.totalFavs = event.totalFavs;
  }
}
