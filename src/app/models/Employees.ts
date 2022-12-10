import { Employee } from './Employee';

export class Employees {
  constructor(private _employeeList: Array<Employee>) {}

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
