import React from "react"
import HeroSmaller from "../components/HeroSmaller"
import Layout from "../components/Layout"
import styled from "styled-components"
import { createRef, useEffect } from "react"
import lottie from "lottie-web"
import plane from "../assets/data/plane.json"
import SEO from "../components/SEO"

const Listanozze = () => {
  let animationContainer = createRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: plane,
    })
    return () => anim.destroy() // optional clean up for unmounting
  })
  return (
    <Layout>
      <SEO
        title="Sposi in viaggio"
        description="Aiutaci a farci sognare! Vorremmo trascorrere la nostra luna di miele su di una splendida spiaggia alle Isole Seychelles"
      />
      <HeroSmaller />
      <Wrapper>
        <h1 className="closing-paraghraph">
          Vi penseremo immensamente da qui!
        </h1>
        <div className="icon-and-text">
          <div ref={animationContainer} className="animation-style" />
          <div>
            <p>
              Gli sposini vorrebbero raggiungere la paradisiaca destinazione
              delle Maldive, passando per il Louvre di Abu Dabi. Se volete
              contribuire al nostro sogno, di seguito il nostro IBAN:
            </p>
            <p className="small-uppercase">IT83M0329601601000067380316</p>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  margin-top: 80vh;

  .icon-and-text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 750px;
    margin: auto;
    margin-bottom: 70px;
  }

  .animation-style {
    width: 250px;
  }

  p {
    width: 500px;
  }

  .small-uppercase {
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }

  .closing-paraghraph {
    text-align: center;
    margin: 30px 0 60px 0;
    color: var(--dark-grey);
    padding: 0 20px;
  }

  @media (max-width: 750px) {
    margin-top: 75vh;
    .icon-and-text {
      display: flex;
      flex-direction: column-reverse;
      width: 90vw;
      margin: auto;
    }

    p {
      width: 100%;
    }

    .animation-style {
      width: 180px;
      margin: 50px 0;
    }

    .closing-paraghraph {
      text-align: left;
      margin: 20px 0 30px 0;
    }
  }
`

export default Listanozze
