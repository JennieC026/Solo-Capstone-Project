import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom";
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
      errorObj.invalidEmail = "Please enter a valid email address";
    }

    if (!password) errorObj.password = "Password is required";

    if (password.length < 6) {
      errorObj.invalidPassword = "Password must be at least 6 characters";
    }

    setErrors(errorObj);
  }, [email]);


  

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    return dispatch(sessionActions.login({ credential:email, password }))
      .then(()=>{
        closeModal();
        setErrors({});
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
    setIsSubmitting(true);
    await dispatch(sessionActions.login({ credential:'demo@user.io', password:'password' }));
    closeModal();
    setErrors({});
    history.push('/');
  };
   const disabled = password.length < 6 || email.length < 4

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {email.length < 4 && email.length > 0 && (
          <p className="login-error">Please input a valid email</p>
        )}
        {isSubmitting && errors.email && (
          <p className="login-error">{errors.email}</p>
        )}
        {isSubmitting && errors.invalidEmail && (
          <p className="login-error">{errors.invalidEmail}</p>
        )}
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {password.length < 6 && password.length > 0 && (
          <p className="login-error">Password must be at least 6 characters.</p>
        )}
        {errors.credential && (
          <p>{errors.credential}</p>
        )}
        <button type="submit" disabled={disabled}>Log In</button>
      </form>
      <button type="button" onClick={handleDemoUserSubmit}>Demo User</button>
    </>
  );
}

export default LoginFormModal;