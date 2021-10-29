import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import marta from "../assets/images/marta1.png"

export const query = graphql`
  {
    contentfulLocation {
      title
      name
      description {
        description
      }
      picture {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
`
const Location = () => {
  const data = useStaticQuery(query)
  const location = data.contentfulLocation
  console.log(location)
  const pathToImage = getImage(location.picture)
  return (
    <Wrapper>
      <div className="location-container">
        <GatsbyImage image={pathToImage} className="pic-style"></GatsbyImage>

        <div className="text-container">
          <h4 className="small-uppercase">{location.title}</h4>
          <h3>{location.name}</h3>
          <p>{location.description.description}</p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  width: 100%;
  max-width: 1270px;
  margin: 0 auto;
  height: auto;

  .immagine {
    width: 300px;
  }
  .location-container {
    display: flex;
    flex-direction: column-reverse;
  }
  .text-container {
    padding: 3.5rem 2rem 2rem 2rem;
  }

  .small-uppercase {
    color: var(--dark-brown);
  }
  @media (min-width: 730px) {
    .location-container {
      display: grid;
      grid-template-columns: 0.8fr 1fr;
      grid-template-areas: "image text";
      width: 800px;
      margin: 60px auto 90px;
      padding: 3.5rem;
    }

    .text-container {
      padding: 1.5rem 0rem 1.5rem 2rem;
    }

    .pic-style {
      height: auto;
      max-width: 100%;
      border-radius: 5px;
      box-shadow: -30px -30px var(--medium-brown);
    }
  }

  @media (min-width: 790px) {
    .location-container {
      width: 900px;
    }
  }
`
export default Location
