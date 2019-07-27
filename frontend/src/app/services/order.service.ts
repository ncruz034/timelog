import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { NG_PROJECT_AS_ATTR_NAME } from '@angular/core/src/render3/interfaces/projection';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  uri = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(`${this.uri}/orders`);
  }

  getOrderById(id) {
    return this.http.get(`${this.uri}/orders/${id}`);
  }

  getOrderIdByOrderNumber(order_number) {
    return this.http.get(`${this.uri}/orders/number/${order_number}`);
  }

  addTimeToOrder(order_id, time_id) {
    const updatedOrderTime = {
      time_id: time_id,
    };

    return this.http.post(`${this.uri}/orders/${order_id}/time`, updatedOrderTime);
  }

        addOrder(
        date,
        clientName,
        address,
        phoneNumber,
        fieldWorkPromissed,
        printsPromissed,
        projectName,
        legalDescription,
        orderPlacedBy,
        orderReceivedBy,
        referToFileNumber,
        referToFieldBookNumber,
        referToOrderNumber,
        fieldBook,
        page,
        section,
        township,
        range,
        partyChief,
        dateCompleted,
        mail,
        deliver,
        pickup,
        mailPrintsTo,
        deliverPrintsTo,
        printsAtTime,
        dateInvoice,
        amountSetBy,
        invoiceTypedBy,
        courierFees,
        applPermitFees,
        COD,
        noCOD,
        orderNumber,
        fileNumber,
        price
       ) {
    const newOrder = {
      date: date,
      clientName: clientName,
      address: address,
      phoneNumber: phoneNumber,
      fieldWorkPromissed: fieldWorkPromissed,
      printsPromissed: printsPromissed,
      projectName: projectName,
      legalDescription: legalDescription,
      orderPlacedBy: orderPlacedBy,
      orderReceivedBy: orderReceivedBy,
      referToFileNumber: referToFileNumber,
      referToFieldBookNumber: referToFieldBookNumber,
      referToOrderNumber: referToOrderNumber,
      fieldBook: fieldBook,
      page: page,
      section: section,
      township: township,
      range: range,
      partyChief: partyChief,
      dateCompleted: dateCompleted,
      mail: mail,
      deliver: deliver,
      pickup: pickup,
      mailPrintsTo: mailPrintsTo,
      deliverPrintsTo: deliverPrintsTo,
      printsAtTime: printsAtTime,
      dateInvoice: dateInvoice,
      amountSetBy: amountSetBy,
      invoiceTypedBy: invoiceTypedBy,
      courierFees: courierFees,
      applPermitFees: applPermitFees,
      COD: COD,
      noCOD: noCOD,
      orderNumber: orderNumber,
      fileNumber: fileNumber,
      price: price
    };
    return this.http.post(`${this.uri}/orders`, newOrder);
  }

  deleteTime(_id, time_id) {
    return this.http.delete(`${this.uri}/orders/${_id}/time/${time_id}`);
  }

  editOrder(_id, updatedOrder) {
    return this.http.put(`${this.uri}/orders/${_id}`, updatedOrder);
  }

  deleteOrder(_id) {
    return this.http.delete(`${this.uri}/orders/delete/${_id}`);
  }
}
