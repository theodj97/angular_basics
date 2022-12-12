import { Injectable } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { Employee } from '../../models/Employee';
import { CompaniesService } from '../companies/companies.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private _companyService: CompaniesService) {}

  _employeeList: Array<Employee> = [
    new Employee(1, 'Mark', 25, this._companyService.companiesList[0], true),
    new Employee(2, 'John', 30, this._companyService.companiesList[3], false),
    new Employee(3, 'Mary', 28, this._companyService.companiesList[1], true),
    new Employee(4, 'Steve', 35, this._companyService.companiesList[2], false),
    new Employee(5, 'Bill', 40, this._companyService.companiesList[0], true),
    new Employee(6, 'Ram', 45, this._companyService.companiesList[4], true),
    new Employee(7, 'Shyam', 50, this._companyService.companiesList[5], true),
    new Employee(8, 'Mohan', 55, this._companyService.companiesList[6], false),
    new Employee(9, 'Rohan', 60, this._companyService.companiesList[7], true),
    new Employee(10, 'Sohan', 65, this._companyService.companiesList[8], false),
  ];

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
