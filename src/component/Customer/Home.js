import React from 'react'
import CustHome from './CustHome';
import Footer from './Footer';
import CustCard from './CustCard';
import Menu from './CustApi';
import { useState } from 'react';

const Home = (props) => {
    const[menuData, setMenuData] = useState(Menu);
    return (
        <>
            <CustHome/>
            <CustCard menuData={menuData}/>
            <Footer/>
        </>
    );
}
export default Home;