import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Rsvp = () => {
  return (
    <Wrapper className="rsvp-container">
      <StaticImage
        src="../assets/images/rsvp.jpeg"
        className="image-style"
      ></StaticImage>
      <div className="text-container">
        <h3>Ci sarai?</h3>
        <p>
          Conferma o declina la tua partecipazione cliccando sul bottone
          sottostante. Ti chiediamo anche di comunicarci eventuali intolleranze
          o regimi alimentari particolari. Grazie!
        </p>
        <button>rsvp</button>
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
  button {
    color: var(--medium-brown);
    border: 2px solid var(--medium-brown);
    background-color: transparent;
    border-radius: 5px;
    margin-top: 1rem;
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }

  button:hover {
    border: 2px solid var(--dark-brown);
    color: var(--dark-brown);
  }

  @media (min-width: 750px) {
    width: 90vw;
    display: flex;
    flex-direction: row;
    margin: 90px auto;
    border: 1.3px solid var(--medium-brown);
    border-radius: 5px;

    .image-style {
      width: 50%;
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
