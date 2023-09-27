import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom";

import { fetchAllStores } from "../../store/stores";

import { fetchAllShoppingCarts } from "../../store/shoppingcarts";

import "./LoginForm.css";

function LoginFormModal({ handleSwitchModal}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [formErrors, setFormErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const { closeModal } = useModal();

  if(typeof handleSwitchModal === 'function'){
    handleSwitchModal();
  }

  useEffect(() => {
    const errorObj = {};

    if(!email)errorObj.email = 'Email is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      errorObj.invalidEmail = "Please enter a valid email address like: user@email.com";
    }

    if (!password) errorObj.password = "Password is required";

    if (password.length < 6) {
      errorObj.invalidPassword = "Password must be at least 6 characters";
    }

    setErrors(errorObj);
  }, [email]);


  

  const handleSubmit =async (e) => {
    e.preventDefault();
   
    
    setIsSubmitting(true);
    if(Object.keys(errors).length){
      return;
    }
  
    return dispatch(sessionActions.login({ credential:email, password }))
      .then(async ()=>{
        closeModal();
        dispatch(fetchAllShoppingCarts())
        setErrors({});
        await dispatch(fetchAllStores());
        history.push('/');
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };
  

  const handleDemoUserSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    await dispatch(sessionActions.login({ credential:'demo@user.io', password:'password' }));
    await dispatch(fetchAllStores());
    closeModal();
    dispatch(fetchAllShoppingCarts())
    history.push('/');
  };


  return (
    <div className="login-modal">
     <img src="https://cdn.discordapp.com/attachments/811082976501825539/1142352525379510372/logo_copy.png" alt="logo" className="amber-eats-logo-login"/>
      <form onSubmit={handleSubmit} className="login-modal-form">
        <label>
          <div className="login-modal-single-title">Email</div>
          
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {isSubmitting && errors.email && (
          <p className="login-error">{errors.email}</p>
        )}
        {isSubmitting && errors.invalidEmail && (
          <p className="login-error">{errors.invalidEmail}</p>
        )}
        <label>
        <div className="login-modal-single-title">Password</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.credential && (
          <p className="login-error">{errors.credential}</p>
        )}
        <button  className="login-submit">Log In</button>
      </form>
      <button type="button" onClick={handleDemoUserSubmit} className="login-demo-user">Log in as Demo User</button>
    </div>
  );
}

export default LoginFormModal;