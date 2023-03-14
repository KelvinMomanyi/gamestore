import React,{useState} from 'react'
import Lg2 from '../images/lg2.svg'
import { useNavigate} from 'react-router-dom'

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would perform some authentication logic to check if the provided
    // username and password are valid. For this example, we'll just assume that
    // the login is successful if the username is "admin" and the password is "password".
    if (username === "KelvinMata" && password === "12345") {
      navigate("/Home"); // redirect to the dashboard page if the login is successful
    } else {
      alert("Invalid username or password"); // display an error message if the login is unsuccessful
    }
  };

  return (

    <div className='logpage'>
      <img src={Lg2} className='log1'/>  
       <div className='inputt' onSubmit={handleSubmit}>
          <input placeholder='Email' className='input-mail' value={username} onChange={handleUsernameChange} />
          <input placeholder='Password' className='input-pass' value={password} onChange={handlePasswordChange}/>
          <button type="submit" className='button3' onClick={handleSubmit}>Login</button>
       </div>
      


    </div>
  )
}

export default LoginPage