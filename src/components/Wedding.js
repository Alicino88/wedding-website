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
import cocktail from "../assets/data/cocktail.json"
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
  let animationContainer4 = createRef()

  let heartPlay = null
  let winePlay = null
  let partyPlay = null
  let cocktailPlay = null

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
    let cocktailIcon = {
      container: animationContainer4.current,
      animationData: cocktail, //animation file
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
    cocktailPlay = lottie.loadAnimation(cocktailIcon)
    //dependency array makes sure the useEffect runs only after the first render

    //below we remove the icons whenever there is a component re-render. For example, when we scroll to a specific section of the page
    //after clicking on the navbar links
    return () => {
      heartPlay.destroy()
      winePlay.destroy()
      partyPlay.destroy()
      cocktailPlay.destroy()
    }
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

  function startCocktailAnimation() {
    cocktailPlay.play()
  }
  function stopCocktailAnimation() {
    lottie.stop()
  }

  return (
    <Wrapper id="il-matrimonio">
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
          alt=""
        />
        <div
          className="program-card"
          onMouseEnter={startHeartAnimation}
          onMouseLeave={stopHeartAnimation}
          role="button"
          tabIndex="0"
        >
          <div className="animation-container" ref={animationContainer1}></div>
          <p className="small-uppercase">ore 17:00</p>
          <p className="text-style">cerimonia simbolica</p>
        </div>
        <div
          className="program-card"
          onMouseEnter={startCocktailAnimation}
          onMouseLeave={stopCocktailAnimation}
          role="button"
          tabIndex="0"
        >
          <div className="animation-container" ref={animationContainer4}></div>
          <p className="small-uppercase">ore 18:00</p>
          <p className="text-style">aperitivo</p>
        </div>
        <div
          className="program-card"
          onMouseEnter={startWineAnimation}
          onMouseLeave={stopWineAnimation}
          role="button"
          tabIndex="0"
        >
          <div className="animation-container" ref={animationContainer2}></div>
          <p className="small-uppercase">ore 19:30</p>
          <p className="text-style">cena</p>
        </div>
        <div
          className="program-card"
          onMouseEnter={startPartyAnimation}
          onMouseLeave={stopPartyAnimation}
          role="button"
          tabIndex="0"
        >
          <div className="animation-container" ref={animationContainer3}></div>
          <p className="small-uppercase">ore 22:00</p>
          <p className="text-style">si aprono le danze</p>
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
    padding: 0 30px;
  }

  .program-container {
    width: 95vw;
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
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

  @media (min-width: 1000px) {
    .program-container {
      width: 70vw;
    }
  }
`

export default Wedding
