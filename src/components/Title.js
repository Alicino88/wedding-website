import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle }) => {
  return (
    <Wrapper id="noi">
      <h1 className="title-style">Ci sposiamo!</h1>
      <h2>25 giugno 2022 - Castelletto sopra Ticino</h2>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin-top: 90vh;
  width: 100%;
  text-align: center;
  padding: 2.2rem 1.2rem 4rem 1.2rem;

  .title-style {
    color: var(--dark-grey);
    margin-bottom: 15px;
  }

  //Since the hero image max-height is 900px, above this height there needs to be a fixed distance from the menu bar and the Title component.
  @media (min-height: 901px) {
    margin-top: 850px;
  } ;
`
export default Title
