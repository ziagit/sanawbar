import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 
  @Output() change:EventEmitter<Object> = new EventEmitter();
  constructor() { }
  eventHandler(loginInfo){
    this.change.emit(loginInfo);
  }
}
