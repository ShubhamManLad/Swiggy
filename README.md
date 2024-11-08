# Project Overview
This project is a mini front-end clone of the Swiggy platform built using Angular. It simulates a simplified food discovery and ordering experience, allowing users to explore featured restaurants, view menus, add items to favorites, simulate a shopping cart, and view a summary of selected items. 
This project uses static data and does not include a back-end, with data being stored in Angular services, local storage or MockAPI.

## Objective
The goal of this project is to recreate core Swiggy functionality with a focus on Angular best practices, responsive UI design, and state management for user session data.

## Features

### Homepage
Showcases featured restaurants and popular cuisines/categories (using static data).
Replicates the design of the Swiggy homepage.
A search bar allows filtering food items by name.

### Cart Simulation
Allows users to add items to a simulated cart from the restaurant menu.
Tracks items in a shared Angular service, updating the total price in real time.
Displays cart items and total cost on a dedicated cart page.

### Order History
Stores previous orders placed by the user.
Data stored in MockAPI includes: 
  User ID,
  Address,
  Order Total,
  Order Items,
  Order Time

### Services
Uses Angular services to manage:
Restaurant details (name, cuisine, location, etc.)
Menu items for each restaurant
Cart items are managed within services and local storage.

Authentication
Includes mock authentication using MockAPI for simulating user login and signup.

User Order Details
Stores order details on MockAPI after order submission.

## Technical Specifications

Components
Restaurant Card: Displays restaurant details on the homepage and other listings.
Menu Item: Shows each menu item with add-to-cart and favorite options.
Routing: Angular Router is used for navigating between pages, including:
  Home,   
  Restaurant Details, 
  Cart, 
  Search Food, 
  Order History, 


The application is designed to be fully responsive, working seamlessly on both desktop and mobile devices.


State Management

Angular services manage state for cart items, allowing real-time updates and session-based data persistence.
