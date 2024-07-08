import { Component, OnInit } from '@angular/core';
import { PaginationEvent } from 'app/shared/ui/list/list.component';
import { SearchParams } from 'app/shared/ui/list/search.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    allowAdd= true
    pagination = false;
    layout : 'grid';
    visible = true;
    items: any [];
    sortOptions = [
      { label: 'Code Ascending', value: '1-code' },
      { label: 'Code Descending', value: '-1-code' },
      { label: 'Name Ascending', value: '1-name' },
      { label: 'Name Descending', value: '-1-name' },
    ];
    config:any[]


  constructor() { }

  ngOnInit(): void {
    this.items= [
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

  }

  onPageChanged(event: PaginationEvent): void {
    console.log('Page changed:', event);
  }

  onFiltered(params: SearchParams): void {
    console.log('Filters applied:', params);
  }

  onAddClicked(): void {
    console.log('Add clicked');
  }

  onDeleteClicked(items: any[]): void {
    console.log('Delete clicked:', items);
  }
}
