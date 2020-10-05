import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IFullPost } from '../interfaces';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IFullPost> {

  constructor( private postService: PostService ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IFullPost> | Promise<IFullPost> | IFullPost {
    return this.postService.getPost(route.params.id)
  }
}
