
export class Model<T> {

  data: T;

  constructor (data: T) {
    this.data = data;
  }

  toJSON() {
    return JSON.parse(JSON.stringify(this.data));
  }

}
