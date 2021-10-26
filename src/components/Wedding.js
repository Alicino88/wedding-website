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
5)the reference can be used only after the component has mounted, for this reason we use useEffect(.)
*/
import React, { createRef, useEffect } from "react"
import lottie from "lottie-web"
import heart from "../assets/data/heart.json"
import wine from "../assets/data/wine.json"
import party from "../assets/data/party.json"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

export const query = graphql`
  {
    contentfulMatrimonio {
      titolo
      sottotitolo
    }
    allContentfulProgramma {
      nodes {
        orario
        titolo
        icona {
          internal {
            content
          }
        }
      }
    }
  }
`

const Wedding = () => {
  const data = useStaticQuery(query)
  const programmi = data.allContentfulProgramma.nodes
  console.log(programmi)

  let animationContainer1 = createRef()
  let animationContainer2 = createRef()
  let animationContainer3 = createRef()
  console.log(animationContainer1, animationContainer2, animationContainer3)

  //useEffect runs the function whenever there is a re-render: initially when the component first loads
  //and whenever the data change
  useEffect(() => {
    let heartIcon = {
      container: animationContainer1.current,
      animationData: heart, //animation file
      renderer: "svg",
      loop: true,
      autoplay: false,
    }

    let wineIcon = {
      container: animationContainer2.current,
      animationData: wine, //animation file
      renderer: "svg",
      loop: true,
      autoplay: false,
    }
    let partyIcon = {
      container: animationContainer3.current,
      animationData: party, //animation file
      renderer: "svg",
      loop: true,
      autoplay: false,
    }
    /*
    lottie.loadAnimation({
      container: animationContainer.current,
    
      animationData: icon, //animation file
      renderer: "svg",
      loop: true,
      autoplay: true,
    })
    */
    lottie.loadAnimation(heartIcon, wineIcon, partyIcon)
  }, [])

  /*
  function handleStop() {
    heart1.pause()
  }

  function handleStart() {
    heart1.play()
  }
  */

  return (
    <Wrapper>
      <div className="title-container">
        <h2>{data.contentfulMatrimonio.titolo}</h2>
        <p>{data.contentfulMatrimonio.sottotitolo}</p>
      </div>
      {/*
      <div className="program-style">
        {programmi.map(programma => {
          return (
            <div className="single-program-style">
              <div
                className="animation-container"
                ref={animationContainer}
              ></div>
              <p>{programma.orario}</p>
              <p>{programma.titolo}</p>
            </div>
          )
        })}
      </div>
      */}
      <div className="program-container">
        <div className="program-card">
          <div className="animation-container1" ref={animationContainer1}></div>
          <p>ore 17</p>
          <p>cerimonia</p>
        </div>
        <div className="program-card">
          <div className="animation-container2" ref={animationContainer2}></div>
          <p>ore 19</p>
          <p>cena</p>
        </div>
        <div className="program-card">
          <div className="animation-container3" ref={animationContainer3}></div>
          <p>ore 22</p>
          <p>tutti si balla</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .title-container {
    text-align: center;
  }

  .program-container {
    width: 70vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.5rem;
    margin: 0 auto;
  }

  .program-card {
    text-align: center;
  }
  .animation-container {
    width: 100%;
  }

  .program-style {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .single-program-style {
    display: flex;
    flex-direction: column;
    display: inline-block;
  }
`

export default Wedding
