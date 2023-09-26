import React, { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";
import "./SignupForm.css";

function SignupFormModal({handleSwitchModal}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [apiErrorArr, setApiErrorArr] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { closeModal } = useModal();

  if(typeof handleSwitchModal === 'function'){
    handleSwitchModal();
  }


  useEffect(() => {
    const errorObj = {};

    if (!email) errorObj.email = "Email is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      errorObj.invalidEmail = "Please enter a valid email address";
    }

    if (!username) errorObj.username = "Username is required";
     
    if(username.length<4) errorObj.inValidUsername = "Username must be at least 4 characters";

    if(username.length>25) errorObj.inValidUsername = "Username must be less than 50 characters";
    
    if (!password) errorObj.password = "Password is required";

    if (password.length < 6) {
      errorObj.invalidPassword = "Password must be at least 6 characters";
    }

    if (!firstName) errorObj.firstName = "First Name is required";

    if (!lastName) errorObj.lastName = "Last Name is required";

    if(firstName.length<2) errorObj.invalidSecondFirstName = "First Name must be at least 2 characters";

    if(firstName.length>50) errorObj.invalidFirstName = "First Name must be less than 50 characters";

    if(lastName.length>50) errorObj.invalidLastName = "Last Name must be less than 50 characters";

    if(lastName.length<2) errorObj.invalidSecondLastName = "Last Name must be at least 2 characters";

    if(!phoneNumber) errorObj.phoneNumber = "Phone Number is required";

    if(phoneNumber.length>11||phoneNumber.length<10) errorObj.invalidPhoneNumber = "Phone Number must be between or equal to 10 and 11 characters";

    setErrors(errorObj);
  }, [email,username,firstName,lastName,password,phoneNumber]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (password === confirmPassword) {
      if(Object.keys(errors).length>0) return;
      setErrors({});
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password,
          phoneNumber,
        })
      )
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
          }
        });
    }
    return setErrors({
      confirmPassword: "Confirm Password field must be the same as the Password field"
    });
  };

  const disabled =  password !== confirmPassword;


  const handleDemoUserSubmit = async (e) => {
    e.preventDefault();
    await dispatch(sessionActions.login({ credential:'demo@user.io', password:'password' }));
    closeModal();
    history.push('/');
  };

  return (
    <div className="sign-up-modal">
       <img src="https://cdn.discordapp.com/attachments/811082976501825539/1142352525379510372/logo_copy.png" alt="logo" className="amber-eats-logo-login"/>
      <form onSubmit={handleSubmit} className="signup-modal-form">
        <label>
        <div className="signup-modal-single-title">Email</div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {isSubmitting && errors.email && errors.email==='email must be unique' && <p className="login-error">Email address is already in use</p>}
        {isSubmitting && errors.email && errors.email!=='email must be unique'  && <p className="login-error">{errors.email}</p>}
        {isSubmitting && errors.invalidEmail && (
          <p className="login-error">{errors.invalidEmail}</p>
        )}
        <label>
        <div className="signup-modal-single-title">Username</div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        {isSubmitting && errors.username &&errors.username ==='username must be unique'&& <p className="login-error">Username is already in use</p> }
        {isSubmitting && errors.username &&errors.username !=='username must be unique'&& <p className="login-error">{errors.username}</p> }
        {isSubmitting && errors.inValidUsername && (
          <p className="login-error">{errors.inValidUsername}</p>
        )}
        <label>
        <div className="signup-modal-single-title">First Name</div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
       
        {isSubmitting && errors.firstName && <p className="login-error">{errors.firstName}</p>}
        {isSubmitting && errors.invalidFirstName && (
          <p className="login-error">{errors.invalidFirstName}</p>
        )}
        <label>
        <div className="signup-modal-single-title">Last Name</div>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        {isSubmitting && errors.lastName && <p className="login-error">{errors.lastName}</p>}
        {isSubmitting && errors.invalidLastName && (
          <p className="login-error">{errors.invalidLastName}</p>
        )}
        <label>
        <div className="signup-modal-single-title">Phone Number</div>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        {isNaN(phoneNumber) && (
          <p className="login-error">Phone number can't have characters</p>
        )}
        {isSubmitting && errors.phoneNumber && <p className="login-error">{errors.phoneNumber}</p>}
        {isSubmitting && errors.invalidPhoneNumber && (
          <p className="login-error">{errors.invalidPhoneNumber}</p>
        )}
        <label>
        <div className="signup-modal-single-title">Password</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        
        {isSubmitting && errors.password && <p className="login-error">{errors.password}</p>}
        {isSubmitting && errors.invalidPassword && (
          <p className="login-error">{errors.invalidPassword}</p>
        )}
        <label>
        <div className="signup-modal-single-title">Confirm Password</div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {password !== confirmPassword && (
          <p className="login-error">Confirm Password must be the same as the Password</p>
        )}
        {errors.confirmPassword && (
          <p className="login-error">{errors.confirmPassword}</p>
        )}
        <button type="submit" disabled={disabled} className="signup-submit">Sign Up</button>
      </form>
      <button type="button" onClick={handleDemoUserSubmit} className="login-demo-user">Log in as Demo User</button>
    </div>
  );
}

export default SignupFormModal;