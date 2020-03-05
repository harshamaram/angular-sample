import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { SampleServiceService } from './sample-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sample';
  user: User;
  inputText: string = "default value";
  sampleService: SampleServiceService;

  constructor(svc: SampleServiceService) {
  	let user: User = new User;
  	user.name = "street Hawk";
  	user.role = "bike rider";
  	user.address = "123 Main st, 340, Charlotte, NC 28000";
  	user.phone = [
  		'123-456-7890',
  		'456-789-1230'
  	];

  	this.user = user;

    this.sampleService = svc;
    svc.printToConsole('calling from constructor of app.coponent.ts');

  }

}
