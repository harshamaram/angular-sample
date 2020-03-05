import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  constructor() { }

  printToConsole(arg) {
  	console.log('service call: ' + arg);
  }
}
