import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user: any[];
  repositories:any[];
  username:string;


  constructor() { 
    
  }
  getUserProfile(){
  
  }

  ngOnInit() {
  }

}
