# Welcome to AmberEats!


AmberEats is a food delivery web application clone project inspired by Uber Eats. Users can browse restaurants, add items to their shopping cart, and leave comments on their favorite dishes. Our web application is built with a React frontend, Express backend, and Sequelize for the database management.

## Technologies Used

- **Frontend:** React
- **Backend:** Express.js
- **Database:** Sequelize

## Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/JennieC026/Solo-Capstone-Project.git
   cd Solo-Capstone-Project

   ```

2. **Install Backend Dependencies**
    ```sh
    cd backend
    npm install
    ```

3. **Seed Database**
    ```sh
    npx dotenv sequelize db:migrate
    npx dotenv sequelize db:seed:all
    ```

4. **Start Backend Server**
    ```sh
    npm start
    ```

5. **Install Frontend Dependencies**
   ```sh
    cd ../frontend
    npm install
   ```

6. **Start Frontend Server**
   ```sh
    npm start
   ```


# User Stories

## Users

### Sign Up

* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the `/signup` page:
    * I would like to be able to enter my email, phone number, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    * So that I can try again without needing to refill forms I entered valid data into.

### Log in

* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I'm on the `/login` page:
    * I would like to be able to enter my email and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the log-in form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the log-in form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

### Demo User

* As an unregistered and unauthorized user, I would like an easy to find and clear button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
  * When I'm on either the `/signup` or `/login` pages:
    * I can click on a Demo User button to log me in and allow me access as a normal user.
      * So that I can test the site's features and functionality without needing to stop and enter credentials.

### Log Out

* As a logged in user, I want to log out via an easy to find log out button on the user menu.
  * While on any page of the site:
    * I can log out of my account and be redirected to a page displaying the splash page.
      * So that I can easily log out to keep my information secure.

## ShoppingCarts

### Add Dishes to Cart

* As a logged in user, I want to add dishes to my shopping cart.
  * When I'm on the `/stores/:storeId/dishes/:dishId` page:
    * I can click an "Add 1 to order" button in the dish detail page.
      * So that I can select the dish I want to purchase.
    * After clicking "Add 1 to order":
      * The dish I desired is added in the cart and will be ready to purchase.
  * When I'm on the `/stores/:storeId` page:
    * I can click an "+" button next to a dish.
      * So that I can select dishes I want to purchase.
     * After clicking "Add 1 to order":
      * The dish I desired is added in the cart and will be ready to purchase.




### View Cart

* As a logged in user, I want to view all the dishes in my shopping cart.
  * When I'm on the home page and press the cart button on the right of the navigation bar:
    * A modal will pop up and I can see a list of all the shopping carts from different stores and dishes I've added.
      * When I click  a specific shopping cart inside my shopping carts menu:
        * I can see a list of all dishes I've added, including their quantities and prices.
        * So that I can review my selections and make any necessary changes before purchasing.

### Update Cart Quantity

* As a logged-in user, I want to change the quantity of a dish in my shopping cart.
  * When I'm on the home page and press the cart button on the right of the navigation bar:
    * A modal will pop up and I can see a list of all the shopping carts from different stores and dishes I've added.
      * When I click  a specific shopping cart inside my shopping carts menu:
        * Next to each dish, I can adjust the quantity using arrow buttons.
          * So that I can decide on the exact number of portions I want to purchase.

### Remove Dishes or Clear Cart

* As a logged-in user, I want to remove individual dishes or clear my entire cart.
  * When I'm on the home page and press the cart button on the right of the navigation bar:
    * A modal will pop up and I can see a list of all the shopping carts from different stores and dishes I've added.
      * When I click  a specific shopping cart inside my shopping carts menu:
        * Next to each dish, I can remove the dish using arrow buttons.
        * When I click a "..." button next to the store name:
          * I can find and click a "Clear Cart" button to remove all dishes.

### Checkout and Complete Order

* As a logged-in user, I want to proceed to checkout and finalize my purchase.
  * On the shopping cart detail page:
    * I can click a "Checkout" button to review my final order.
    * I can then click a "Complete Order" button to finalize my purchase.
      * So that I can confirm my order and get my dishes delivered to me.

## Comments

### Post Comments(On Stores)

* As a logged-in user, I want to post comments on stores or dishes.
  * When I'm on the `/stores/:storeId` page:
    * I can see a comment input field where I can type and submit my comment.
      * So that I can share my thoughts and feedback about the store or dish with other users.

### View Comments(On Stores)

* As a logged-in or logged-out user, I want to view comments left by other users on stores and dishes.
  * When I'm on the `/stores/:storeId` page:
    * I can see a list of comments left by other users.
      * So that I can learn about the experiences and opinions of other users.

### Edit or Delete Comments(On Stores)

* As the author of a comment, I want to be able to edit or delete my comments.
  * When I view a comment I've posted:
    * I can click an "Edit" button to modify my comment.
    * I can click a "Delete" button to remove my comment.
      * So that I can correct mistakes or change my feedback if I change my mind.

## Stores

### Viewing Store

* As a logged in or logged out user, I want to be able to view a selection of the stores.
  * When I'm on the `/stores` page:
    * I can view the stores.
      * So that I can select a store I want to start an order.

* As a logged in or logged out user, I want to be able to view a specific store and its associated food items and comments.
  * When I'm on the `/stores/:id` page:
    * I can view the details of the store, as well as the associated food items and comments.
      * So that I can select the dishes I want to order, or add a comment for the store.


## Dishes

    
### Viewing Dishes

* As a logged in or logged out user, I want to be able to view a selection of the dishes.
  * When I'm on the `/store/:id` page:
    * I can view all the dishes offered by this store.
      * So that I can select the dishes I want to order.

* As a logged in or logged out user, I want to be able to view a specific dish and the store it belongs to.
  * When I'm on the `/stores/:storeId/dishes/:dishId` page:
    * I can view the details of this dish, as well as the store name it belongs to.
      * So that I can order this dish.


# MVP List

BerberEat, a UberEat clone, is a website for users to order takeout and enables stores to offer delivery services.

## 1. New account creation, log in, log out, and guest/demo login

* Users can sign up, log in, and log out.
* Users can use a demo log in to try the site.
* Users can't use certain features without logging in (like commenting on stores).
* Logged in users are directed to their profile page, which displays their registered stores.
* Logged out users are directed to a landing page.


## 2. ShoppingCarts

* Logged in users can add dishes to their shopping carts.
* Logged in users can view the dishes they added to their own shopping carts.
* Logged in users can update the amount of the dishes they added to their own shopping carts.
* Logged in users can remove dishes or clear their shopping carts.
* Logged-in users can proceed to checkout and complete their order.

## 3. Comments

* Logged in users can post comments on stores.
* Comment authors can edit and delete their own comments.
* All users can view comments on stores and dishes.

## 4. Favorites(developing)

* Logged in users can apply a filter to view their favorite store.
* Logged in users can add or remove a store from their favorite stores.

## 5. Promotion(developing)
* Logged in users can view all current promotions.
* The promotion will apply when a user checkout their order.

## 6. Store

* All users, whether logged in or out, can view a list of stores.
* Users can view a store's details, its dishes, and comments made by other users.


## 7. Dishes

* All users can view the dishes offered by a store.
* Users can view details of a specific dish and the store it belongs to.



