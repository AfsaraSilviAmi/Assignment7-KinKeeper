import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Footer from '../Components/Footer/Footer';

const LayOut = () => {
  
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
              <ToastContainer />
        </div>
    );
};

export default LayOut;