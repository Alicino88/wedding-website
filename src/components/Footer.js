import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container">
        <p className="footer-content">
          Copyright&nbsp; <span> Alice Moretti </span> - 2021 | Built with&nbsp;
          <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener">
            Gatsby.js
          </a>
          &nbsp;| Icons by Icons8 and Lordicon &nbsp;
        </p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  .footer-container {
    height: auto;
    background-color: var(--light-brown);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-content {
    font-family: Roboto slab;
    font-size: 0.9rem;
    font-weight: 300;
    color: var(--dark-grey);
    text-align: center;
    padding: 30px 20px 30px 20px;
  }

  p {
    line-height: 1.5rem;
  }

  span {
    font-weight: 500;
  }

  a {
    color: hsla(0, 0%, 24%, 1);
  }

  a:visited {
    color: hsla(0, 0%, 24%, 1);
  }
`

export default Footer
