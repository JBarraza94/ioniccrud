export class NavPassDataService {
  private dataToNavigate: any;
  constructor() {}

  public setData(dataToSet) {
    this.dataToNavigate = dataToSet;
  }

  getData() {
    return this.dataToNavigate;
  }
}