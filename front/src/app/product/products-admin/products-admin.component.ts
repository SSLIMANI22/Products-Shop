import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CrudItemOptions } from 'app/shared/utils/crud-item-options/crud-item-options.model';
import { ControlType } from 'app/shared/utils/crud-item-options/control-type.model';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {
  allowDelete: boolean = true;
  pagination: boolean = false;
  layout: 'grid';
  visible = true;
  items: Product[];
  filteredItems: Product[];
  config: CrudItemOptions[];
  totalRecords: number
  entity: Product = new Product();
  constructor(private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.items = [
      {
        "id": 1000,
        "code": "f230fh0g3",
        "name": "Bamboo Watch",
        "description": "Product Description",
        "image": "bamboo-watch.jpg",
        "price": 65,
        "category": "Accessories",
        "quantity": 24,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": 1001,
        "code": "nvklal433",
        "name": "Black Watch",
        "description": "Product Description",
        "image": "black-watch.jpg",
        "price": 72,
        "category": "Accessories",
        "quantity": 61,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": 1002,
        "code": "zz21cz3c1",
        "name": "Blue Band",
        "description": "Product Description",
        "image": "blue-band.jpg",
        "price": 79,
        "category": "Fitness",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": 1003,
        "code": "244wgerg2",
        "name": "Blue T-Shirt",
        "description": "Product Description",
        "image": "blue-t-shirt.jpg",
        "price": 29,
        "category": "Clothing",
        "quantity": 25,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": 1004,
        "code": "h456wer53",
        "name": "Bracelet",
        "description": "Product Description",
        "image": "bracelet.jpg",
        "price": 15,
        "category": "Accessories",
        "quantity": 73,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": 1005,
        "code": "av2231fwg",
        "name": "Brown Purse",
        "description": "Product Description",
        "image": "brown-purse.jpg",
        "price": 120,
        "category": "Accessories",
        "quantity": 0,
        "inventoryStatus": "OUTOFSTOCK",
        "rating": 4
      },
      {
        "id": 1006,
        "code": "bib36pfvm",
        "name": "Chakra Bracelet",
        "description": "Product Description",
        "image": "chakra-bracelet.jpg",
        "price": 32,
        "category": "Accessories",
        "quantity": 5,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": 1007,
        "code": "mbvjkgip5",
        "name": "Galaxy Earrings",
        "description": "Product Description",
        "image": "galaxy-earrings.jpg",
        "price": 34,
        "category": "Accessories",
        "quantity": 23,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": 1008,
        "code": "vbb124btr",
        "name": "Game Controller",
        "description": "Product Description",
        "image": "game-controller.jpg",
        "price": 99,
        "category": "Electronics",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 4
      },
      {
        "id": 1009,
        "code": "cm230f032",
        "name": "Gaming Set",
        "description": "Product Description",
        "image": "gaming-set.jpg",
        "price": 299,
        "category": "Electronics",
        "quantity": 63,
        "inventoryStatus": "INSTOCK",
        "rating": 3
      },
      {
        "id": 1010,
        "code": "plb34234v",
        "name": "Gold Phone Case",
        "description": "Product Description",
        "image": "gold-phone-case.jpg",
        "price": 24,
        "category": "Accessories",
        "quantity": 0,
        "inventoryStatus": "OUTOFSTOCK",
        "rating": 4
      },
      {
        "id": 1011,
        "code": "4920nnc2d",
        "name": "Green Earbuds",
        "description": "Product Description",
        "image": "green-earbuds.jpg",
        "price": 89,
        "category": "Electronics",
        "quantity": 23,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": 1012,
        "code": "250vm23cc",
        "name": "Green T-Shirt",
        "description": "Product Description",
        "image": "green-t-shirt.jpg",
        "price": 49,
        "category": "Clothing",
        "quantity": 74,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": 1013,
        "code": "fldsmn31b",
        "name": "Grey T-Shirt",
        "description": "Product Description",
        "image": "grey-t-shirt.jpg",
        "price": 48,
        "category": "Clothing",
        "quantity": 0,
        "inventoryStatus": "OUTOFSTOCK",
        "rating": 3
      },
      {
        "id": 1014,
        "code": "waas1x2as",
        "name": "Headphones",
        "description": "Product Description",
        "image": "headphones.jpg",
        "price": 175,
        "category": "Electronics",
        "quantity": 8,
        "inventoryStatus": "LOWSTOCK",
        "rating": 5
      },
      {
        "id": 1015,
        "code": "vb34btbg5",
        "name": "Light Green T-Shirt",
        "description": "Product Description",
        "image": "light-green-t-shirt.jpg",
        "price": 49,
        "category": "Clothing",
        "quantity": 34,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": 1016,
        "code": "k8l6j58jl",
        "name": "Lime Band",
        "description": "Product Description",
        "image": "lime-band.jpg",
        "price": 79,
        "category": "Fitness",
        "quantity": 12,
        "inventoryStatus": "INSTOCK",
        "rating": 3
      },
      {
        "id": 1017,
        "code": "v435nn85n",
        "name": "Mini Speakers",
        "description": "Product Description",
        "image": "mini-speakers.jpg",
        "price": 85,
        "category": "Clothing",
        "quantity": 42,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": 1018,
        "code": "09zx9c0zc",
        "name": "Painted Phone Case",
        "description": "Product Description",
        "image": "painted-phone-case.jpg",
        "price": 56,
        "category": "Accessories",
        "quantity": 41,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": 1019,
        "code": "mnb5mb2m5",
        "name": "Pink Band",
        "description": "Product Description",
        "image": "pink-band.jpg",
        "price": 79,
        "category": "Fitness",
        "quantity": 63,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": 1020,
        "code": "r23fwf2w3",
        "name": "Pink Purse",
        "description": "Product Description",
        "image": "pink-purse.jpg",
        "price": 110,
        "category": "Accessories",
        "quantity": 0,
        "inventoryStatus": "OUTOFSTOCK",
        "rating": 4
      },
      {
        "id": 1021,
        "code": "pxpzczo23",
        "name": "Purple Band",
        "description": "Product Description",
        "image": "purple-band.jpg",
        "price": 79,
        "category": "Fitness",
        "quantity": 6,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": 1022,
        "code": "2c42cb5cb",
        "name": "Purple Gemstone Necklace",
        "description": "Product Description",
        "image": "purple-gemstone-necklace.jpg",
        "price": 45,
        "category": "Accessories",
        "quantity": 62,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": 1023,
        "code": "5k43kkk23",
        "name": "Purple T-Shirt",
        "description": "Product Description",
        "image": "purple-t-shirt.jpg",
        "price": 49,
        "category": "Clothing",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 5
      },
      {
        "id": 1024,
        "code": "lm2tny2k4",
        "name": "Shoes",
        "description": "Product Description",
        "image": "shoes.jpg",
        "price": 64,
        "category": "Clothing",
        "quantity": 0,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": 1025,
        "code": "nbm5mv45n",
        "name": "Sneakers",
        "description": "Product Description",
        "image": "sneakers.jpg",
        "price": 78,
        "category": "Clothing",
        "quantity": 52,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": 1026,
        "code": "zx23zc42c",
        "name": "Teal T-Shirt",
        "description": "Product Description",
        "image": "teal-t-shirt.jpg",
        "price": 49,
        "category": "Clothing",
        "quantity": 3,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": 1027,
        "code": "acvx872gc",
        "name": "Yellow Earbuds",
        "description": "Product Description",
        "image": "yellow-earbuds.jpg",
        "price": 89,
        "category": "Electronics",
        "quantity": 35,
        "inventoryStatus": "INSTOCK",
        "rating": 3
      },
      {
        "id": 1028,
        "code": "tx125ck42",
        "name": "Yoga Mat",
        "description": "Product Description",
        "image": "yoga-mat.jpg",
        "price": 20,
        "category": "Fitness",
        "quantity": 15,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": 1029,
        "code": "gwuby345v",
        "name": "Yoga Set",
        "description": "Product Description",
        "image": "yoga-set.jpg",
        "price": 20,
        "category": "Fitness",
        "quantity": 25,
        "inventoryStatus": "INSTOCK",
        "rating": 8
      }
    ];
    this.totalRecords = this.items.length
    this.config = [
      { key: 'id', label: 'ID', controlType: ControlType.INPUT, type: 'number', columnOptions: { default: false, sortable: true, filterable: true } },
      { key: 'code', label: 'Code', controlType: ControlType.INPUT, type: 'text', columnOptions: { default: true, sortable: true, filterable: true } },
      { key: 'name', label: 'Name', controlType: ControlType.INPUT, type: 'text', columnOptions: { default: true, sortable: true, filterable: true } },
      { key: 'description', label: 'Description', controlType: ControlType.INPUT, type: 'text', columnOptions: { default: false, sortable: false, filterable: false } },
      { key: 'image', label: 'Image', controlType: ControlType.INPUT, type: 'text', columnOptions: { default: false, sortable: false, filterable: false } },
      { key: 'price', label: 'Price', controlType: ControlType.INPUT, type: 'number', columnOptions: { default: false, sortable: true, filterable: true } },
      {
        key: 'category', label: 'Category', controlType: ControlType.SELECT, columnOptions: { default: false, sortable: true, filterable: true },
        options: [
          { label: 'Electronics', value: 'electronics' },
          { label: 'Books', value: 'books' },
          { label: 'Clothing', value: 'clothing' }
        ]
      },
      { key: 'quantity', label: 'Quantity', controlType: ControlType.INPUT, type: 'number', columnOptions: { default: false, sortable: true, filterable: true } },
      { key: 'inventoryStatus', label: 'Inventory Status', controlType: ControlType.INPUT, type: 'text', columnOptions: { default: false, sortable: true, filterable: true } },
      { key: 'rating', label: 'Rating', controlType: ControlType.INPUT, type: 'number', columnOptions: { default: false, sortable: true, filterable: true } }
    ]
  }
  public onSaved(event: Product): void {
    const index = this.filteredItems.findIndex(item => item.id === event.id);
    if (index === -1) {
      this.filteredItems.push(event);
    } else {
      this.filteredItems[index] = event;
    }
  }

  public onDeleted(event: number[]): void {
    this.filteredItems = this.filteredItems.filter(item => !event.includes(item.id));
  }

  public onLazyLoaded(event): void {
    let filteredData = [...this.items];

    if (event.filters) {
      for (const field in event.filters) {
        const filterValue = event.filters[field].value;
        const matchMode = event.filters[field].matchMode;
        if (filterValue !== null && filterValue !== undefined) {
          filteredData = filteredData.filter(item => {
            if (matchMode === 'startsWith') {
              return item[field].toString().toLowerCase().startsWith(filterValue.toLowerCase());
            } else if (matchMode === 'contains') {
              return item[field].toString().toLowerCase().includes(filterValue.toLowerCase());
            }
            return true;
          });
        }
      }
    }
    if (event.sortField) {
      filteredData.sort((a, b) => {
        let valueA = a[event.sortField];
        let valueB = b[event.sortField];

        if (typeof valueA === 'string') {
          valueA = valueA.toLowerCase();
        }
        if (typeof valueB === 'string') {
          valueB = valueB.toLowerCase();
        }

        if (valueA < valueB) {
          return event.sortOrder === 1 ? -1 : 1;
        } else if (valueA > valueB) {
          return event.sortOrder === 1 ? 1 : -1;
        } else {
          return 0;
        }
      });
    }
    const start = event.first;
    const end = start + event.rows;
    this.filteredItems = filteredData.slice(start, end);
    this.totalRecords = filteredData.length;
    this.cdr.detectChanges();

  }

}
