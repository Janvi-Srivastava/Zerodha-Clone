import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  const menuClass = "menu";
  const activeClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              onClick={()=>handleMenuClick(0)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 0 ? activeClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
          <Link
              to="/orders"
              onClick={()=>handleMenuClick(1)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 1 ? activeClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
          <Link
              to="/holdings"
              onClick={()=>handleMenuClick(2)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 2 ? activeClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
          <Link
              to="/positions"
              onClick={()=>handleMenuClick(3)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 3 ? activeClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
          <Link
              to="/funds"
              onClick={()=>handleMenuClick(4)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 4 ? activeClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
          <Link
              to="/apps"
              onClick={()=>handleMenuClick(5)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 5 ? activeClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
