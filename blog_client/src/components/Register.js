import React, { useState } from 'react'
import axios from 'axios';

const Register = () => {

    const [userData, setUserData] = useState({
        user_name:'',
        user_email:'',
        user_dob:'',
        gender:'',
        password:''
    });
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
            const response = await axios.post('http://localhost:5000/api/user/addUser', userData);
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
                    Username
                </td>
                <td>
                    <input type='text' name='user_name' onChange={handleInputChange}/>
                </td>
            </tr>
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
                    Dob
                </td>
                <td>
                    <input type='date' name='user_dob' onChange={handleInputChange} />
                </td>
            </tr>
            <tr>
                <td>
                    Gender
                </td>
                <td>
                    <select name='gender' onChange={handleInputChange}>
                        <option value={""}>
                            -Select-
                        </option>
                        <option value={"male"}>
                            male
                        </option>
                        <option value={"female"}>
                            female
                        </option>
                    </select>
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
                    <button onClick={handleSubmit}>Registration</button>
                </td>
            </tr>

            <tr>
                <td colSpan={2} align='center'>
                    If already Register <a href='login'>Login</a>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default Register