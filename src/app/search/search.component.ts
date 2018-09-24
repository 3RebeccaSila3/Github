import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user:any[];
  repository:any[];
  username:string;


  constructor(private httpRequest:HttpRequestService) { 
    
  }

  ngOnInit() {
  }

}
