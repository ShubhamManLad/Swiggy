import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FoodItemsComponent } from '../../components/food-items/food-items.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule,NavbarComponent, FoodItemsComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchItem:string="";

  constructor(private router: Router){}

  search(){
    this.router.navigate(["/food", this.searchItem.toLowerCase().trim()]);
  }

}
