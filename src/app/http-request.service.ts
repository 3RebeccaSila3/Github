import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {User} from './user';
import { Repository } from './repository';


@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  username: string;

  constructor(private_http: HttpClient) { 
    console.log('Service is ready for init....');
    this.username = '3RebeccaSila3';
  }

}
