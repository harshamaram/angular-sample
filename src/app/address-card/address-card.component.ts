import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
	selector: 'app-address-card',
	templateUrl: './address-card.component.html',
	styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
	
	@Input('user') user: User;
	isCollapsed: boolean = true;
	buttonName: string;

	constructor() { }

	ngOnInit() { 
		this.buttonName = 'Expand';
	}

	toggleButton() {
		this.isCollapsed = !this.isCollapsed;
		this.buttonName = this.isCollapsed ? "Expand" : "Collapse"; 		
	}

}
