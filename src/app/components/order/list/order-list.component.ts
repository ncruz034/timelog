import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';
import { Order } from '../../../models/order.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Time } from 'src/app/models/timeDetail';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  panelOpenState = false;
  orders: Order[];
  filteredOrders: Order[];
  toggleAddTime: boolean;
  private _searchTerm: string;
  currentOrderId: String;
  
  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string){
    this._searchTerm = value;
    this.filteredOrders = this.filtereOrders(value);
  }

  filtereOrders(searchString: string){
    return this.orders.filter(order =>
      order.orderNumber.toString().toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }


  constructor(private orderService: OrderService, private router: Router, private authService: AuthService) { }

  toggle(){
    this.toggleAddTime = !this.toggleAddTime;
  }

  ngOnInit() {
    this.fetchOrders();
  }

  getOrderId(id) {
    this.currentOrderId = id;
  }


  fetchOrders() {
    this.orderService.getOrders().subscribe(
      (data: Order[]) => {
        this.orders = data;
        this.filteredOrders = data;
        console.log(this.orders);
      },
      err => {
        if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/auth']);
            }
        }
      }
    );
  }


  editOrder(id) {
    this.router.navigate([`orders/edit/${id}`]);
  }
  detailOrder(id) {
    this.router.navigate([`orders/detail/${id}`]);
  }
  deleteOrder(id) {
    this.orderService.deleteOrder(id).subscribe(() => {
      this.fetchOrders();
    });
  }

  addTime(order_id, projectName, clientName, orderNumber){
    this.toggle();
    this.router.navigate([`times/create/${order_id}/${projectName}/${clientName}/${orderNumber}`]);

  }

}
