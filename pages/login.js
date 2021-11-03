import {useContext, useEffect} from 'react';
import useInputState from '../hooks/useInputState.js';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import {useRouter} from 'next/router';

import { UserContext } from '../context/UserContext.js';
function login() {

    const router = useRouter();
    const {user, setUser} = useContext(UserContext);
    const [email, updateEmail] = useInputState('');
    const [password, updatePassword] = useInputState('');


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

    const loginHandler = async (e) => {
        try {
          const res = await axios.post('http://localhost:8000/api/v1/users/login/',
          {email: e.target.email.value, password: e.target.password.value},
          {withCredentials: true}
          )
          
          setUser(res.data.data.user)
          //localStorage.setItem("user", JSON.stringify(user));
          console.log(user)
          return window.location.replace("/");


        } catch(err) {console.log(err.response)};
    
      }

    const handleSubmit = (e) => {
      e.preventDefault();
      loginHandler(e)
    }
    return (
        <div className="login-containert">
            <>
                <ToastContainer>

                </ToastContainer>
            </>
            <div className="login-formt">
            <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
            <form className="formt form--logint" onSubmit={(e) => handleSubmit(e)}>
                <div className="form__groupt">
                  <label className="form__labelt" htmlFor="email">Email address</label>
                  <input className="form__inputt" onChange={updateEmail} value={email}id="email" type="email" placeholder="you@example.com" required="required"/>
                </div>
                <div className="form__group ma-bt-md">
                  <label className="form__labelt" htmlFor="password">Password</label>
                  <input className="form__inputt" onChange={updatePassword} value={password}id="password" type="password" placeholder="••••••••" required="required" minLength="8"/>
                </div>
                <div className="form__groupt">
                  <button className="btn btn--green">Login</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default login
