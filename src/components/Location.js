import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

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
  // console.log(location)
  const pathToImage = getImage(location.picture)
  return (
    <Wrapper>
      <div className="location-container">
        <div className="pic-container">
          <GatsbyImage
            image={pathToImage}
            className="pic-style"
            alt={location.name}
          ></GatsbyImage>

          <p className="link-style">
            Fotografia di{" "}
            <a
              href="https://www.marcoarduino.com/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "hsl(46, 28%, 33%)",
              }}
            >
              Marco Arduino
            </a>
          </p>
        </div>

        <div className="text-container">
          <h4 className="small-uppercase">{location.title}</h4>
          <h3>{location.name}</h3>
          <p>{location.description.description}</p>
          <a
            style={{
              marginTop: "20px",
              display: "flex",
              textDecoration: "none",
            }}
            href="https://www.google.com/maps/place/Jardin+a+Vivre/@45.7044514,8.6436016,17z/data=!3m1!4b1!4m5!3m4!1s0x4786651a342b23e1:0x4610fe8a8edaa426!8m2!3d45.7044062!4d8.6457315"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../assets/images/map_icon.png"
              placeholder="tracedSVG"
              layout="constrained"
              className="icon-style"
              alt=""
            />
            <p className="link-style">Vedi sulla mappa</p>
          </a>
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

  .pic-container {
    margin-bottom: 50px;
  }
  .text-container {
    padding: 3.5rem 2rem 2rem 2rem;
  }

  .small-uppercase {
    color: var(--dark-brown);
  }

  .icon-style {
    width: 32px;
    height: 32px;
  }

  .link-style {
    margin-left: 10px;
    font-family: Roboto Slab;
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--dark-brown);
  }
  @media (min-width: 730px) {
    .location-container {
      display: grid;
      grid-template-columns: 0.8fr 1fr;
      grid-template-areas: "image text";
      width: 750px;
      margin: 60px auto 40px;
      padding: 3.5rem;
    }

    .text-container {
      padding: 1.5rem 0rem 1.5rem 2rem;
    }

    .pic-style {
      height: 100%;
      max-width: 100%;
      border-radius: 5px;
      box-shadow: -30px -30px var(--medium-brown);
    }
  }

  @media (min-width: 1100px) {
    .location-container {
      width: 1300px;
    }
  }
`
export default Location
