import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private orderNumber = new BehaviorSubject<string>('');
  currentOrderNumber = this.orderNumber.asObservable();

  constructor() { }

  changeOrderNumber(orderNumber: string){
    this.orderNumber.next(orderNumber);
  }
}

