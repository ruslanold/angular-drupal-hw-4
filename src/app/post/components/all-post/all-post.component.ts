import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../../interfaces';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  posts: IPost[] 

  constructor(private activeRouter: ActivatedRoute) {
    this.activeRouter.data.subscribe( data => {
      console.log(data)
      this.posts = data.allPosts 
    });
  }
  
  ngOnInit(): void {
  }

}
