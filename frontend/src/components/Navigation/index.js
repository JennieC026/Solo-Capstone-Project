import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import ShoppingCartsIndex from "../ShoppingCarts/ShoppCartsIndex/ShoppingCartsIndex";
import "./Navigation.css";
import OpenLeftSideModalButton from "../OpenModalButton/LeftSide";
import OpenRightSideModalButton from "../OpenModalButton/RightSide";
import  UserProfileModal  from "../User/UserProfileModal";
import ShoppingCartDetail from "../ShoppingCarts/ShoppingCartDetail/ShoppingCartDetail";

function Navigation({ isLoaded }) {
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const sessionUser = useSelector((state) => state.session.user);
  const shoppingCarts = useSelector(state => state.shoppingCarts);
  const shoppingCartsArr = Object.values(shoppingCarts).filter(shoppingCart => shoppingCart.status === 'open');
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  let checkIfOnlyOneCart;

        if(shoppingCartsArr.length === 1){
            checkIfOnlyOneCart = true;
        }else{
            checkIfOnlyOneCart =  false;
        }

        let cartIndexButton;
        if(checkIfOnlyOneCart){
          cartIndexButton = (
            <div>
              < OpenRightSideModalButton 
          buttonText={<i class="fa-solid fa-cart-shopping"></i>}
           modalComponent={<ShoppingCartDetail shoppingCart={shoppingCartsArr[0]}/>}
        />
              </div>
          )
        }else{
          cartIndexButton = (
            <div>
              <button onClick={openMenu}>
        <i className="fas fa-shopping-cart" />
      </button>
      <div className={ulClassName} ref={ulRef}>
        <ShoppingCartsIndex />
        </div>
              </div>
          )
        }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div>
        < OpenLeftSideModalButton 
          buttonText={<i class="fa-solid fa-bars"></i>}
           modalComponent={<UserProfileModal />}
        />
        <div>
        {/* <ProfileButton user={sessionUser} /> */}
      </div>
      <div>
      {cartIndexButton}
       
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
        <NavLink exact to="/stores">
          Home
        </NavLink>
      </div>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;