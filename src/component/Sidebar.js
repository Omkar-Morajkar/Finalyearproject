import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/im";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { useNavigate } from 'react-router-dom';
 
const Nav = styled.div`
background-color: #007bff;
  border: 3px solid white;
  width:100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  
`;
 
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
 
const SidebarNav = styled.nav`
  background: #87CEFA;
  border: 3px solid white;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5)
  width:200px;
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
    // Reset the user authentication state
   
    localStorage.removeItem('login'); // remove the token from localStorage or sessionStorage
    localStorage.removeItem('Dlogin');
    alert("Logout successful")
    navigate('/Login');
    
  };
  return (
    <>
    
      <IconContext.Provider value={{ color: "black" }}>
        <div id="mydiv">
        <Nav>
          <NavIcon to="#">
            <FaIcons.ImMenu onClick={showSidebar}/>
          </NavIcon>
          <h2
            style={{ textAlign: "center",
                     marginLeft: "200px",
                     color: "white" }}
          >
            Fundpeti
          </h2>
          <div>
            <button type="submit" onClick={logout} className="btn btn-primary btn-lg" name="submit" style={{position:'absolute',right:'50px',width:'100px'}}>LogOut</button>
          </div>
        </Nav>
        </div>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
 
export default Sidebar;