import React, { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
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

  useEffect(() => {
    const errorObj = {};

    if (!email) errorObj.email = "Email is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      errorObj.invalidEmail = "Please enter a valid email address";
    }

    if (!username) errorObj.username = "Username is required";

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

    if(phoneNumber.length>11) errorObj.invalidPhoneNumber = "Phone Number must be between or equal to 10 and 11 characters";

    setErrors(errorObj);
  }, [email,username,firstName,lastName,password,phoneNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (password === confirmPassword) {
      if(Object.keys(errors).length>0) return;
      setErrors({});
      console.log('phone',phoneNumber)
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

  const disabled = password.length < 6 || email.length < 4 || username.length < 4 || firstName.length < 2 || lastName.length < 2 || phoneNumber.length < 8 || password !== confirmPassword;

  return (
    <>
      <h1>Sign Up</h1>
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
        {isSubmitting && errors.email && errors.email==='email must be unique' && <p className="login-error">Email address is already in use</p>}
        {isSubmitting && errors.email && errors.email!=='email must be unique'  && <p className="login-error">{errors.email}</p>}
        {isSubmitting && errors.invalidEmail && (
          <p className="login-error">{errors.invalidEmail}</p>
        )}
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        {username.length < 4 && username.length > 0 && (
          <p className="login-error">Please input a valid username</p>
        )}
        {isSubmitting && errors.username &&errors.username ==='username must be unique'&& <p className="login-error">Username is already in use</p> }
        {isSubmitting && errors.username &&errors.username !=='username must be unique'&& <p className="login-error">{errors.username}</p> }
        {isSubmitting && errors.inValidUsername && (
          <p className="login-error">{errors.inValidUsername}</p>
        )}
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        {firstName.length < 2 && firstName.length > 0 && (
          <p className="login-error">Please input a valid first name</p>
        )}
        {isSubmitting && errors.firstName && <p className="login-error">{errors.firstName}</p>}
        {isSubmitting && errors.invalidFirstName && (
          <p className="login-error">{errors.invalidFirstName}</p>
        )}
        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        {lastName.length < 2 && lastName.length > 0 && (
          <p className="login-error">Please input a valid last name</p>
        )}
        {isSubmitting && errors.lastName && <p className="login-error">{errors.lastName}</p>}
        {isSubmitting && errors.invalidLastName && (
          <p className="login-error">{errors.invalidLastName}</p>
        )}
        <label>
          Phone Number
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        {phoneNumber.length < 10 && phoneNumber.length > 0 && (
          <p className="login-error">Phone Number must be between or equal to 10 and 11 characters</p>
        )}
        {isNaN(phoneNumber) && (
          <p className="login-error">Please input a valid phone number</p>
        )}
        {isSubmitting && errors.phoneNumber && <p className="login-error">{errors.phoneNumber}</p>}
        {isSubmitting && errors.invalidPhoneNumber && (
          <p className="login-error">{errors.invalidPhoneNumber}</p>
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
          <p className="login-error">Please input a valid password</p>
        )}
        {isSubmitting && errors.password && <p className="login-error">{errors.password}</p>}
        {isSubmitting && errors.invalidPassword && (
          <p className="login-error">{errors.invalidPassword}</p>
        )}
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {errors.confirmPassword && (
          <p className="login-error">{errors.confirmPassword}</p>
        )}
        <button type="submit" disabled={disabled}>Sign Up</button>
      </form>
    </>
  );
}

export default SignupFormModal;