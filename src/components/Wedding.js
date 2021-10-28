//USING ANIMATED ICONS FROM https://lordicon.com/ (lottie animations)
//How to use lottie icons: https://picnature.de/how-to-use-lottie-animations-in-react-gatsby-bodymovin/
//http://airbnb.io/lottie/#/web
//https://airbnb.io/lottie/#/web?id=usage
/*
1)install library: run "npm install lottie-web".
2)import json file you want to use
3)create a ref using createRef().React provides a feature known as refs that allow for DOM access from components. You simply attach a ref 
  to an element in your application to provide access to the element’s DOM from anywhere within your component.
  https://blog.logrocket.com/how-to-use-react-createref-ea014ad09dba/
4)call loadAnimation().This takes an object where you can configure the animation.
5)the reference can be used only after the component has mounted, for this reason useEffect() is being used.
*/
import React, { createRef, useEffect } from "react"
import lottie from "lottie-web"
import heart from "../assets/data/heart.json"
import wine from "../assets/data/wine.json"
import party from "../assets/data/party.json"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

export const query = graphql`
  {
    contentfulMatrimonio {
      titolo
      sottotitolo
    }
  }
`

const Wedding = () => {
  const data = useStaticQuery(query)

  let animationContainer1 = createRef()
  let animationContainer2 = createRef()
  let animationContainer3 = createRef()

  let heartPlay = null
  let winePlay = null
  let partyPlay = null

  //useEffect runs the function whenever there is a re-render: initially when the component first loads
  //and whenever the data change
  useEffect(() => {
    let heartIcon = {
      container: animationContainer1.current,
      animationData: heart, //animation file
      renderer: "svg",
      loop: 2,
      autoplay: false,
    }

    let wineIcon = {
      container: animationContainer2.current,
      animationData: wine, //animation file
      renderer: "svg",
      loop: 2,
      autoplay: false,
    }
    let partyIcon = {
      container: animationContainer3.current,
      animationData: party, //animation file
      renderer: "svg",
      loop: 2,
      autoplay: false,
    }

    //lottie.loadAnimation can only take one argument, the following sintax would render ONLY the first icon:
    // lottie.loadAnimation(heartIcon,wineIcon, partyIcon )
    heartPlay = lottie.loadAnimation(heartIcon)
    winePlay = lottie.loadAnimation(wineIcon)
    partyPlay = lottie.loadAnimation(partyIcon)
  })

  function startHeartAnimation() {
    heartPlay.play()
    heartPlay.setSpeed(2)
  }

  function stopHeartAnimation() {
    heartPlay.stop()
  }

  function startWineAnimation() {
    winePlay.play()
    winePlay.setSpeed(2)
  }
  function stopWineAnimation() {
    lottie.stop()
  }

  function startPartyAnimation() {
    partyPlay.play()
  }
  function stopPartyAnimation() {
    lottie.stop()
  }

  return (
    <Wrapper>
      <div className="title-container">
        <h3>{data.contentfulMatrimonio.titolo}</h3>
        <p>{data.contentfulMatrimonio.sottotitolo}</p>
      </div>
      <div className="program-container">
        <StaticImage
          src="../assets/images/spots.png"
          placeholder="tracedSVG"
          layout="constrained"
          className="background-style"
        />
        <div
          className="program-card"
          onMouseEnter={startHeartAnimation}
          onMouseLeave={stopHeartAnimation}
        >
          <div className="animation-container" ref={animationContainer1}></div>
          <p className="small-uppercase">ore 17:00</p>
          <p className="text-style">cerimonia</p>
        </div>
        <div
          className="program-card"
          onMouseEnter={startWineAnimation}
          onMouseLeave={stopWineAnimation}
        >
          <div className="animation-container" ref={animationContainer2}></div>
          <p className="small-uppercase">ore 19:00</p>
          <p className="text-style">cena</p>
        </div>
        <div
          className="program-card"
          onMouseEnter={startPartyAnimation}
          onMouseLeave={stopPartyAnimation}
        >
          <div className="animation-container" ref={animationContainer3}></div>
          <p className="small-uppercase">ore 22:00</p>
          <p className="text-style">tutti si balla</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  height: auto;
  padding: 50px 0 20px 0;
  .title-container {
    text-align: center;
  }

  .program-container {
    width: 70vw;
    max-width: 1270px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.5rem;
    margin: 3rem auto;
  }

  .background-style {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.3;
  }
  .program-card {
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
  .animation-container {
    width: 100px;
    margin: 0 auto;
  }

  .small-uppercase {
    text-decoration: underline;
  }

  .text-style {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-family: Spectral;
    font-weight: 700;
  }

  @media (max-width: 700px) {
    .program-container {
      grid-template-columns: 1fr;
    }
    .program-card {
      margin-bottom: 1rem;
    }
  }
`

export default Wedding
