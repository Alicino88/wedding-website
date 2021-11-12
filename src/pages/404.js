import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Wrapper>
      <h1>Ops, la pagina che cerchi non esiste</h1>
      <Link to="/" className="link-style">
        <h3 className="small-uppercase back-to-hp">Torna alla home page</h3>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--light-brown);

  h1 {
    color: var(--dark-grey);
    text-align: center;
  }

  .link-style {
    color: var(--dark-pink);
  }
`
export default Error
