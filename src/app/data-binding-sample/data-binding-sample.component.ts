import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-sample',
  templateUrl: './data-binding-sample.component.html',
  styleUrls: ['./data-binding-sample.component.css']
})
export class DataBindingSampleComponent implements OnInit {

  inputText: string;
  constructor() { }

  ngOnInit() {
  	this.inputText = "default value";
  }

}
