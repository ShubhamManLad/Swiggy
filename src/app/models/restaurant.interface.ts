// Define types for the restaurant object
export interface Restaurant {
    id: string;
    name: string;
    rating: string;
    foods: string[];  // Array of strings
    menu: MenuItem[];
    location: string;
    time: string;
  }

  // Define the type for menu items
interface MenuItem {
    id: string;
    price: string;
    type: string;
    name: string;
    quantity: number;
    desc: string;
  }
  