import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
	dateMessage: string;

	constructor() {
		setInterval(() => {
			let currDate = new Date();
			this.dateMessage = currDate.toDateString() + ' ' + currDate.toLocaleTimeString();
		}, 1000);
	}

	ngOnInit() {
	}

	add(a: number, b: number) {
		return a + b;
	}

}
