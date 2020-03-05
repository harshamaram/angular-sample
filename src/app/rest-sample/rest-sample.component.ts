import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest-sample',
  templateUrl: './rest-sample.component.html',
  styleUrls: ['./rest-sample.component.css']
})
export class RestSampleComponent implements OnInit {

  userName: string = "";
  response: any;

  constructor(private http: HttpClient) {
  	this.http = http;
  }

  ngOnInit() {
  	
  }

  searchUser() {
  	console.log('serach button clicked');
  	console.log(this.userName);
  	let urlStr = 'https://api.github.com/users/' + this.userName;
  	console.log(urlStr);
  	let pointer = this.http
  		.get(urlStr)
  		.subscribe((response) => {
  			console.log("received response");
  			this.response = response;
  	});

  }

}
