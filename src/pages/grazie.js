import React from "react"
import styled from "styled-components"
import { createRef, useEffect } from "react"
import lottie from "lottie-web"
import applause from "../assets/data/applause.json"
import { Link } from "gatsby"
import "../assets/css/main.css"

const Grazie = () => {
  let animationContainer = createRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: applause,
    })
    return () => anim.destroy() // optional clean up for unmounting
  })

  return (
    <Wrapper>
      <div className="text-container">
        <div className="title-and-icon">
          <div ref={animationContainer} className="animation-style"></div>
          <h1 className="title-style">Grazie per la tua risposta!</h1>
        </div>
        <h2 className="subtitle-style">
          Marta &amp; Alberto - 25 giugno 2022, Castelletto sopra Ticino
        </h2>
        <Link to="/" className="link-style">
          <h3 className="small-uppercase back-to-hp">Torna alla home page</h3>
        </Link>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-brown);
  .text-container {
    width: 700px;
    padding: 20px 20px;
  }

  .title-and-icon {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--dark-grey);
  }

  .animation-style {
    width: 200px;
  }
  .title-style {
    color: var(--dark-grey);
    margin-bottom: 30px;
  }

  .back-to-hp {
    text-align: center;
    margin-top: 100px;
    font-size: 1rem;
  }

  .link-style {
    color: var(--dark-pink);
  }
`
export default Grazie
