import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://k63983q2.beget.tech/web-api/node'

  constructor(private httpClient: HttpClient) { }

  getAllPosts():Observable<any[]>{
    return this.httpClient.get<any[]>(this.url);
  }

  getPost(id: Number):Observable<Object>{
    return this.httpClient.get<Object>(`${this.url}/${id}`)
  }
}
