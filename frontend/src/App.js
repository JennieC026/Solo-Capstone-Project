import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import StoreIndex from "./components/Stores/StoreIndex/StoreIndex";
import StoreDetail from "./components/Stores/StoreDetail/StoreDetail";
import DishDetail from "./components/Dishes/DishDetail";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

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
        </Switch>}
      
    </>
  );
}

export default App;