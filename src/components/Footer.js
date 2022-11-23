import React from 'react'
import '../styles/Footer.css'
import {FaGithub, FaLinkedin, FaFingerprint} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footerMain'>
        <a href="http://www.github.com/DezSays" target="_blank" rel="noreferrer"><FaGithub className='icons' size={25} /></a>
											
		<a href="https://www.linkedin.com/in/dezarea-bryan/" target="_blank" rel="noreferrer"><FaLinkedin className='icons' size={25} /></a>
											
		<a href="https://dezthedev.netlify.app/" target="_blank" rel="noreferrer"><FaFingerprint className='icons' size={25} /></a>
    </div>
  )
}

export default Footer