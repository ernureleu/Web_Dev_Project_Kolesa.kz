import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CategoriesComponent} from "./categories/categories.component";
import {CartComponent} from "./cart/cart.component";
import {ProductsComponent} from "./products/products.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";

const routes: Routes = [
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'categories/:category_id/products',
    component: ProductsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'categories/:category_id/products/:product_id',
    component: ProductDetailsComponent
  },
  {
    path: '',
    redirectTo:'login',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
