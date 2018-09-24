import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  username: string;

  constructor(private_http: HttpClient) { 
    console.log('Service is ready for init....');
    this.name = '3RebeccaSila3';
  }
}
