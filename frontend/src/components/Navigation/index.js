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

  const handleSearchEnter = (e)=>{
    if(e.key === 'Enter'){
      alert('search feature coming soon!');
    }
  }

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
            <div className="navigation-shopping-cart-button-container">
              < OpenRightSideModalButton 
          buttonText={<><i class="fa-solid fa-cart-shopping"></i><p>{shoppingCartsArr?.length}{shoppingCartsArr?.length===1?'cart':'carts'}</p></>}
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
      <div className="navigation-bar-container">
        <div className="left-side-modal-button-container">
          <div className="left-side-profile-button-container">
        < OpenLeftSideModalButton 
          buttonText={<i class="fa-solid fa-bars"></i>}
           modalComponent={<UserProfileModal />}
        />
        </div>
        
      <div>
        <NavLink exact to="/stores">
          <img src="https://cdn.discordapp.com/attachments/811082976501825539/1142352525379510372/logo_copy.png" alt="logo" className="amber-eats-logo"/>
        </NavLink>
      </div>
      
          </div>
          <div className='navigation-search-bar-container'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type='text' placeholder='Food, groceries, drinks, etc' className='navigation-search-bar' onKeyDown={handleSearchEnter}/>

          </div>
        
      <div>
        
        <div>
        {/* <ProfileButton user={sessionUser} /> */}
      </div>
      <div>
      {cartIndexButton}
       
      </div>

      </div>
      </div>
      
      
      
    );
  } else {
    sessionLinks = (
      <div className="navigation-bar-container">
      <div>
        <NavLink exact to="/stores">
          <img src="https://cdn.discordapp.com/attachments/811082976501825539/1142352525379510372/logo_copy.png" alt="logo" className="amber-eats-logo"/>
        </NavLink>
      </div>
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
      </div>
    );
  }

  return (
    <>
    {isLoaded && sessionLinks}
    </>
    
  );
}

export default Navigation;