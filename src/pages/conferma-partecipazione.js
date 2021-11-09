//tutorial reference: how to use netlify forms in react https://www.youtube.com/watch?v=jRN78rEkswk&t=619s. Includes how to add email notification and extra protection from spam.

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

      <form
        data-netlify="true"
        name="conferme"
        method="POST"
        onSubmit="submit"
        data-netlify-honeypot="bot-field"
      >
        {/*hidden imput necessary when website is built with React  */}
        <input type="hidden" name="form-name" value="conferme" />

        {/*added extra protection from spam, together with data-netlify-honeypot="bot-field" above
        if the bot fills this field then the submission is left out. “Honeypot” fields are hidden form fields that lure bot users into completing a field
        that human users can’t see. https://docs.netlify.com/forms/spam-filters/*/}
        <div hidden>
          <input name="bot-field"></input>
        </div>
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
        <div className="email-message-style">
          <label for="email">
            <p>Email di riferimento</p>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="input-style"
          ></input>
        </div>

        <div className="email-message-style">
          <label for="message">
            <p>Messaggio</p>
          </label>
          <textarea
            type="text"
            id="message"
            name="messaggio"
            className="textarea-style"
            rows="8"
            placeholder="Aggiungi qui eventuali allergie alimentari"
          ></textarea>
        </div>

        <button type="submit">Invia</button>
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

  .email-message-style {
    margin-top: 30px;
  }

  .textarea-style {
    width: 100%;
    max-width: 100%;
    border: 2.5px solid var(--light-grey);
    border-radius: 5px;
    font-family: Roboto Slab;
    font-size: 1rem;
    color: var(--dark-grey);
    padding: 10px;
    outline: 0;
  }

  .textarea-style:focus {
    border: 2.5px solid var(--dark-pink);
  }

  textarea::placeholder {
    color: hsla(0, 0%, 77%, 1);
  }

  button {
    color: var(--dark-pink);
    border: 2px solid var(--dark-pink);
    background-color: transparent;
    border-radius: 5px;
    margin-top: 2rem;
    padding: 0.5rem 1.8rem;
    font-size: 1rem;
  }

  button:hover {
    background-color: var(--dark-pink);
    color: white;
  }
`
export default ConfermaPartecipazione
