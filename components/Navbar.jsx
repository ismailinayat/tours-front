import {useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';
import axios from 'axios';

import {UserContext} from './../context/UserContext';

import MobileNav from './MobileNav';

function Navbar() {

    const {user, setUser} = useContext(UserContext);
    const router = useRouter();

    //console.log(router)

    

    const logout = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/v1/users/logout/', 
        {withCredentials: true}
        )
        //window.location.replace("http://localhost:3000");
  
        setUser({});
        window.localStorage.setItem("user", JSON.stringify({}))
      } catch(err) {console.log(err.response)};
  
    }

    const handleLogout = () => {
      logout();
    }

    //console.log(user);
    return (
        <div>
            <header className="header-t">

              

              <Link href="/">
              
                <div className="header__logo">
                  <img src="/img/logo-white.png" alt="Natours logo" />
                </div>
              </Link>

              <nav className="nav nav--user">

                
                {
                    user?.name ?
                    <>
                      <a href="#" className="nav__el">
                        <Image src="/img/default.jpg" width={50} height={50} alt="User photo" className="nav__user-img" />
                        <span>{user.name}</span>
                      </a>
                      <a href="#" className="nav__el" >My Bookings</a>
                      <a href="#" className="nav__el" onClick={handleLogout}>Logout</a>
                    </>
                  :
                    <>
                    <Link href="/login">
                    
                      <button className="nav__el">Log in</button>
                    </Link>

                    <Link href="/signup">
                    
                    <button className="nav__el nav__el--cta">Sign up</button> 
                    </Link>
                    </>
                }

                
                

              </nav>
              <MobileNav></MobileNav>
            </header>
        </div>
    )
}

export default Navbar
