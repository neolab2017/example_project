import { Product } from './../models/product';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
 @Input('product') product;
 @Input('show-actions') showActions = true;
 @Input('shopping-cart') shoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart (){
    this.cartService.addToCard(this.product);
  }

  removeFromCart () {

    this.cartService.removeFromCart(this.product);

  }

  getQuantity () {

   

    this.shoppingCart.items = this.shoppingCart.items || {} ;
    
    if(!this.shoppingCart) {return 0 };

    let item = this.shoppingCart.items[this.product.$key];
   
    return item ? item.quantity : 0;
    
  }

  

}
