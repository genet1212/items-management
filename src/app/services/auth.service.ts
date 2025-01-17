import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/v1/auth';

const httpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http: HttpClient) { }

  login(credentials: { userName: any; password: any; }, password: any): Observable<any>{
    return this.http.post(AUTH_API + 'signin', {
      userName: credentials.userName,
      password: credentials.password
    }, httpOptions);
  }

  register(user: { userName: any; email: any; password: any; }, email: any, password: any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      userName: user.userName,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
