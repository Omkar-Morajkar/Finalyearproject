import React, { useState } from 'react';
import CustCard from './CustCard';
import Menu from './CustApi';

const Donate = () =>{
    const[menuData, setMenuData] = useState(Menu);
    return(
        <>
            <div id='Login'>
                <CustCard menuData={menuData}/>
            </div>
            
        </>
    );
}
export default Donate;