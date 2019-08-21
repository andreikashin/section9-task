import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(private service: FollowersService) { }

  followers: any[];

  ngOnInit() {
    this.service
      .getAll()
      .subscribe(items => this.followers = items);
  }

}
