import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { UserService } from '../../services/user.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.css'
})
export class AccountPageComponent {

  user:any = {};
  orders: any[] = [];

  constructor(private userService: UserService, private orderService: OrderService){}

  ngOnInit(){
    this.userService.getSignedUser();
    this.user = this.userService.user;
    console.log(this.user);
    this.getOrders();
    
  }


  async getOrders(){
    const res =  await this.orderService.getOrders();
    this.orders = res;
    console.log(this.orders);
    this.orders = this.orders.filter(order=> order['userId']==this.user['id']);
    
    
  }




}
