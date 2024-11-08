import { Component } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { OrderService } from '../../services/order.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

  constructor (private userService: UserService, private dataStorage : DataStorageService, private orderService: OrderService){}

  total : number = 0;
  address: string = "";

  items : any[] = [];
  user:any = {};


  ngOnInit(){
    this.userService.getSignedUser();
    this.user = this.userService.user;
    this.loadItemsFromLocalStorage();
    this.calculateTotal();
  }


  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.saveItemsToLocalStorage();
  }

  private loadItemsFromLocalStorage() {
    const storedItems = localStorage.getItem('userCart');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

  private saveItemsToLocalStorage() {
    localStorage.setItem('userCart', JSON.stringify(this.items));
  }

  index=-1;

  addItem(foodItem:any){
    foodItem.quantity= parseInt(foodItem.quantity)+1;
    this.index = this.items.findIndex(item=> item.id==foodItem.id);

    
    this.items[this.index]=foodItem;
    this.saveItemsToLocalStorage();
    this.calculateTotal();

    this.index = -1;
  }

  removeItem(foodItem:any){
    foodItem.quantity= parseInt(foodItem.quantity)-1;
    this.index = this.items.findIndex(item=> item.id==foodItem.id);
    this.items[this.index]=foodItem;
    if(foodItem.quantity<=0) this.items= this.items.filter(item=>item.id!=foodItem.id);
    this.saveItemsToLocalStorage();
    console.log(this.items);
    this.calculateTotal();
    this.index=-1;
  }

  calculateTotal(){
    this.total=0;
    this.items.forEach(item => {
      this.total += parseInt(item.price)*item.quantity;
    });
    console.log(this.total);
  }

  placeOrder(){
    this.orderService.placeOrder(this.user, this.items, this.address, this.total);
    this.clearCart();
    this.calculateTotal();
    this.address="";
    alert("Order Placed");
    
  }

}
