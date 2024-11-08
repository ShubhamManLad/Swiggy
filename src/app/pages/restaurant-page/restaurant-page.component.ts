import { Component, numberAttribute } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../../services/data-storage.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-page',
  standalone: true,
  imports: [NavbarComponent, CommonModule,],
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.css'
})
export class RestaurantPageComponent {

  restId: string | null = null;

  rest : any ;

  constructor(private route: ActivatedRoute, private dataStorage: DataStorageService) {}

  ngOnInit() {
    this.restId = this.route.snapshot.paramMap.get('id');
    this.dataStorage.restaurants.forEach(restaurant => {
      if(restaurant.id==this.restId){
        this.rest = restaurant;
        console.log(this.rest);
      }
    });

    this.loadItemsFromLocalStorage();

  }
  private items: any[] = [];
  private favs: any[] = [];

  index = -1;
  addToCart(foodItem:any){
    foodItem.quantity= parseInt(foodItem.quantity)+1;
    this.index = this.items.findIndex(item=> item.id==foodItem.id);
    if(this.index==-1){
      this.items.push(foodItem);
      this.saveItemsToLocalStorage();
    }
    else{
      this.items[this.index]=foodItem;
      this.saveItemsToLocalStorage();
    }
    this.index=-1;
  }

  i = -1;
  toggleFavourites(foodItem:any){
    this.index = this.favs.findIndex(item=> item.id==foodItem.id);
    if(this.index==-1){
      this.favs.push(foodItem);
    }
    else{
      this.favs = this.favs.filter(item=>item.id!=foodItem.id);
    }
    this.saveItemsToLocalStorage();
    this.i=-1;
  }


  getItems() {
    return this.items;
  }

  getFavs(){
    return this.favs;
  }

  isFav(foodItem:any){
    return this.favs.findIndex(item=>item.id==foodItem.id)!=-1;
  }


  private loadItemsFromLocalStorage() {
    const storedItems = localStorage.getItem('userCart');
    const favItems = localStorage.getItem('userFavs');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
    if (favItems) {
      this.favs = JSON.parse(favItems);
    }
  }

  private saveItemsToLocalStorage() {
    localStorage.setItem('userCart', JSON.stringify(this.items));
    localStorage.setItem('userFavs', JSON.stringify(this.favs));
    
  }

}
