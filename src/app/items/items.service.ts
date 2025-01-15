import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from './items';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  register(userName: any, email: any, password: any) {
    throw new Error('Method not implemented.');
  }
  getModeratorBoard() {
    throw new Error('Method not implemented.');
  }
  getUserBoard() {
    throw new Error('Method not implemented.');
  }
  getAdminBoard() {
    throw new Error('Method not implemented.');
  }
  getPublicContent() {
    throw new Error('Method not implemented.');
  }

  baseURL:string=environment.IMS_API_URL;
  
  constructor(private httpClient:HttpClient) { }

  fetchAllItems():Observable<Items[]> {
    return this.httpClient.get<Items[]>(`${this.baseURL}/api/v1/items`);
  }


}
