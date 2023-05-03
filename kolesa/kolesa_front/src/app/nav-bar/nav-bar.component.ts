import {Component, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";
import {LoginService} from "../services/login/login.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  constructor(private router: Router, private loginService:LoginService) {
  }
  logged:boolean = false;
  ngOnInit() {
    this.loginService.isAuthenticated().subscribe((data)=>{
      this.logged = data;
    })
  }
  logout(){
    this.loginService.logout();
  }
  login(){
    this.router.navigate(['/login'])
  }
}
