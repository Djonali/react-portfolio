import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/list.svg";
import menu_close from "../../assets/x-circle.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-300px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />     
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home" offset={100}>
            <a onClick={() => setMenu("home")}>Home</a>
          </AnchorLink>
          {menu === "home" ? <div class="o-underline"></div> : <></>}
        </li>      
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <a onClick={() => setMenu("skills")}>Skills</a>
          </AnchorLink>
          {menu === "skills" ? <div class="o-underline"></div> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <a onClick={() => setMenu("projects")}>Projects</a>
          </AnchorLink>
          {menu === "projects" ? <div class="o-underline"></div> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <a onClick={() => setMenu("work")}>
              Work
            </a>
          </AnchorLink>
          {menu === "work" ? <div class="o-underline"></div> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <a onClick={() => setMenu("contact")}>Contact</a>
          </AnchorLink>
          {menu === "contact" ? <div class="o-underline"></div> : <></>}
        </li>
      </ul>
      {/* <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div> */}
    </div>
  );
};

export default Navbar;
