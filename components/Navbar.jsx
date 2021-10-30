import {useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

import {UserContext} from './../context/UserContext';

function Navbar() {

    const {user, setUser} = useContext(UserContext);



    const logout = async () => {
      try {
        const res = await axios.get('https://tours-explorer.herokuapp.com/api/v1/users/logout/', 
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

    console.log(user);
    return (
        <div>
            <header className="header-t">
              <nav className="nav nav--tours">
                <a href="#" className="nav__el">All tours</a>
                <form className="nav__search">
                  <button className="nav__search-btn">
                    <svg>
                      <use href="img/icons.svg#icon-search"></use>
                    </svg>
                  </button>
                  <input
                    type="text"
                    placeholder="Search tours"
                    className="nav__search-input"
                  />
                </form>
              </nav>

              <Link href="/">
              
                <div className="header__logo">
                  <img src="img/logo-white.png" alt="Natours logo" />
                </div>
              </Link>

              <nav className="nav nav--user">

                
                {
                    user?.name ?
                    <>
                    <a href="#" className="nav__el">My bookings</a>
                    <a href="#" className="nav__el">
                      <Image src="/img/default.jpg" width={35} height={35} alt="User photo" className="nav__user-img" />
                      <span>{user.name}</span>
                    </a>
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
            </header>
        </div>
    )
}

export default Navbar
