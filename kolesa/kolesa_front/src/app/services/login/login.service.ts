import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, throwError} from "rxjs";
import {JWT_token} from "../../../models/JWT_token";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL = "http://localhost:8000";
  public isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  constructor(private httpClient: HttpClient) {
  }
  login(username:string, password: string):Observable<JWT_token>{
    return this.httpClient.post<JWT_token>(`${this.BASE_URL}/api/login/`,{username, password}).pipe(
      catchError(err => {
        return throwError(err);
      })
    )
  }
  private hasToken():boolean {
    return !!localStorage.getItem('token');
  }
  isAuthenticated():Observable<boolean>{
    return this.isAuthenticatedSubject.asObservable();
  }
  logout(){
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(false);
  }
}
