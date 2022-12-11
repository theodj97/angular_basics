export class Company {
  constructor(
    private _id: number,
    private _name: string,
    private _workers: number,
    private _location: string
  ) {}

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get workers(): number {
    return this._workers;
  }

  get location(): string {
    return this._location;
  }

  set id(id: number) {
    this._id = id;
  }

  set name(name: string) {
    this._name = name;
  }

  set workers(workers: number) {
    this._workers = workers;
  }

  set location(location: string) {
    this._location = location;
  }
}
