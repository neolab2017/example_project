import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular-4-data-table';
//import {Product} from './../../models/product'


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
 // products: Product[];
 products: any[];  
  subscription:Subscription;
  tableResource: DataTableResource<any>;
  items: any[] = [];
  itemCount: number;
  
  constructor(private productService: ProductService) { 
   this.subscription=productService.getAll().subscribe(products => {

    this.products =  products
    this.initTable(products);
    
   });
 
  }

  private initTable (products: any[]){

    this.tableResource = new DataTableResource(products);
    this.tableResource.query({offset:0})
    .then(items => this.items = items);
    this.tableResource.count()
    .then(count => this.itemCount = count)


  }

  reloadItems(params){

    if (!this.tableResource)return;

    this.tableResource.query(params)
    .then(items => this.items = items);

  }

  ngOnInit() {
  }

  ngOnDestroy () {
    this.subscription.unsubscribe;


  }

  filter (query: string){
    console.log(query)

    let FilterProducts = (query) ?
    this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
    this.products;

    this.initTable(FilterProducts)  
  }

}
