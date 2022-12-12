import { Injectable } from '@angular/core';
import { Company } from 'src/app/models/Company';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  constructor() {}

  companiesList: Array<Company> = [
    new Company(1, 'Google', 10000, 'Mountain View, CA'),
    new Company(2, 'Microsoft', 20000, 'Redmond, WA'),
    new Company(3, 'Facebook', 30000, 'Menlo Park, CA'),
    new Company(4, 'Apple', 40000, 'Cupertino, CA'),
    new Company(5, 'Amazon', 50000, 'Seattle, WA'),
    new Company(6, 'IBM', 60000, 'Armonk, NY'),
    new Company(7, 'Oracle', 70000, 'Redwood City, CA'),
    new Company(8, 'Intel', 80000, 'Santa Clara, CA'),
    new Company(9, 'Cisco', 90000, 'San Jose, CA'),
    new Company(10, 'SAP', 100000, 'Walldorf, Germany'),
  ];

  get companies() {
    return this.companiesList;
  }

  set companies(companies: Array<Company>) {
    this.companiesList = companies;
  }
}
