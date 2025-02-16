import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {
  baseUrl: string = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  addWeapon(data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'weapons', data)
  }

  editWeapon(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/weapons/${id}`, data)
  }

  getWeapons(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'weapons')
  }

  deleteWeapon(id: number): Observable<any> {
    // Use backticks for the URL to include the ID dynamically
    return this.httpClient.delete<any>(`${this.baseUrl}/weapons/${id}`);
  }

}
