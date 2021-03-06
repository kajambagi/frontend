import React from "react";

import { NavLink } from "react-router-dom";
import BookOrder from "./bookorders";
//import OrderDetail from "./orderdetails";
 
const Nav = () => {
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
              

              
              <li className="nav-item">
                <NavLink className="nav-link" to="/bookorders">
                  BookOrder
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/orderdetails">
                  OrderDetail
                </NavLink>
                </li>
                <li>
               
              </li>
              
              
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;