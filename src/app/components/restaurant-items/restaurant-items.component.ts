import { Component } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-items.component.html',
  styleUrl: './restaurant-items.component.css'
})
export class RestaurantItemsComponent {

  constructor(private dataStorage: DataStorageService, private router: Router){}

  restaurants : any[] = this.dataStorage.restaurants;

  openRestaurant(rest: any){
    this.router.navigate(["/restaurant", rest.id]);
  }
  


}
