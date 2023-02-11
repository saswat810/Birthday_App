import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect className='ms-auto'>
        <Container style={{width: "auto"}}>
          <LinkContainer to='/'>
            <Navbar.Brand>Happy 24th Birthday</Navbar.Brand>
          </LinkContainer>         
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
