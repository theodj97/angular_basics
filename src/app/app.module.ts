import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { CompaniesComponent } from './companies/companies.component';
import { ProductsComponent } from './products/products.component';
import { EmployeesService } from './services/employees/employees.service';
import { CompaniesService } from './services/companies/companies.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    CompaniesComponent,
    ProductsComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [EmployeesService, CompaniesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
