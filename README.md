<img align="center" width="900" alt="app_homepage" src="https://github.com/user-attachments/assets/4d8e787a-7c8c-46d4-bdff-311ee50558fa">

# All The Things - Grocery Delivery Application
All the Things is a simple application for a hypothetical grocery delivery company. The app allows users to browse a selection of grocery items, filter the items by category, filter the items via search input, and update/view their shopping cart.

## How to Run
### Prerequisites
Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 18.x or higher)
- [Docker](https://www.docker.com/products/docker-desktop/) (or a similar container application)

### Installation

Follow these steps to set up the project on your local machine:

#### 1. Clone the Repository

Open your terminal and run the following command to clone the repository: <br>
```
git clone https://github.com/jackhincks/grocery_app.git
```

#### 2. Navigate to the Project Directory Root <br><br>

#### 3. Build Docker Images & Run Containers
On command line, run 
```
docker-compose up -d --build
```

#### 4. Access the Application
In the browser of your choice, navigate to http://localhost:5173. <br>



## How It's Made
Tech used: React, HTML, Tailwind CSS, TypeScript, Python, Flask, SQL, Docker <br>
I started this project to build my first full-stack application from the ground up. I created several applications in my classwork at Oregon State with the help of starter code, but wanted to build an application starting from nothing.  I had experience using JavaScript, HTML, and CSS, but decided to utilize TypeScript and Tailwind CSS for this project given the growing popularity of TypeScript and ease-of-use of Tailwind CSS.

I began with creating prototypes of what I wanted the front-end to look like, drawing inspiration from real online food delivery websites. Then, I built out the general look in React using Tailwind CSS. After the static layout and design was in place, I worked on adding dynamic functionality to the different components. The items were given dynamic "Add To Cart" buttons, the browse items section can be dynamically updated by clicking the category icons or adding text to the search bar. The shopping cart icon displays the quantity of items in the cart at any given time, and when clicked, displays a pop up of the shopping cart.

Once the front-end was completed, I implemented a SQL database to hold the grocery data as well as a Flask REST API. The backend was relatively simple to build, but the frontend required significant rework to incorporate a "remote" database. 

Finally, I dockerized the frontend, backend, and SQL database utilizing docker compose. This enables a seamless build for other developers using this application.

## In Progress Application Improvements
- Improved UI for "Category Slider".
- Checkout functionality
- Functionality for "3 line" drop down menu.
- Ability to maintain Shopping Cart state after browser refresh.
- Quantity selector for "Add To Cart" functionality -- currently, can only add 1 incremental quantity to cart per click.
- AUTH0 Login and Sign Up capabilities.
- Expanded database and "x items per page" functionality.
