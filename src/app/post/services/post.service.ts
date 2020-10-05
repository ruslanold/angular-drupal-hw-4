import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFullPost, IPost } from '../interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = '/node'

  constructor(private httpClient: HttpClient) { }

  getAllPosts():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(`${environment.serverUrl}${this.url}`);
  }

  getPost(id: Number):Observable<IFullPost>{
    return this.httpClient.get<IFullPost>(`${environment.serverUrl}${this.url}/${id}`)
  }
}
