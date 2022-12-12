import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Company } from '../models/Company';
import { Employee } from '../models/Employee';
import { CompaniesService } from '../services/companies/companies.service';
import { EmployeesService } from '../services/employees/employees.service';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
  constructor(
    private _employeeService: EmployeesService,
    private _companyService: CompaniesService
  ) {
    this.employeeList = _employeeService.employeeList;
    this.companies = this._companyService.companiesList;
  }

  employeeList: Array<Employee>;
  companies: Array<Company> = [];
  updatingEmployee: boolean = false;
  private updatingEmployeeObj?: Employee;

  // companies = [
  //   { id: 1, name: 'Google' },
  //   { id: 2, name: 'Microsoft' },
  //   { id: 3, name: 'Facebook' },
  // ];

  addEmployeeForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern('[a-zA-Z]+'),
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(150),
      Validators.pattern('[0-9]+'),
    ]),
    company: new FormControl(this.companies[this.companies.length + 1], [
      Validators.required,
    ]),
    isWorking: new FormControl(false),
  });

  updateEmployeeForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern('[a-zA-Z]+'),
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(150),
      Validators.pattern('[0-9]+'),
    ]),
    company: new FormControl(this.companies[this.companies.length + 1], [
      Validators.required,
    ]),
    isWorking: new FormControl(false),
  });

  get AEName() {
    return this.addEmployeeForm.get('name');
  }

  get AEAge() {
    return this.addEmployeeForm.get('age');
  }

  get AECompany() {
    return this.addEmployeeForm.get('company');
  }

  get AEIsWorking() {
    return this.addEmployeeForm.get('isWorking');
  }

  get UEName() {
    return this.updateEmployeeForm.get('name');
  }

  get UEAge() {
    return this.updateEmployeeForm.get('age');
  }

  get UECompany() {
    return this.updateEmployeeForm.get('company');
  }

  get UEIsWorking() {
    return this.updateEmployeeForm.get('isWorking');
  }

  addEmployee() {
    let newEmployee = new Employee(
      this.employeeList.length + 1,
      this.AEName!.value!,
      Number(this.AEAge!.value!),
      this.companies.find((c) => c.id === this.AECompany?.value?.id)!,
      this.AEIsWorking!.value!
    );
    this._employeeService!.addEmployee(newEmployee);
    this.clearForm(this.addEmployeeForm);
  }

  deleteEmployee(employee: Employee) {
    this._employeeService?.deleteEmployee(employee);
    this.clearForm(this.updateEmployeeForm);
    this.updatingEmployee = false;
  }

  formUpdate(employee: Employee) {
    this.updatingEmployee = true;
    this.updatingEmployeeObj = employee;
    this.updateEmployeeForm.setValue({
      name: employee.name,
      age: employee.age.toString(),
      company: this.companies.find((c) => c.id === employee.company.id)!,
      isWorking: employee.isWorking,
    });
  }

  updateEmployee() {
    this.updatingEmployeeObj!.name = this.UEName!.value!;
    this.updatingEmployeeObj!.age = Number(this.UEAge!.value!);
    this.updatingEmployeeObj!.company = this.UECompany!.value!;
    this.updatingEmployeeObj!.isWorking = this.UEIsWorking!.value!;
    this._employeeService?.updateEmployee(this.updatingEmployeeObj!);
    this.updatingEmployee = false;
  }

  private clearForm(form: FormGroup) {
    form.reset();
  }
}
