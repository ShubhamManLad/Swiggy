import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DataStorageService } from '../../services/data-storage.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-fav-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './fav-page.component.html',
  styleUrl: './fav-page.component.css'
})
export class FavPageComponent {


  items : any[] = [];


  ngOnInit(){
    this.loadItemsFromLocalStorage();
  }

  private loadItemsFromLocalStorage() {
    const storedItems = localStorage.getItem('userFavs');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

  private saveItemsToLocalStorage() {
    localStorage.setItem('userFavs', JSON.stringify(this.items));
  }


  removeItem(foodItem:any){
    this.items = this.items.filter(item=>item.id!=foodItem.id);
    this.saveItemsToLocalStorage();
  }
}
