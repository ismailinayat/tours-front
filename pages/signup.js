import useInputState from '../hooks/useInputState.js';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import {useContext, useEffect} from 'react';

import { UserContext } from '../context/UserContext.js';



function SignUp() {


    const {user, setUser} = useContext(UserContext);
    const [email, updateEmail] = useInputState('');
    const [name, updateName] = useInputState('');
    const [password, updatePassword] = useInputState('');
    const [passwordConfirm, updatePasswordConfirm] = useInputState('');

    useEffect(() => {
        if(!localStorage.getItem("user")) {
          localStorage.setItem("user", "{}")
        }
  
        if (JSON.parse(localStorage.getItem("user")).name) {
          return window.location.replace("/")
        }
  
  
        localStorage.setItem("user", JSON.stringify(user));
        //window.location.replace("http://localhost:3000")
          
  
      }, [user])

      
const signup = async (e) => {
    try {
        const res = await axios.post('http://localhost:8000/api/v1/users/signup/', 
                        {name: e.target.name.value, 
                         email: e.target.email.value, 
                         password: e.target.password.value, 
                         passwordConfirm: e.target.passwordConfirm.value},
                         {withCredentials: true})

        setUser(res.data.data.user)
        window.location.replace("http://localhost:3000");


        console.log(res.data.data)
    } catch(err) {console.log(err.response)};

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(e)
    }
    return (
        <div className="login-containert">
            <div className="login-formt">
            <h2 className="heading-secondary ma-bt-lg">Create your account</h2>
            <form className="formt form--logint" onSubmit={(e) => handleSubmit(e)}>

                <div className="form__groupt">
                    <label className="form__labelt" htmlFor="email">Email address</label>
                    <input className="form__inputt" onChange={updateEmail} value={email} id="email" type="email" placeholder="you@example.com" required="required"/>
                </div>

                <div className="formt__groupt">
                    <label className="form__labelt" htmlFor="name">Name</label>
                    <input className="form__inputt" onChange={updateName} value={name} id="name" type="text" placeholder="your name" required="required"/>
                </div>

                <div className="form__groupt ma-bt-md">
                    <label className="form__labelt" htmlFor="password">Password</label>
                    <input className="form__inputt" onChange={updatePassword} value={password} id="password" type="password" placeholder="••••••••" required="required" minLength="8"/>
                </div>
                <div className="form__groupt ma-bt-md">
                    <label className="form__labelt" htmlFor="passwordConfirm">Password Confirm</label>
                    <input className="form__inputt" onChange={updatePasswordConfirm} value={passwordConfirm} id="passwordConfirm" type="password" placeholder="••••••••" required="required" minLength="8"/>
                </div>
                <div className="form__groupt">
                    <button className="btn btn--green">Sign Up</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default SignUp;
