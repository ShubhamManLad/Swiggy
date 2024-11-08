import { CommonModule, LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../../models/restaurant.interface';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {

  constructor(private route: ActivatedRoute, private dataStorage: DataStorageService, private router:Router){}

  foodType: string | null = null;

  restaurants: Restaurant[] = [];

  ngOnInit() {
    this.foodType = this.route.snapshot.paramMap.get('id');
    
    if(this.foodType!=null){
      for (let restaurant of this.dataStorage.restaurants) {
        for (let food of restaurant.foods) {
          if (this.foodType.includes(food.toLowerCase().trim())) {
            console.log(restaurant.name);
            this.restaurants.push(restaurant);
            break;
          }
        }
      }

    }

    console.log(this.restaurants);

  }

  openRestaurant(rest: any){
    this.router.navigate(["/restaurant", rest.id]);
  }
}



