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
          <StoreIndex />
        </Route>
        <Route exact path="/stores/:storeId">
          <StoreDetail />
        </Route>
        <Route exact path="/stores/:storeId/dishes/:dishId">
          <DishDetail />
        </Route>
        <Route exact path ="shoppingCarts/:shoppingCartId/checkout">
          <CheckoutPage />
        </Route>
        <Route exact path ="shoppingCarts/:shoppingCartId">
          <ShoppingCartDetail />
        </Route>
        </Switch>}
      
    </>
  );
}

export default App;