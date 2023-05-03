import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../services/category/category.service";
import {UserService} from "../services/user/user.service";
import {CartService} from "../services/cart/cart.service";
import {Cart} from "../../models/Cart";
import {Product} from "../../models/Product";
import {User} from "../../models/User";
import {LoginService} from "../services/login/login.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private cartService:CartService, private userService: UserService,
              private categoryService:CategoryService, private loginService : LoginService) {}

  cart!:Cart;
  cartCars: Product []= [];
  user_id!:number;
  user!:User;
  logged: boolean = false;
  total:number = 0;
  ngOnInit() {
      this.loginService.isAuthenticated().subscribe((data) => {
        this.logged = data;
      })
      if(this.logged) {
        this.userService.get_id().subscribe((data) => {
          this.user_id = data.user_id;
          if (this.user_id) {
            this.getCart();
          }
        })
      }
  }
  getCart(){
    this.cartService.getCart(this.user_id).subscribe((data) => {
      this.cart = data;
      this.user = data.user;
      this.cartCars = data.cars;
      this.calculateTotal();
    })
  }
  remove(car_id:number){
    this.cartService.removeFromCart(car_id).subscribe((data) =>{
      this.cartCars = this.cartCars.filter((car) => car.id!== car_id);
    })
  }
  order(){
    window.alert("Success!")
  }
  calculateTotal(){
    for(let car of this.cartCars){
      this.total+=car.price;
    }
  }
}
