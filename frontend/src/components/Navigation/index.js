import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import ShoppingCartsIndex from "../ShoppingCarts/ShoppCartsIndex/ShoppingCartsIndex";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div>
        <div>
        <ProfileButton user={sessionUser} />
      </div>
      <div>
       <ShoppingCartsIndex />
      </div>

      </div>
      
      
    );
  } else {
    sessionLinks = (
      <div>
        <OpenModalButton
          buttonText="Log In"
          modalComponent={<LoginFormModal />}
        />
        <OpenModalButton
          buttonText="Sign Up"
          modalComponent={<SignupFormModal />}
        />
      </div>
    );
  }

  return (
    <div>
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;