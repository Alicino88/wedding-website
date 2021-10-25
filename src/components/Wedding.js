//USING ANIMATED ICONS FROM https://lordicon.com/ (lottie animations)
//How to use lottie icons: https://picnature.de/how-to-use-lottie-animations-in-react-gatsby-bodymovin/
//http://airbnb.io/lottie/#/web
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
import icon from "../assets/data/heart.json"
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

  let animationContainer = createRef()

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      /**/
      animationData: icon, //animation file
      renderer: "svg",
      loop: true,
      autoplay: true,
    })
  }, [])

  return (
    <Wrapper>
      <div className="title-container">
        <h2>{data.contentfulMatrimonio.titolo}</h2>
        <p>{data.contentfulMatrimonio.sottotitolo}</p>
      </div>

      {programmi.map(programma => {
        return (
          <div>
            <p>{programma.orario}</p>
            <p>{programma.titolo}</p>
          </div>
        )
      })}

      <div className="animation-container" ref={animationContainer}>
        dsds
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .animation-container {
    width: 50px;
  }
`

export default Wedding
