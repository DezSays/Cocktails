import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import '../styles/CocktailNavbar.css'
import {FaCocktail} from 'react-icons/fa'

const CocktailNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
    <Container>
      <Navbar.Brand href="/"><span className='title-nav'>DezSays </span><FaCocktail size={20}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className='path'>Home</Link>
            <Link to="/Recipes" className='path'>Recipes</Link>
            <Link to="/Favorites" className='path'>Favorites</Link>
          </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default CocktailNavbar




// function CollapsibleExample() {
//   return (
//     // <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
//       // <Container>
//         // <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         // <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//             <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Nav.Link href="#deets">More deets</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               Dank memes
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       {/* </Container> */}
//     // </Navbar>
//   );
// }

// export default CollapsibleExample;