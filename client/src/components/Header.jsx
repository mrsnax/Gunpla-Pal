import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'

function Header({darkMode, updateDarkMode}) {
  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand><Link to='/'><img src={darkMode ? "https://raw.githubusercontent.com/Evan-Roberts-808/Gunpla-Pal/b3d6aaa3e197ca5f44ddd9fc3709dd049176e789/.github/images/logos/Logo-Dark.svg" : "https://raw.githubusercontent.com/Evan-Roberts-808/Gunpla-Pal/b3d6aaa3e197ca5f44ddd9fc3709dd049176e789/.github/images/logos/Logo-Light.svg"}/></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="custom-header justify-content-end" style={{width: "100%"}}>
            <Navbar.Link as={Link} to='database' className={darkMode ? 'dark-link' : 'light-link'}>Database</Navbar.Link>
            <Navbar.Link as={Link} to='signup' className={darkMode ? 'dark-link' : 'light-link'}>Sign Up</Navbar.Link>
            <Navbar.Link as={Link} to='login' className={darkMode ? 'dark-link' : 'light-link'}>Login</Navbar.Link>
            <div id="toggle" onClick={updateDarkMode} className={darkMode ? 'active' : ""}>
              <i className="indicator"></i>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header