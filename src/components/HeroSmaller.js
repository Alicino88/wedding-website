import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const HeroSmaller = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../assets/images/maldives2.jpg"
        className="header-pic"
        alt="seychelles beach"
        placeholder="blurred"
      />

      <div className="hero-content">
        <h1 className="hero-title">Fateci sognare</h1>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: 100vw;
  height: 80vh;
  max-height: 900px;
  position: absolute;
  top: 0;
  left: 0;

  .header-pic {
    width: 100%;
    height: 100%;
    filter: brightness(0.4);
  }

  .hero-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export default HeroSmaller
