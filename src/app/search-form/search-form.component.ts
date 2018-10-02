import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { HttpRequestService  } from '../http-request.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() addUser=new EventEmitter();
  userinput:string;
  username:any;


//   submitUsername(){
//     this.userinput=username.value
//     this.addUser.emit(this.addUser);
// }

searchUser() {
  this.serviceData.getUser(this.username);
  this.serviceData.getRepos(this.username);
}

  constructor(private serviceData:HttpRequestService ) { }

  ngOnInit() {
  }

}
