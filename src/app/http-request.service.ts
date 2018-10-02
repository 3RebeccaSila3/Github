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

  constructor(private http: HttpClient) { 
    console.log('Service is ready for init....');
    // this.username = '3RebeccaSila3';
  }

  getUser(username) {
    return this.http.get("https://api.github.com/users/" + username)
      .map(result => result)

  }
  getRepos(username) {
    return this.http.get("https://api.github.com/users/" + username + '/repos')
      .map(result => result)
  }
  updateUser(username: string) {
    username = username;
  }

}
