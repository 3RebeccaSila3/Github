import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {User} from './user';
import { Repository } from './repository';
import { environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  username: string;

  constructor(private http: HttpClient) { 
    console.log('Service is ready for init....');
    this.username = '3RebeccaSila3';
  }

  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username)
      .map(result => result)

  }
  getRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + '/repos')
      .map(result => result)
  }
  updateUser(username: string) {
    this.username = username;
  }

}
