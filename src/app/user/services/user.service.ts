import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces';
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: '/user'

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${environment.serverUrl}${this.url}`);
  }

  getUser(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.serverUrl}${this.url}/${id}`);
  }
}
