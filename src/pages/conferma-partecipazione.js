//tutorial reference: how to use netlify forms in react https://www.youtube.com/watch?v=jRN78rEkswk&t=619s. Includes how to add email notification and extra protection from spam.

import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/main.css"
import { createRef, useEffect } from "react"
import lottie from "lottie-web"
import happy from "../assets/data/happy.json"
import SEO from "../components/SEO"

const ConfermaPartecipazione = () => {
  let animationContainer = createRef()
  useEffect(() => {
    //below added form validation: when the user clicks on the "send" button, all the required fields are selected and an extra class is added
    //to all of them (.mystyle) that shows the invalid fields in red.
    document
      .getElementById("submitButton")
      .addEventListener("click", function () {
        let required = document.querySelectorAll(".required")
        //console.log(required)
        required.forEach(element => {
          element.classList.add("mystyle")
        })
      })
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: happy,
    })
    return () => anim.destroy() // optional clean up for unmounting
  })
  return (
    <Wrapper>
      <SEO
        title="Partecipazione"
        description="Compila il modulo e conferma o declina la tua partecipazione al matrimonio"
      />
      <StaticImage
        src="../assets/images/spots.png"
        placeholder="tracedSVG"
        layout="fullWidth"
        className="background-style"
        alt=""
      />
      <div className="title-container">
        <div className="animation-and-title">
          <div ref={animationContainer} className="animation-style" />
          <h1 className="title-style">
            Non vediamo l'ora di festeggiare insieme a te!
          </h1>
        </div>
        <h2 className="subtitle-style">
          Per favore conferma o declina la tua partecipazione entro il 15 Maggio
          2022:
        </h2>
      </div>
      {/*added data-netlify="true" to connect the for to netlify forms. "Action" defines to what page the user is redirected after submission */}
      <form
        data-netlify="true"
        name="conferme"
        method="POST"
        action="/grazie"
        data-netlify-honeypot="bot-field"
        id="form"
      >
        {/*hidden imput necessary when website is built with React  */}
        <input type="hidden" name="form-name" value="conferme" />

        {/*added extra protection from spam, together with data-netlify-honeypot="bot-field" above
        if the bot fills this field then the submission is left out. ???Honeypot??? fields are hidden form fields that lure bot users into completing a field
        that human users can???t see. https://docs.netlify.com/forms/spam-filters/*/}
        <div hidden>
          <input name="bot-field"></input>
        </div>
        <div className="name-and-surname">
          <div className="data-container">
            {/*In React for attribute becomes htmlFor */}

            <label htmlFor="name">
              <p className="small-uppercase">Nome</p>

              <input
                type="text"
                id="name"
                name="nome"
                className="input-style required"
                required
              ></input>
            </label>
          </div>
          <div className="data-container">
            <label htmlFor="surname">
              <p className="small-uppercase">Cognome</p>
              <input
                type="text"
                id="surname"
                name="cognome"
                className="input-style required"
                required
              ></input>
            </label>
          </div>
        </div>
        <div className="email-message-style">
          <label htmlFor="email">
            <p className="small-uppercase">Email di riferimento</p>
            <input
              type="email"
              id="email"
              name="email"
              className="input-style required"
              required
            ></input>
          </label>
        </div>
        <div className="email-message-style">
          <label htmlFor="attendance">
            <p className="small-uppercase">Potrai partecipare?</p>
            <select
              id="attendance"
              name="partecipa"
              className="input-style required"
              required
              defaultValue="si"
            >
              {/*React doesn't use attribute "selected" on the option. Instead it uses value/defaultValue on the select element itself 
              https://reactjs.org/docs/forms.html#the-select-tag */}
              <option value="si">S??</option>
              <option value="no">Non potr?? esserci</option>
            </select>
          </label>
        </div>
        <div className="email-message-style">
          <label htmlFor="guests">
            <p className="small-uppercase">
              Porterai altri ospiti con te? Se s?? per favore indicane nome e
              cognome:
            </p>
            <input
              type="text"
              id="guests"
              name="altri-partecipanti"
              className="input-style"
            ></input>
          </label>
        </div>

        <div className="email-message-style">
          <label htmlFor="message">
            <p className="small-uppercase">Messaggio</p>
            <textarea
              type="text"
              id="message"
              name="messaggio"
              className="textarea-style"
              rows="8"
              placeholder="Aggiungi qui eventuali allergie alimentari"
            ></textarea>
          </label>
        </div>

        <button type="submit" id="submitButton">
          Invia
        </button>
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
  .animation-and-title {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }
  .animation-style {
    width: 350px;
  }

  .title-container {
    margin: auto;
    width: 600px;
  }

  .title-style {
    color: var(--dark-grey);
    font-size: 2.3rem;
    font-weight: bold;
    line-height: 2.5rem;
  }

  form {
    background-color: white;
    border-radius: 5px;
    max-width: 1100px;
    width: 600px;
    margin: 30px auto;
    padding: 50px 50px;
  }
  .small-uppercase {
    color: var(--dark-grey);
    font-size: 0.8rem;
    line-height: 1.5rem;
  }

  //class that is applied, only after the user clicks on the "send button", to the invalid fields
  .mystyle:invalid {
    border: 1px solid red;
  }
  .name-and-surname {
    display: flex;
    justify-content: space-between;
  }

  .data-container {
    display: flex;
    flex-direction: column;
    width: 45%;
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

  @media (max-width: 680px) {
    .title-container {
      width: 320px;
    }
    .animation-and-title {
      display: block;
    }

    .animation-style {
      width: 200px;
    }

    .title-style {
      font-size: 1.8rem;
    }

    form {
      width: 320px;
      padding: 50px 20px;
    }

    .name-and-surname {
      display: block;
    }

    .data-container {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`
export default ConfermaPartecipazione
