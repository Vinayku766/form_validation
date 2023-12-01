import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css";

const Register = () => {
  const [formValues, setFormValues] = useState({
   username: "",
   email: "",
   password: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // console.log(formErrors)
  if(Object.keys(formErrors).length === 0 && isSubmit)
  setFormData(formValues);
  }, [formErrors])


  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  // if(isSubmit && Object.keys(formErrors).length === 0)console.log(formData);
  
  const validate = (values) => {
    const errors = {};
    if(values.username === ""){
      errors.username = "Username is Required!"
    }
    if(values.email === ""){
      errors.email = "Email is Required!"
    }
    if(values.password === ""){
      errors.password = "Password is Required!"
    } else if(values.password.length < 4){
      errors.password = "Password should require more than 4 characters";
    } else if(values.password.length > 9){
      errors.password = "Password should not exceed more than 8 characters";
    }
    return errors;
  }

  return (
    <div className="register">
    {(isSubmit && Object.keys(formErrors).length === 0) ?<div className="after-registration"><h1>Registration Successfully!</h1><button className="login-btn" onClick={() => navigate("/login")}>Go to Login Page </button></div>:
       <> <h1>Register here!</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Username</label>
            <input placeholder="Username" name="username" value={formValues.username} onChange={handleChange} type="text"/>
            <p>{formErrors.username}</p>
          </div>
          <div className="form-field">
            <label>E-mail</label>
            <input placeholder="E-mail" name="email" value={formValues.email} onChange={handleChange} type="email"/>
            <p>{formErrors.email}</p>
          </div>
          <div className="form-field">
            <label>Password</label>
            <input placeholder="Password" name="password" value={formValues.password} onChange={handleChange} type="password"/>
            <p>{formErrors.password}</p>
          </div>
          <button className="register-btn" type="submit">Register</button>
          <div className="backtologin">
            <p>Already Registered ?</p>
            <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
          </div>
        </form>
        </>}
    </div>
    
  )
}

export default Register