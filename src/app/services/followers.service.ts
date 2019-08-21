import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class FollowersService extends DataService {
  static url = "https://jsonplaceholder.typicode.com/posts";

  constructor(http: Http) {
    super(FollowersService.url, http);
  }
}