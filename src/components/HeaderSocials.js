import React from 'react'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const HeaderSocials = () => {
	return (
		<div>
			<a href='https://linkedin.com/in/lex-rama' className='socials' target='blank'><AiFillLinkedin/></a>
			<a href='https://github.com/lexrama' className='socials' target='blank'><AiFillGithub/></a>
		</div>
	)
}

export default HeaderSocials