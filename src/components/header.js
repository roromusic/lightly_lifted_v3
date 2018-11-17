import React from 'react'
import { Link } from 'gatsby'
import { css as emoCSS } from 'emotion'
import styled from 'react-emotion'

import logo from '../images/logo.svg'

const css = (...args) => ({ className: emoCSS(...args) })

const Container = styled('header')`
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
  display: flex;

  @media (min-width: 700px) {
    padding: 20px;
  }
`

const NavItems = styled('ul')`
  font-size: 1.2rem;
  color: var(--body-text);
  list-style: none;

  @media (min-width: 1000px) {
    font-size: 1.4rem;
  }
`

const Header = ({ siteTitle }) => (
  <Container>
    <div>
      <Link to="/">
        <img src={logo} alt="Lightly Lifted" {...css({ height: '40px' })} />
      </Link>
    </div>
    <nav>
      <NavItems>
        <li>
          <Link to="#footer">CONTACT US</Link>
        </li>
      </NavItems>
    </nav>
  </Container>
)

export default Header
