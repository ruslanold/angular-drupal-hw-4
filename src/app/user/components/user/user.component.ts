import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: IUser
  constructor( private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.data.subscribe( v => this.user = v.userData)
  }

}
