// import React, { useState } from "react";
import "./Header.css";
import HeaderSocials from "./HeaderSocials";
// import { NavLink, Link } from "react-router-dom";


const Header = () => {
	return (
		<div>
			<header className="header">
				<ul>
					<li>
						<span className="homei">Home</span>
					</li>
					<li>
						<span className="ec">Education</span>
					</li>
					<li>
						<span className="xp">Experience</span>
					</li>
					<li>
						<span className="projects">Projects</span>
					</li>
					<li>
						<span className="cr">Resume</span>
					</li>
				</ul>
				<HeaderSocials />
			</header>
		</div>
	)
}

export default Header