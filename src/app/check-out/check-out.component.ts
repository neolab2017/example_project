import { OrderService } from './../order.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from './../models/shopping-cart';

import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {   

  shipping = {};
  cart: ShoppingCart;
  subscription: Subscription;

  constructor (private shopCardServ: ShoppingCartService, private orderService: OrderService ) {

  }

  async ngOnInit () {
    let getCart$ = await this.shopCardServ.getCart();

    this.subscription = getCart$.subscribe(cart => this.cart = cart);
  }

  ngOnDestroy () {

    this.subscription.unsubscribe();
    
  };  

  
  placeOrder() {

    console.log(this.cart.items.map(wer => wer));
  
   let order = {
     datePlaced: new Date().getTime(),
     shipping: this.shipping,
     items: this.cart.items.map( i => {

      return  {
        product: {
          title: i.title,
          imageUrl: i.imageUrl,
          price: i.price
        },
        quantity: i.quantity,
        totalPrice: i.totalPrice
      }
     }
       
     )
   }

   this.orderService.storeorder(order);

  }    
}
