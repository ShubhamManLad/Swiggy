import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  currentUser : any = "";

  foodsTypes : string[] = ['biryani', 'burger', 'chinese', 'cake', 'pizza'];

  restaurants : any[] = [
    {
      'id':'kfc',
      'name':'Kentucky Fried Chicken',
      'rating':'4.3',
      'foods':['American ', 'Burger '],
      'menu':[
        {
          'id':'burger3',
          'type':'burger',
          'price':'350',
          'quantity':0,
          'name':'Burger 3',
          'desc':'Tasty Burger',
        },
        {
          'id':'roll1',
          'type':'american',
          'price':'350',
          'name':'Roll 1',
          'quantity':0,
          'desc':'Tasty Roll',
        }
      ],
      'location':'Vile Parle',
      'time':'25-30 mins',
    },
    {
      'id':'burger-king',
      'name':'Burger King',
      'rating':'4.3',
      'foods':['American ', 'Burger '],
      'menu':[
        {
          'id':'burger1',
          'price':'350',
          'type':'burger',
          'name':'Burger 1',
          'quantity':0,
          'desc':'Tasty Burger',
        },
        {
          'id':'burger2',
          'price':'350',
          'type':'burger',
          'name':'Burger 2',
          'quantity':0,
          'desc':'Tasty Burger',
        }
      ],
      'location':'Andheri',
      'time':'25-30 mins',
    },
    {
      'id':'dominos',
      'name':'Dominos',
      'rating':'4.3',
      'foods':['Pizza'],
      'menu':[
        {
          'id':'pizza1',
          'price':'350',
          'type':'pizza',
          'name':'Pizza 1',
          'quantity':0,
          'desc':'Tasty Pizza',
        },
        {
          'id':'pizza2',
          'price':'350',
          'type':'pizza',
          'name':'Pizza 2',
          'quantity':0,
          'desc':'Tasty Pizza',
        },
      ],
      'location':'Andheri',
      'time':'25-30 mins',
    },
    {
      'id':'jaden-cakes',
      'name':'Jaden Cakes',
      'rating':'4.3',
      'foods':['Cake', 'Desserts'],
      'menu':[
        {
          'id':'cake1',
          'price':'350',
          'type':'Cake',
          'name':'Cake 1',
          'quantity':0,
          'desc':'Tasty Cake',
        },
        {
          'id':'cake2',
          'price':'350',
          'type':'Cake',
          'name':'Cake 2',
          'quantity':0,
          'desc':'Tasty Cake',
        }
      ],
      'location':'Andheri',
      'time':'25-30 mins',
    },
    {
      'id':'chinese-wok',
      'name':'Chinese Wok',
      'rating':'4.3',
      'foods':['Chinese '],
      'menu':[
        {
          'id':'momos1',
          'price':'350',
          'type':'chinese',
          'name':'Momos 1',
          'quantity':0,
          'desc':'Tasty Momo',
        },
        {
          'id':'momos2',
          'price':'350',
          'type':'chinese',
          'name':'Momos 2',
          'quantity':0,
          'desc':'Tasty Momo',
        }
      ],
      'location':'Andheri',
      'time':'25-30 mins',
    },
    {
      'id':'yasins-food',
      'name':'Yasins Food',
      'rating':'4.3',
      'foods':['Indian ', 'Biryani '],
      'menu':[
        {
          'id':'biryani1',
          'price':'350',
          'type':'Biryani',
          'name':'Biryani 1',
          'quantity':0,
          'desc':'Tasty Biryani',
        },
        {
          'id':'biryani2',
          'price':'350',
          'type':'Biryani',
          'name':'Biryani 2',
          'quantity':0,
          'desc':'Tasty Biryani',
        },
      ],
      'location':'Andheri',
      'time':'25-30 mins',
    },
    
  ];


  foodItems : any[] = [
    {
      'id':'burger1',
      'price':'350',
      'type':'burger',
      'name':'Burger 1',
      'quantity':0,
      'desc':'Tasty Burger',
    },
    {
      'id':'burger2',
      'price':'350',
      'type':'burger',
      'name':'Burger 2',
      'quantity':0,
      'desc':'Tasty Burger',
    },
    {
      'id':'burger3',
      'price':'350',
      'type':'burger',
      'name':'Burger 3',
      'quantity':0,
      'desc':'Tasty Burger',
    },
    {
      'id':'pizza1',
      'price':'350',
      'type':'pizza',
      'name':'Pizza 1',
      'quantity':0,
      'desc':'Tasty Pizza',
    },
    {
      'id':'pizza2',
      'price':'350',
      'type':'pizza',
      'name':'Pizza 2',
      'quantity':0,
      'desc':'Tasty Pizza',
    },
    {
      'id':'roll1',
      'price':'350',
      'type':'american',
      'name':'Roll 1',
      'quantity':0,
      'desc':'Tasty Roll',
    },
    {
      'id':'momos1',
      'price':'350',
      'type':'chinese',
      'name':'Momos 1',
      'quantity':0,
      'desc':'Tasty Momo',
    },
    {
      'id':'momos2',
      'price':'350',
      'type':'chinese',
      'name':'Momos 2',
      'quantity':0,
      'desc':'Tasty Momo',
    },
    {
      'id':'biryani',
      'price':'350',
      'type':'Biryani',
      'name':'Biryani 1',
      'quantity':0,
      'desc':'Tasty Biryani',
    },
    {
      'id':'biryani2',
      'price':'350',
      'type':'Biryani',
      'name':'Biryani 2',
      'quantity':0,
      'desc':'Tasty Biryani',
    },
    {
      'id':'cake1',
      'price':'350',
      'type':'Cake',
      'name':'Cake 1',
      'quantity':0,
      'desc':'Tasty Cake',
    },
    {
      'id':'cake2',
      'price':'350',
      'type':'Cake',
      'name':'Cake 2',
      'quantity':0,
      'desc':'Tasty Cake',
    },

  ];


  loginUser(){
    
  }

  // userCart : any[] =[];
}
