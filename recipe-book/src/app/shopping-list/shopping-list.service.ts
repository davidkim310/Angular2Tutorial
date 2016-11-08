import { Ingredient } from '../shared/ingredient';

export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }
  
  addItems(items: Ingredient[]) {
    //pushes multiple items with just this line
    Array.prototype.push.apply(this.items, items);
  }
}
