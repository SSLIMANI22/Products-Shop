import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ProductsAdminComponent} from './products-admin/products-admin.component';
import { SharedModule } from 'app/shared/shared.module';
import { PrimeNGModule } from 'app/shared/utils/primeng/primeng.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsAdminComponent
  ],
  providers: [

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    PrimeNGModule,
  ],
  exports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNGModule,
    FormsModule,
  ]
})
export class ProductModule { }
