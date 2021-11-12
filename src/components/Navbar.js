import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { HiMenuAlt2 } from "react-icons/hi"

const Navbar = ({ toggle }) => {
  return (
    <Wrapper>
      <div className="nav-container">
        <button className="menu-btn">
          <Link className="link-container" to="/#noi">
            noi
          </Link>
        </button>
        <button className="menu-btn">
          <Link className="link-container" to="/#il-matrimonio">
            il matrimonio
          </Link>
        </button>
        <button className="menu-btn">
          <Link className="link-container" to="/lista-nozze">
            lista nozze
          </Link>
        </button>
        <button className="menu-btn">
          <Link className="link-container" to="/#rsvp">
            rsvp
          </Link>
        </button>
      </div>
      <button className="mobile-btn" onClick={toggle}>
        <HiMenuAlt2 />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: transparent;
  height: 5rem;
  z-index: 1;
  position: relative;

  .nav-container {
    display: none;
  }

  .mobile-btn {
    margin-right: 20px;
    margin-top: 20px;
    background-color: transparent;
    border: none;
  }

  .mobile-btn svg {
    font-size: 2.5rem;
  }

  .link-container {
    text-align: center;
    text-decoration: none;
    color: white;
  }

  //hides hamburger menu above 750px width and makes text menu visible
  @media (min-width: 750px) {
    .mobile-btn {
      display: none;
    }
    .nav-container {
      width: 80%;
      max-width: 1270px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
    }
  }

  @media (min-width: 1100px) {
    .nav-container {
      width: 40%;
    }
  }

  .menu-btn {
    font-size: 1rem;
    background-color: var(--light-grey);
    border-radius: 5px;
    border: none;
  }

  .menu-btn:hover {
    box-shadow: inset 0 -3px hsla(0, 0%, 91%, 0.75);
  }
`
export default Navbar
