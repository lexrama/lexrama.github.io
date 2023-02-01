// import React, { useState } from "react";
import "./Header.css"
import Resume from "../assets/resume.pdf"
import HeaderSocials from "./HeaderSocials"
// import { NavLink, Link } from "react-router-dom";


const Header = () => {
	return (
		<div>
			<button className="header-button">hi</button>
			<header className="header">
				<ul>
					<li>
						<span className="header-button">Home</span>
					</li>
					<li>
						<span className="header-button">Education</span>
					</li>
					<li>
						<span className="header-button">Experience</span>
					</li>
					<li>
						<span className="header-button">Projects</span>
					</li>
					<li>
						<a
							className="header-button"
							href={Resume}
							target={"_blank"}
							rel='noreferrer'>
							Resume</a>
					</li>
				</ul>
				<HeaderSocials />
			</header>
		</div>
	)
}

export default Header