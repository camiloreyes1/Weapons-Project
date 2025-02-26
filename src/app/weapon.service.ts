import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {
  // Updated baseUrl to use proxy path
  baseUrl: string = "/api";

  constructor(private httpClient: HttpClient) { }

  addWeapon(data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/weapons`, data);
  }

  editWeapon(id: string, data: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/weapons/${id}`, data);
  }

  getWeapons(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/weapons`);
  }

  deleteWeapon(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/weapons/${id}`);
  }

    // Get a weapon by ID
    getWeaponById(id: string): Observable<any> {
      return this.httpClient.get(`${this.baseUrl}/${id}`);
    }


}

