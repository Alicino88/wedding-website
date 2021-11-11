import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { BiPlus } from "react-icons/bi"
import { CgClose } from "react-icons/cg"

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <Wrapper>
      <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
        <button aria-label="Close" className="close-btn" onClick={toggle}>
          <CgClose />
        </button>
        <div className="text-container">
          <Link className="sidebar-links" onClick={toggle} to="/#noi">
            Noi
            <BiPlus className="plus-icon" />
          </Link>
          <Link className="sidebar-links" onClick={toggle} to="/#il-matrimonio">
            Matrimonio
            <BiPlus className="plus-icon" />
          </Link>
          <Link className="sidebar-links" onClick={toggle} to="/lista-nozze">
            Lista nozze
            <BiPlus className="plus-icon" />
          </Link>
          <Link className="sidebar-links" onClick={toggle} to="/#rsvp">
            Rsvp
            <BiPlus className="plus-icon" />
          </Link>
        </div>
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffff;
    transition: all 0.4s ease-in;
    padding-left: 2rem;
    z-index: 999;
    transform: translateX(-100%);
    visibility: hidden;
  }

  .show-sidebar {
    transform: translateX(0);
    visibility: visible;
  }

  .sidebar-title {
    position: absolute;
    top: 1rem;
    left: 0.5rem;
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 0.5rem;
    background: transparent;
    border: transparent;
    font-size: 3rem;
    cursor: pointer;
    color: var(--dark-pink);
  }

  .text-container {
    padding-top: 150px;
    padding-left: 20px;
  }

  .sidebar-links {
    display: block;
    text-decoration: none;
    font-family: Roboto slab;
    color: var(--dark-grey);
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .plus-icon {
    color: var(--dark-brown);
    font-size: 1rem;
  }
`
export default Sidebar
