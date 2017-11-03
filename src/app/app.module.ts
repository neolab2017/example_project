import { OrderService } from './order.service';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {AngularFireAuthModule} from 'angularfire2/auth'
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import {RouterModule} from '@angular/router'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CustomFormsModule } from 'ng2-validation';
import {DataTableModule} from 'angular-4-data-table';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component'



@NgModule({
  declarations: [
    AppComponent,   
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent ,
    ShoppingCardComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    MyOrdersComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    CheckOutComponent
   
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
    CustomFormsModule,
    DataTableModule,
    RouterModule.forRoot([
      {path : '', component: ProductsComponent },
      {path : 'products', component: ProductsComponent },
      {path : 'shopping-cart', component: ShoppingCardComponent },
      {path : 'login', component: LoginComponent },

      {path : 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
      {path : 'order-success', component: OrderSuccessComponent , canActivate: [AuthGuard] },      
      {path : 'my/orders', component: MyOrdersComponent , canActivate: [AuthGuard] },
      
      {path : 'admin/products/new', component: ProductFormComponent , canActivate: [AuthGuard, AdminAuthGuard] },
      {path : 'admin/products/:id', component: ProductFormComponent , canActivate: [AuthGuard, AdminAuthGuard] },
      {path : 'admin/products', component: AdminProductsComponent , canActivate: [AuthGuard, AdminAuthGuard] },
      {path : 'admin/orders', component: AdminOrdersComponent , canActivate: [AuthGuard, AdminAuthGuard] }
    ]),
    NgbModule.forRoot()

  ],
  providers: [AuthService, AuthGuard, UserService, AdminAuthGuard, CategoryService, ProductService, ShoppingCartService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
