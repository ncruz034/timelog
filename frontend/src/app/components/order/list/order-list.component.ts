import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Order } from '../../../models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  order: Order[];
  displayedColumns = ['date','client','project','description','isBilled','status'];

  constructor(private orderService : OrderService, private router:Router) { }

  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders(){
    this.orderService.getOrders().subscribe(
      (data: Order[])=>{
        this.order = data;
        console.log('Data requested...');
        console.log(this.order);
      });
  }
  editOrder(id){
    this.router.navigate([`/edit/${id}`]);
  }
  deleteTime(id){
    this.orderService.deleteOrder(id).subscribe(()=>{
      this.fetchOrders();
    });
  }

}
