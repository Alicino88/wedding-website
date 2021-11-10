import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Rsvp = () => {
  return (
    <Wrapper className="rsvp-container" id="rsvp">
      <StaticImage
        src="../assets/images/rsvp1.jpg"
        className="image-style"
        placeholder="blurred"
        layout="constrained"
      ></StaticImage>
      <div className="text-container">
        <div className="title-container">
          <StaticImage
            src="../assets/images/envelope.png"
            className="envelope"
            placeholder="blurred"
          />
          <h3>Ci sarai?</h3>
        </div>
        <p>
          Conferma o declina la tua partecipazione cliccando sul bottone
          sottostante. Ti chiediamo anche di comunicarci eventuali intolleranze
          o regimi alimentari particolari. Grazie!
        </p>
        <Link to="/conferma-partecipazione">
          <button>rsvp</button>
        </Link>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column-reverse;

  .text-container {
    padding: 3.5rem 2rem 2rem 2rem;
  }

  .title-container {
    display: flex;
    align-items: center;
  }

  .envelope {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  button {
    color: var(--medium-brown);
    border: 2px solid var(--medium-brown);
    background-color: transparent;
    border-radius: 5px;
    margin-top: 1rem;
    padding: 0.5rem 1.8rem;
    font-size: 1rem;
  }

  button:hover {
    background-color: var(--medium-brown);
    color: white;
  }

  @media (min-width: 750px) {
    width: 90vw;
    display: flex;
    flex-direction: row;
    margin: 90px auto;
    border: 3px solid var(--medium-brown);
    border-radius: 5px;

    .image-style {
      width: 50%;
      height: 100%;
      border-radius: 5px 0 0 5px;
    }

    .text-container {
      width: 50%;
      margin: auto;
      padding: 20px 20px;
    }
  }

  @media (min-width: 1200px) {
    width: 70vw;
  }
`
export default Rsvp
