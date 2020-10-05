import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../../interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: IPost
  constructor( private activeRoute: ActivatedRoute) {
    this.activeRoute.data.subscribe( data => this.post = data.postData)
  }

  ngOnInit(): void {
  }

}
