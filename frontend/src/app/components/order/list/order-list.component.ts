import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Order } from '../../../models/order.model';
import { Time } from '../../../models/time.model';
import { HttpErrorResponse } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  panelOpenState = false;
  orders: Order[];
  times: Time[];
  currentOrderId: String;


  displayedColumns = ['date', 'user', 'description', 'time'];

  constructor(private orderService: OrderService, private router: Router) { }

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
    console.log('Edditing order id: ' + id);
    this.router.navigate([`orders/edit/${id}`]);
  }
  detailOrder(id) {
    console.log('View order id: ' + id);
    this.router.navigate([`orders/detail/${id}`]);
  }
  deleteOrder(id) {
    this.orderService.deleteOrder(id).subscribe(() => {
      this.fetchOrders();
    });
  }
}
