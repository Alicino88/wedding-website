import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Guest from "../components/Guest"
import "../assets/css/main.css"
import { useState } from "react"

const ConfermaPartecipazione = () => {
  const [participant, setParticipant] = useState(false)
  console.log(participant)
  return (
    <Wrapper>
      <StaticImage
        src="../assets/images/spots.png"
        placeholder="tracedSVG"
        layout="constrained"
        className="background-style"
      />
      <div className="title-container">
        <h3>Inserisci i tuoi dati</h3>
      </div>

      <form data-netlify="true" name="conferme" method="POST" onSubmit="submit">
        <input type="hidden" name="form-name" value="conferme" />
        <Guest />
        <div className="add-guest">
          <StaticImage
            src="../assets/images/plus.png"
            className="plus-icon"
            placeholder="blurred"
            onClick={() => setParticipant(!participant)}
          />
          <p>Aggiungi ospite</p>
          {participant && (
            <div>
              <Guest />
            </div>
          )}
        </div>
        <button type="submit">send</button>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  padding: 50px 0;
  background-color: var(--light-brown);

  .background-style {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.3;
  }

  .title-container {
    text-align: center;
  }

  form {
    background-color: white;
    border-radius: 5px;
    max-width: 1100px;
    width: 600px;
    margin: 30px auto;
    padding: 50px 50px;
  }

  .add-guest {
    margin-top: 30px;
    display: flex;
    align-items: center;
  }
  .plus-icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`
export default ConfermaPartecipazione
