import React from 'react'

const Register = () => {
  return (
    <div>
        <table align='center'>
            <tr>
                <td>
                    Username
                </td>
                <td>
                    <input type='text' name='user_name' />
                </td>
            </tr>
            <tr>
                <td>
                    Email
                </td>
                <td>
                    <input type='email' name='user_email' />
                </td>
            </tr>
            <tr>
                <td>
                    Dob
                </td>
                <td>
                    <input type='date' name='user_dob' />
                </td>
            </tr>
            <tr>
                <td>
                    Gender
                </td>
                <td>
                    <select name='gender'>
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
                    <input type='password' name='password' />
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <button>Registration</button>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default Register