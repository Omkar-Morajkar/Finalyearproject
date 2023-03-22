import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/im";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { useNavigate } from 'react-router-dom';
import axios from "axios"; 
import imagelogo from '../component/Images/project.png';

const Nav = styled.div`
background-color: #007bff;
  border: 3px solid white;
  width:100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: inset 0px 10px 10px 0px rgba(0, 0, 0, 0.5);
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;

`;
 
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
//  #87CEFA
const SidebarNav = styled.nav`
  background:#ddf2ff ;
  box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  width:225px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 400ms;
  z-index: 10;
  
`

 
const SidebarWrap = styled.div`
  width: 225px;
`;

 
const Sidebar = () => {

  const isLoggedIn = localStorage.getItem('login');
  const dlogi = localStorage.getItem('Dlogin');

  // const [users, setUsers] = useState([]);
  useEffect(() => {
      console.log(localStorage.getItem('Demail'));
      console.log(localStorage.getItem('email'));
  }, []); 


  const [sidebar, setSidebar] = useState(false);

  const navigate = useNavigate();
 
  const showSidebar = () => setSidebar(!sidebar);
  
  if(sidebar && document.getElementById("Login") && document.getElementById("mydiv"))
  {
    document.getElementById("Login").style.marginLeft = "225px";
    document.getElementById("Login").style.transition = '400ms';
    document.getElementById("mydiv").style.marginLeft = "225px";
    document.getElementById("mydiv").style.transition = '400ms';
  }
  else if(!sidebar && document.getElementById("Login") && document.getElementById("mydiv"))
  {
    document.getElementById("Login").style.marginLeft = "0px";
    document.getElementById("mydiv").style.marginLeft = "0px";
  }

  const logout = () => {
    localStorage.removeItem('login'); 
    localStorage.removeItem('Dlogin');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    localStorage.removeItem('Demail');
    alert("Logout successful");
    navigate('/');
  };

  const login = () => {
    navigate('/Login');
  };

  

  return (
    <>
    
    
      <IconContext.Provider value={{ color: "black" }}>
        <div id="mydiv" className="mydiv">
        <Nav>
          <NavIcon to="#">
            <FaIcons.ImMenu onClick={showSidebar}/>
          </NavIcon>

          <div style={{marginLeft:'30px'}}>
             <img className="d-block w-100" src={imagelogo} style={{width:'40px',height:'40px'}} />
          </div>

          <h2 style={{ textAlign: "center", marginLeft: "200px", color: "white" }}> Fundpeti </h2>
          
          {isLoggedIn || dlogi ? (
            <button type="submit" onClick={logout} className="btn btn-primary btn-lg" name="submit"  style={{ background:'white',color:'blue', position: "absolute", right: '50px', width: '100px',height:'40px',fontSize:'12pt' }}>Logout</button>
          ) : (
          <>
            <button type="submit" onClick={login} className="btn btn-primary btn-lg" name="submit"  style={{ background:'white',color:'blue', position: "absolute", right: '50px', width: '100px',height:'40px',fontSize:'12pt' }}>Login</button>
            
            </>
          )}
        </Nav>

        </div>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom: '20px' }}>
              <img src="https://static.vecteezy.com/system/resources/previews/005/276/776/original/logo-icon-person-on-white-background-free-vector.jpg" style={{width:'70px',height:'70px',borderRadius:'50%',objectFit:'cover',boxShadow:'  0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}}></img>
            </div><br/><br/>

            <div>

            <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }} >
            {isLoggedIn || dlogi ? (
              <>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', background:'white',height:'40px', borderRadius:'10px',width:'90%',boxShadow:'  0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}}>
                   <p>{localStorage.getItem('email')}</p>  
                   <p>{localStorage.getItem('Demail')}</p>   
              </div>    
              </> 
            ) : (
              <>
                    <button type="submit" onClick={login} className="btn btn-primary btn-lg" name="submit"  style={{ background:'white',color:'blue', position: "absolute", right: '60px', width: '100px',height:'40px',fontSize:'12pt'}}>Login</button>   
                    <br/><br/>
                  </>
            )}
            </div>
            
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
            </div>

          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
       
    </>
  );
};
 
export default Sidebar;