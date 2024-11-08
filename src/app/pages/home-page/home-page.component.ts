import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FoodItemsComponent } from '../../components/food-items/food-items.component';
import { RestaurantItemsComponent } from '../../components/restaurant-items/restaurant-items.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, FoodItemsComponent, RestaurantItemsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
