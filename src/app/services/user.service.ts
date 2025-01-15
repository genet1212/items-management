import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/v1/demo-controller/'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<string> { 
    return this.http.get(`${API_URL}all`, { responseType: 'text' }); 
  }

  getUserBoard(): Observable<string> { 
    return this.http.get(`${API_URL}user`, { responseType: 'text' });
  }

  getModeratorBoard(): Observable<string> { 
    return this.http.get(`${API_URL}mod`, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> { 
    return this.http.get(`${API_URL}admin`, { responseType: 'text' });
  }
}