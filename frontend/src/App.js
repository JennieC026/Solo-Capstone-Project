import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import StoreIndex from "./components/Stores/StoreIndex/StoreIndex";
import StoreDetail from "./components/Stores/StoreDetail/StoreDetail";
import DishDetail from "./components/Dishes/DishDetail";
import ShoppingCartDetail from "./components/ShoppingCarts/ShoppingCartDetail/ShoppingCartDetail";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import CheckoutPage from "./components/ShoppingCarts/CheckoutPage/CheckoutPage";
import PastOrderPage from "./components/ShoppingCarts/PastOrderPage/PastOrderPage";
import LandingPage from "./components/LandingPage/LandingPage";
import FavoriteStoreIndex from "./components/Favorites/FavoriteStore";
import StoreCategoryPage from "./components/Stores/StoreCategoryPage/StoreCategoryPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/stores">
          <StoreIndex />
        </Route>
        <Route exact path="/stores/categories/:categoryName">
          <StoreCategoryPage />
        </Route>
        <Route exact path="/stores/:storeId">
          <StoreDetail />
        </Route>
        <Route exact path="/stores/:storeId/dishes/:dishId">
          <DishDetail />
        </Route>
        <Route exact path ='/shoppingCarts/past'>
          <PastOrderPage />
        </Route>
        <Route path ="/shoppingCarts/:shoppingCartId/checkout">
          <CheckoutPage />
        </Route>
        <Route exact path ="shoppingCarts/:shoppingCartId">
          <ShoppingCartDetail />
        </Route>
        <Route exact path ="/favorites">
          <FavoriteStoreIndex />
        </Route>  
        <Route>
          <NotFoundPage />
        </Route>      
        
        </Switch>}
      
    </>
  );
}

export default App;