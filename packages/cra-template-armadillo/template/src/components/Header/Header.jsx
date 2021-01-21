import React from 'react'

import Container from '../components/Footer/node_modules/react-bootstrap/Container'

import Navbar from '../components/Footer/node_modules/react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../assests/logo.jpg'

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='mb-3' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>
          <img
            alt=''
            src={logo}
            height='30'
            className='d-inline-block align-center'
          />{' '}
          {REACT_APP_WEB_APP_NAME}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className='mr-auto'>
            <LinkContainer to='/About'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
