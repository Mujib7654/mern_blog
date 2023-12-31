import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {
  const [userData, setUserData] = useState({
    user_email:'',
    password:''
  });
  // handle input change for email and password fields
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setUserData({
      ...userData,
      [name]:value
    })
  };
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/user/userlogin', userData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <table align='center'>
            <tr>
                <td>
                    Email
                </td>
                <td>
                    <input type='email' name='user_email' onChange={handleInputChange} />
                </td>
            </tr>
            <tr>
                <td>
                    Password
                </td>
                <td>
                    <input type='password' name='password' onChange={handleInputChange} />
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <button onClick={handleSubmit}>Login</button>
                </td>
            </tr>

            <tr>
                <td colSpan={2} align='center'>
                    New user <a href='/'>Register</a>
                </td>
            </tr>
        </table>
    </div>
  )
};

export default Login;