import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulNoi {
      nodes {
        titolo
        testo {
          testo
        }
        foto {
          gatsbyImageData(placeholder: BLURRED, width: 400, height: 500)
        }
        icon {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(query)
  const {
    allContentfulNoi: { nodes: sposi },
  } = data
  console.log(sposi)
  return (
    <Wrapper>
      {sposi.map(sposo => {
        const pathToImage = getImage(sposo.foto)
        const pathToIcon = getImage(sposo.icon)
        return (
          <article className="article-style">
            <GatsbyImage
              image={pathToImage}
              className="image-style"
            ></GatsbyImage>
            <div className="text-container">
              <div className="title-container">
                <GatsbyImage
                  image={pathToIcon}
                  className="icon-style"
                ></GatsbyImage>
                <h3 className="title-style">{sposo.titolo}</h3>
              </div>
              <p>{sposo.testo.testo}</p>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  max-width: 1270px;
  margin: 0 AUTO;
  height: auto;

  .article-style {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    grid-template-areas: "image text";
    width: 800px;
    margin: 60px auto 150px;
  }

  //by giving the image and the text area distinct names (grid-area: image; grid-area: text), it is possible to invert their order
  //with the property grid-template-areas

  .article-style:nth-child(2) {
    grid-template-areas: "text image";
    grid-template-columns: 1fr 0.5fr;
  }

  //makes the dropdown shadow of the second element of a different color
  .article-style:nth-child(2) .image-style {
    filter: drop-shadow(40px -40px 0px var(--light-brown));
  }

  .article-style:nth-child(2) .text-container {
    padding: 1.5rem 3rem 1.5rem 0rem;
  }

  .image-style {
    height: 100%;
    border-radius: 5px;
    filter: drop-shadow(-40px -40px 0px var(--light-pink));
    grid-area: image;
  }

  .text-container {
    padding: 1.5rem 0rem 1.5rem 3rem;
    grid-area: text;
  }

  .title-container {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .icon-style {
    width: 40px;
  }

  .title-style {
    margin-left: 0.5em;
  }
`

export default About
