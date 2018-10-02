import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';
//import { MatTableDataSource } from '@angular/material';
import { Order } from '../../../models/order.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  panelOpenState = false;
  orders: Order[];
  displayedColumns = ['date','client','project','description','isBilled','status','actions'];

  constructor(private orderService : OrderService, private router:Router) { }

  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders(){
    this.orderService.getOrders().subscribe(
      (data: Order[])=>{
        this.orders = data
        
        //console.log('Data requested...');
        //console.log(this.orders);
      },
      err => {
        if(err instanceof HttpErrorResponse){
            if(err.status === 401){
              this.router.navigate(['/auth']);
            }
        }
      }
    );
  }

  editOrder(id){
    this.router.navigate([`orders/edit/${id}`]);
  }

  deleteTime(id){
    this.orderService.deleteOrder(id).subscribe(()=>{
      this.fetchOrders();
    });
  }

}
