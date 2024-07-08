export class Product {
  id: number;
  code: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  inventoryStatus: string;
  category: string;
  image?: string;
  rating?: number;

  constructor() {
    this.id = 0;
    this.code = '';
    this.name = '';
    this.description = '';
    this.price = 0;
    this.quantity = 0;
    this.inventoryStatus = '';
    this.category = '';
    this.image = '';
    this.rating = 0;
  }
}
