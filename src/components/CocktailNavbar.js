import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom'
import '../styles/CocktailNavbar.css'
import {FaCocktail} from 'react-icons/fa'

const CocktailNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
    <Container>
      <Navbar.Brand href="/"><span className='title-nav'>DezSays </span><FaCocktail className='fa-cocktail' size={20} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className='path'>Home</Link>
            <Link to="/Recipes" className='path'>Search Recipes</Link>
            <Link to="/BrowseCocktails" className='path'>Cocktail Library</Link>
          </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default CocktailNavbar

