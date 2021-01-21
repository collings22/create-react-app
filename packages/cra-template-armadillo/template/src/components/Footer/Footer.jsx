import React from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Navbar variant='dark'>
      <Container>
        <Navbar.Text>
          <small>&copy; {year} {REACT_APP_WEB_APP_NAME}</small>
        </Navbar.Text>
      </Container>
    </Navbar>
  )
}

export default Footer
