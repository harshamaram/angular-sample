import { Component, OnInit } from '@angular/core';
import { SampleServiceService } from './../../sample-service.service';

@Component({
	selector: 'app-view-component',
	templateUrl: './view-component.component.html',
	styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

	constructor(private svc : SampleServiceService) {
	svc.printToConsole("this is from app-view-component");
	}

	ngOnInit() {
	}

}
