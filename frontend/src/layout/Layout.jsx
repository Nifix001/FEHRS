import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const Layout = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    let isMounted = true;
    const redirectTimer = setTimeout(() => {
      // Redirect to login if the user is not logged in after a delay (e.g., 2000 milliseconds)
      if (isMounted && !user) {
        navigate('/login');
      }
    }, 2000); // Set the desired delay in milliseconds

    // Clear the timer if the component unmounts
    return () => {
        isMounted = false;
        clearTimeout(redirectTimer);
      }
  }, [user]);


  return (
    <React.Fragment>
       {user ? 
              <>
                <Nav />
                <SideBar />
                <Outlet />
              </>
              : <>
                <h2> This user is not logged in! </h2>
              </>
        }
    </React.Fragment>
  )
}

export default Layout
