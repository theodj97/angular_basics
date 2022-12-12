import { Component } from '@angular/core';
import { Employee } from './models/Employee';
import { Product } from './models/Product';
import { EmployeesService } from './services/employees/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  totalFavs: number = 0;

  // I made product list not a service because I want to show how to pass data between components
  productList: Array<Product> = [
    new Product(1, 'Laptop', 2000, true),
    new Product(2, 'Mobile', 1000, false),
    new Product(3, 'Tablet', 1500, true),
    new Product(4, 'Desktop', 3000, false),
    new Product(5, 'Monitor', 500, false),
    new Product(6, 'Keyboard', 100, true),
    new Product(7, 'Mouse', 50, true),
    new Product(8, 'Printer', 200, false),
    new Product(9, 'Scanner', 150, false),
    new Product(10, 'Camera', 300, true),
    new Product(11, 'Speaker', 100, false),
    new Product(12, 'Headphone', 50, true),
  ];

  getFavs(event: any) {
    this.totalFavs = event.totalFavs;
  }
}
