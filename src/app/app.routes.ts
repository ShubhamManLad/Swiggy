import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RestaurantPageComponent } from './pages/restaurant-page/restaurant-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { SearchComponent } from './pages/search/search.component';
import { FavPageComponent } from './pages/fav-page/fav-page.component';

export const routes: Routes = [
    {path:"", component:LoginPageComponent},
    {path:"home", component: HomePageComponent},
    {path:"restaurant/:id", component: RestaurantPageComponent},
    {path:"cart", component: CartPageComponent},
    {path:"food/:id", component: FoodPageComponent},
    {path:"account", component: AccountPageComponent},
    {path:"search", component: SearchComponent},
    {path:"fav",component:FavPageComponent}
    
];
