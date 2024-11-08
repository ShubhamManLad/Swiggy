import { Component } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-items.component.html',
  styleUrl: './food-items.component.css'
})
export class FoodItemsComponent {

  constructor(private dataStorage: DataStorageService, private router: Router){}

  foods = this.dataStorage.foodsTypes

  openFood(food: any){
    this.router.navigate(["/food", food]);
  }

}
