export class Product {
  constructor(
    private _id: number,
    private _name: string,
    private _price: number,
    private _isFavourite: boolean
  ) {}

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get isFavourite(): boolean {
    return this._isFavourite;
  }

  set id(id: number) {
    this._id = id;
  }

  set name(name: string) {
    this._name = name;
  }

  set price(price: number) {
    this._price = price;
  }

  set isFavourite(isFavourite: boolean) {
    this._isFavourite = isFavourite;
  }
}
