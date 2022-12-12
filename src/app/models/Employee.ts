import { Company } from './Company';

export class Employee {
  constructor(
    private _id: number,
    private _name: string,
    private _age: number,
    private _company: Company,
    private _isWorking: boolean
  ) {}

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  get company(): any {
    return this._company;
  }

  get isWorking(): boolean {
    return this._isWorking;
  }

  set id(id: number) {
    this._id = id;
  }

  set name(name: string) {
    this._name = name;
  }

  set age(age: number) {
    this._age = age;
  }

  set company(company: any) {
    this._company = company;
  }

  set isWorking(isWorking: boolean) {
    this._isWorking = isWorking;
  }
}
