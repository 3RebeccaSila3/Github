import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() addUser=new EventEmitter();
  submitUsername(){
    this.addUser.emit(this.addUser);
}

  constructor() { }

  ngOnInit() {
  }

}
