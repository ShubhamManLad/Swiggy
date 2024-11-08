import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  private api = "https://671737b8b910c6a6e026fed0.mockapi.io/orderData";

  constructor() { }


  placeOrder(user: any, order: any, address: string, total: number) {

    let currentDate = new Date();

    let year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    let day = currentDate.getDate().toString().padStart(2, '0');

    let hours = currentDate.getHours().toString().padStart(2, '0');
    let minutes = currentDate.getMinutes().toString().padStart(2, '0');

    let formattedDateTime = `${hours}:${minutes} ${day}/${month}/${year}`;

    const orderItem: any = {
      'userId': user.id,
      'userEmail': user.email,
      'orderItems': order,
      'address': address,
      'total': total,
      'timestamp': formattedDateTime
    }

    const res = fetch(this.api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderItem),
    }).then(res => res.json());
  }

  getOrders(): Promise<any[]> {
    const orders = fetch(this.api).then(res => res.json());
    console.log(orders);
    return orders;
  }

}
