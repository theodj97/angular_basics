import { Injectable } from '@angular/core';
import { Employee } from '../../models/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  _employeeList: Array<Employee> = [
    new Employee(1, 'Mark', 25, { id: 1, name: 'Google' }, true),
    new Employee(2, 'John', 30, { id: 2, name: 'Microsoft' }, false),
    new Employee(3, 'Mary', 28, { id: 3, name: 'Facebook' }, true),
    new Employee(4, 'Steve', 35, { id: 1, name: 'Google' }, false),
    new Employee(5, 'Bill', 40, { id: 2, name: 'Microsoft' }, true),
    new Employee(6, 'Ram', 45, { id: 3, name: 'Facebook' }, false),
  ];

  constructor() {}

  get employeeList(): any {
    return this._employeeList;
  }

  set employeeList(employeeList: Array<Employee>) {
    this._employeeList = employeeList;
  }

  addEmployee(employee: Employee) {
    this._employeeList?.push(employee);
  }

  deleteEmployee(employee: Employee) {
    this._employeeList?.splice(this._employeeList.indexOf(employee), 1);
  }

  updateEmployee(employee: Employee) {
    this._employeeList![this._employeeList!.indexOf(employee)] = employee;
  }
}
