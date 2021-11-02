import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { MdKeyboardArrowDown } from "react-icons/md"

const Hero = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../assets/images/roses5.jpg"
        className="header-pic"
        alt="white roses"
        placeholder="blurred"
      />

      <div className="hero-content">
        <h1 className="hero-title">
          Marta&nbsp;
          <span style={{ color: "hsla(0, 0%, 77%, 0.65)" }}>&amp;</span>
          &nbsp;Alberto
        </h1>
      </div>
      <div className="arrow-container">
        <MdKeyboardArrowDown className="arrow-down" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: 100vw;
  height: 100vh;
  max-height: 900px;
  position: absolute;
  top: 0;
  left: 0;

  .header-pic {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: brightness(0.5);
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

  .arrow-container {
    position: absolute;
    bottom: 50px;
    width: 100%;
    text-align: center;
  }

  .arrow-container svg {
    color: #ffff;
    font-size: 4rem;
    animation: mymove 2s ease-out infinite;
    position: relative;
  }

  @keyframes mymove {
    from {
      top: 0px;
    }
    to {
      top: 30px;
    }
  }
`

export default Hero
