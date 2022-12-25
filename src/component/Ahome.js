import React from 'react';
import { useState } from 'react';

export default function Ahome(){
  

    return(
      <>
      <div>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />
        <link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css" />
        {/* cdnjs.com / libraries / fontawesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
        {/* css ekternal */}
        <link rel="stylesheet" href="css/style.css" />
        <title>Collapsible Bootstrap Sidebar Navigation Example</title>
        <style dangerouslySetInnerHTML={{__html: "\n    body { background-color: #fafafa; }\n  " }} />
        {/* start wrapper */}
        <div className="wrapper">
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3>jQueryScript</h3>
            </div>
            <ul className="lisst-unstyled components">
              <p>Menu List</p>
              <li className="active">
                <a href="#foodSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">DropDown Menu</a>
                <ul className="collapse lisst-unstyled" id="foodSubmenu">
                  <li><a href="#">jQuery</a></li>
                  <li><a href="#">Script</a></li>
                  <li><a href="#">Net</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </nav>
          <div id="content">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <button type="button" id="sidebarCollapse" className="btn btn-dark">
                  <i className="fas fa-bars" /><span> Toggle Sidebar</span>
                </button>
              </div>
            </nav>
            <br /><br />
            <h1>Collapsible Bootstrap Sidebar Navigation Example</h1>
            <div id="carbon-block" className="my-3" />
            <div className="my-3">
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ipsum cumque nemo architecto laboriosam perspiciatis consequatur atque quidem vel excepturi distinctio recusandae reprehenderit vitae, libero unde ea temporibus quaerat animi ducimus ratione esse? Aspernatur magnam facere suscipit vitae itaque maxime quo amet officiis animi, harum et inventore delectus nihil cumque!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sit nostrum aliquid mollitia optio veniam at excepturi vitae sint laudantium fugit ratione molestias, doloremque cumque eaque eligendi nobis quia. Labore officiis quisquam officia dolore! Eos labore, alias, voluptatem maxime sunt culpa dolorum at quam architecto impedit cupiditate quis ipsum odit, necessitatibus accusantium quod quo molestias enim laboriosam! Maiores facere accusamus repellat saepe enim omnis perspiciatis dolor, cupiditate ex doloremque laudantium similique sunt quisquam! Quaerat, facere ipsum natus officia cupiditate repellendus.</p>
            <div className="line" />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione voluptas consequuntur laboriosam quia vero corporis, officiis, dolore natus iste incidunt animi dolor porro accusamus similique aut, facilis architecto quas? Assumenda mollitia error vel blanditiis perferendis quis sequi deleniti repellat laboriosam!</p>
          </div>
        </div>
        {/* wrapper and */}
        {/* Option 2: jQuery, Popper.js, and Bootstrap JS */}
      </div>
       
      </>        
    );
}

