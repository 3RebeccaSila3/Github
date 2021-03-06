import { Component, OnInit,  } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpRequestService } from '../http-request.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user: any=[];
  repos:any=[];
  username:string;


  constructor(private service:HttpRequestService) { 
    this.service.getUser(this.username).subscribe(user => {
      this.user = user;
      console.log(this.user);
    })
    this.service.getRepos(this.username).subscribe(repos => {
      this.repos = repos;
    })
  }


  ngOnInit() {
  }

  searchUser() {
    this.service.updateUser(this.username);
    this.service.getUser(this.username).subscribe(user => {
      this.user = user;
    })
    this.service.getRepos(this.username).subscribe(repos => {
      this.repos = repos;
    })
  }

}
