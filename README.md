<img align="center" width="900" alt="app_homepage" src="https://github.com/user-attachments/assets/4d8e787a-7c8c-46d4-bdff-311ee50558fa">

# All The Things - Grocery Delivery Application
All the Things is a simple application for a hypothetical grocery delivery company. The app allows users to browse a selection of grocery items, filter the items by category, filter the items via search input, and update/view their shopping cart.

## How to Run
### Prerequisites
Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 18.x or higher)
- [Git](https://git-scm.com/)

### Installation

Follow these steps to set up the project on your local machine:

#### 1. Clone the Repository

Open your terminal and run the following command to clone the repository: <br><br>
```git clone https://github.com/jackhincks/grocery_app.git```

#### 2. Navigate to the Project Directory
#### 3. Install Dependencies
If using yarn, enter ```yarn install``` into the command line while in the root project directory. <br>
If using npm, enter ```npm install``` into the command line while in the root project directory.  <br>
#### 4. Run the Development Server
If using yarn, enter ```yarn dev``` into the command line while in the root project directory. <br>
If using npm, enter ```npm run dev``` into the command line while in the root project directory. <br>


## How It's Made
Tech used: React, HTML, Tailwind CSS, TypeScript <br>
I started this project to enhance my front-end development skills. I created several front-end applications in my classwork at Oregon State with the help of starter code, but wanted to build an application from the ground-up.  I had experience using JavaScript, HTML, and CSS, but decided to utilize TypeScript and Tailwind CSS for this project given the growing popularity of TypeScript and simplicity of Tailwind CSS.

I began with creating prototypes of what I wanted the website to look like, drawing inspiration from real online food delivery websites. Then, I built out the general look in React using Tailwind CSS. After the static layout and design was in place, I worked on adding dynamic functionality to the different components. The items were given dynamic "Add To Cart" buttons, the browse items section can be dynamically updated by clicking the category icons or adding text to the search bar. The shopping cart icon displays the quantity of items in the cart at any given time, and when clicked, displays a pop up of the shopping cart.

## In Progress Application Improvements
- Improved UI for "Category Slider".
- Ability of application to maintain Shopping Cart state after browser refresh.
- Quantity selector for "Add To Cart" functionality -- currently, can only add 1 incremental quantity to cart per click.
- Link MySQL database to frontend via Flask REST API.
- AUTH0 Login and Sign Up capabilities.
