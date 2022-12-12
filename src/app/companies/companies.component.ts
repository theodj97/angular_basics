import { Component } from '@angular/core';
import { Company } from '../models/Company';
import { CompaniesService } from '../services/companies/companies.service';

@Component({
  selector: 'companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent {
  companiesList: Array<Company>;

  foundResult?: Array<Company>;
  inputTwoWay = '';

  constructor(private _companiesService: CompaniesService) {
    this.companiesList = this._companiesService.companiesList;
    this.foundResult = this.companiesList;
  }

  inputCompany($event: Event) {
    if (($event.target as HTMLInputElement).value === '') {
      this.foundResult = this.companiesList;
      return;
    }

    this.foundResult = this.companiesList.filter((company) =>
      company.name
        .toLocaleLowerCase()
        .includes(($event.target as HTMLInputElement).value.toLocaleLowerCase())
    );
  }

  Uppercase() {
    this.inputTwoWay = this.inputTwoWay.toLocaleUpperCase();
  }

  Lowercase() {
    this.inputTwoWay = this.inputTwoWay.toLocaleLowerCase();
  }
}
