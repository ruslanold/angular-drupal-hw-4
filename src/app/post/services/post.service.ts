import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://k63983q2.beget.tech/web-api/node'

  constructor(private httpClient: HttpClient) { }

  getAllPosts():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.url);
  }

  getPost(id: Number):Observable<IPost>{
    return this.httpClient.get<IPost>(`${this.url}/${id}`)
  }
}
