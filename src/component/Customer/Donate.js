import React, { useState } from 'react';
import CustCard from './CustCard';
import Menu from './CustApi';

const Donate = () =>{
    const[menuData, setMenuData] = useState(Menu);
    return(
        <>
            <CustCard menuData={menuData}/>
        </>
    );
}
export default Donate;