import { useState } from "react";
import { useNavigate } from "react-router-dom";

function loginPageHandler(updateUserDetails) {
  // The logic here referenced variables only available in the LoginPage component.
  // If you want to use this handler, pass all required state and functions as arguments.
  // Example usage (uncomment and adapt as needed):
  // function loginPageHandler(updateUserDetails, formData, setErrors, setMessage) { ... }
}

function LoginPage(props){
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  };

const validate=()=>{
  let isValid = true;
  const newErrors = {};

  if(formData.username.length === 0){
    isValid = false;
    newErrors.username = "Username is mandatory";
  }

  if(formData.password.length === 0){
    isValid = false;
    newErrors.password = "Password is mandatory";
  }

  setErrors(newErrors);
  return isValid;
};

const handleSubmit = (e) => {
  e.preventDefault();
  if(validate()){
    if(formData.username === "admin" && formData.password === 'admin'){
      setMessage('Valid credentials');
      if (props.onLoginSuccess) {
        props.onLoginSuccess({
          name: 'Aditi',
          email: 'aditi@gmail.com'
        });
      }
      navigate('/dashboard');
    }else{
      setMessage('Invalid credentials');
    }
  }
  };

  return(
    <div className="container text-center">
      {message && (message)}
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && (errors.username)}
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && (errors.password)}
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;