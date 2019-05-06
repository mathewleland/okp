import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";

const NavBarContainer = styled.nav`
  width: 100%;
  height: 100px;
  border: 1px solid red;
  display: flex;
`

const NavLink = styled.div`
  border: 1px dotted green;
  width: auto;
  padding: 10px;
  margin: 5px 10px;
`

const Navbar = () => (
  <NavBarContainer
  >
    
    <Link to="/"><NavLink>Home</NavLink> </Link>
    <Link to="/about"><NavLink>About page</NavLink></Link>
    <Link to="/help"><NavLink>dead page</NavLink></Link>
  </NavBarContainer>
)

Navbar.propTypes = {
}

Navbar.defaultProps = {
  active: `about`,
}

export default Navbar
