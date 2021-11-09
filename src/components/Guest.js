import React from "react"
import styled from "styled-components"

const Guest = () => {
  return (
    <Wrapper>
      <div className="name-and-surname">
        <div className="data-container">
          <label for="name">
            <p>Nome</p>
          </label>
          <input
            type="text"
            id="name"
            name="nome"
            className="input-style"
          ></input>
        </div>
        <div className="data-container">
          <label for="surname">
            <p>Cognome</p>
          </label>
          <input
            type="text"
            id="surname"
            name="cognome"
            className="input-style"
          ></input>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .name-and-surname {
    display: flex;
    justify-content: space-between;
  }

  .data-container {
    display: flex;
    flex-direction: column;
    width: 40%;
  }

  .input-style {
    border: 3px solid var(--light-grey);
    border-radius: 5px;
    width: 100%;
    height: 2.2rem;
    font-family: Roboto Slab;
    font-size: 1rem;
    color: var(--dark-grey);
    padding: 10px;
    outline: 0;
    text-decoration: "none";
  }

  .input-style:focus {
    border: 3px solid var(--dark-pink);
  }
`
export default Guest
