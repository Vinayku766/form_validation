import {useEffect, useState} from "react";
import "./style.css";

  const Login = () => {
  const [loginValues, setLoginValues] = useState({
    username:"",
    password:""
  });
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loginData, setLoginData] = useState(null);

  useEffect(() => {
  // console.log(errors);
   if(isSubmit && Object.keys(errors).length === 0)
   setLoginData(loginValues);
  }, [errors])
  
  const handleSubmit = (e) => {
   e.preventDefault();
   setErrors(validate(loginValues));
   setIsSubmit(true);
  }

 const handleChange = (e) => {
   const {name, value} = e.target;
   setLoginValues({...loginValues, [name]:value})
 }

 const validate = (values) => {
  const errors = {};
  if(!values.username){
    errors.username = "Username is not Valid!";
  }
  if(!values.password){
    errors.password = "Password is not Valid!";
  }
  return errors;
 }

//  if(isSubmit && Object.keys(errors).length === 0 && loginData !== null)
//  return console.log(loginData);

  return <div className="login">
     {(isSubmit && loginData !== null)? <div className="login-success"><h1>Login Successfully!</h1></div>: <><h1>Login here!</h1>
     <form className="form" onSubmit={handleSubmit}>
      <div className="input-field">
      <label>Username</label>
      <input placeholder="Username" value={loginValues.username} name="username" onChange={handleChange}/>
      <p>{errors.username}</p>
      </div>
      <div className="input-field">
      <label>Password</label>
      <input placeholder="Password" value={loginValues.password} name="password" onChange={handleChange}/>
      <p>{errors.password}</p>
      </div>
      <button className="login-btn" type="submit">Login</button>
     </form></>}

  </div>
}


export default Login