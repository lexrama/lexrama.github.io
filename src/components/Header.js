import React, { useState } from "react";
import "./Header.css"; 
import { NavLink, Link } from "react-router-dom";


const Header = () => {
  return (
	<div>
	<header className="header" style={{backgroundColor: 'red'}}>
		{/* <NavLink to={link} tag={Link} className="logo">
		<span style={{ color: theme.text }}></span>
		<span className="logo-name" style={{ color: theme.text }}>
			{greeting.logo_name}
		</span>
		<span style={{ color: theme.text }}></span>
		</NavLink> */}
		{/* <input className="menu-btn" type="checkbox" id="menu-btn" />
		<label className="menu-icon" htmlFor="menu-btn">
		<span className="navicon"></span>
		</label> */}
		<ul className="menu">
		<li>
			{/* <NavLink
			className="homei"
			to="/home"
			tag={Link}
			activeStyle={{ fontWeight: "bold" }}
			style={{ borderRadius: 5, color: theme.text }}
			>
			Home
			</NavLink> */}
			<span className="homei">Home</span>
		</li>
		<li>
			{/* <NavLink
			className="ec"
			to="/education"
			tag={Link}
			activeStyle={{ fontWeight: "bold" }}
			style={{ borderRadius: 5, color: theme.text }}
			>
			Education and Certifications
			</NavLink> */}
			Education and Certifications
		</li>
		<li>
			{/* <NavLink
			className="xp"
			to="/experience"
			tag={Link}
			activeStyle={{ fontWeight: "bold" }}
			style={{ borderRadius: 5, color: theme.text }}
			> */}
			Experience
			{/* </NavLink> */}
		</li>
		<li>
			{/* <NavLink
			className="projects"
			to="/projects"
			tag={Link}
			activeStyle={{ fontWeight: "bold" }}
			style={{ borderRadius: 5, color: theme.text }}
			> */}
			Projects
			{/* </NavLink> */}
		</li>
		<li>
			{/* <NavLink
			className="cr"
			to="/contact"
			tag={Link}
			activeStyle={{ fontWeight: "bold" }}
			style={{ borderRadius: 5, color: theme.text }}
			> */}
			Contact and Resume
			{/* </NavLink> */}
		</li>
		{/* <button {...styles} onClick={changeTheme}>
			{icon}
		</button> */}
		</ul>
	</header>
	</div>
  )
}

export default Header