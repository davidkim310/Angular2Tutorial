export class DataService {
  private data: string[] = [];
  //data service
  addData(input: string) {
    this.data.push(input)
  }
  getData() {
    return this.data;
  }
}
