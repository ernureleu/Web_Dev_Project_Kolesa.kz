import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../services/category/category.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../models/Product";
import {CartService} from "../services/cart/cart.service";
import {LoginService} from "../services/login/login.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  car!:Product;
  logged:boolean = false;
  constructor(private categoryService: CategoryService, private route: ActivatedRoute,
              private cartService:CartService, private loginService:LoginService) {
  }
  ngOnInit() {
    this.loginService.isAuthenticated().subscribe((data) =>{
      this.logged = data;
    })
    this.getCar();
  }
  getCar(){
    this.route.paramMap.subscribe((params) => {
      if(params.get('product_id')){
        let car_id = Number(params.get(('product_id')))
        this.categoryService.getProduct(car_id).subscribe((data) =>{
          this.car = data;
        })
      }
    })
  }
  addToFavorite(product_id:number){
    this.cartService.addToCart(product_id).subscribe();
    window.alert("The car has been added to the cart")
  }
}
