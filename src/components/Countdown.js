//to create the countdown I have followed these instructions: https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks

import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Countdown = () => {
  //new Date() gives the current date
  //currentDateSeconds represent the current date expressed in number of milliseconds from today since 1 January 1970 00:00:00
  //The + before the new Date object is telling JavaScript to cast the object as an integer
  let currentDate = new Date()
  let currentDateSeconds = +new Date()

  //also time variable represents the current date expressed in number of milliseconds from today since 1 January 1970 00:00:00
  //it is the same as writing +new Date()
  let time = new Date().getTime()

  //below the correct syntax to get a specific date
  //let dateTest = new Date("June 25, 2022 17:00:00")

  const calculateTimeLeft = () => {
    //2)time left to the wedding is calculated by subtracting the event date minus the current date. It return number of milliseconds
    //between the two dates
    const difference = +new Date("June 25, 2022 17:00:00") - +new Date()
    console.log(difference)

    //below we convert the milliseconds into days, hours, minutes, and seconds
    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        giorni: Math.floor(difference / (1000 * 60 * 60 * 24)),
        ore: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minuti: Math.floor((difference / 1000 / 60) % 60),
        secondi: Math.floor((difference / 1000) % 60),
      }
      console.log(timeLeft)
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  //The useEffect is what updates the amount of time remaining. By default, React will re-invoke the effect after every render.
  //the component renders initially and timeLeft (current state) is equal to the returned value of calculateTimeLeft().
  //useEffect fires at the first render and then at every re-render. The component renders for the first time and after 1sec
  //(seTimeout function) calculateTimeLeft() is run.
  //this will cause a change in state (the timeLeft) that will trigger another render and therefore useEffect() hook...
  //The cycle will continue every second after that.
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    // The return function runs every time the useEffect runs the timer except for the first run of the component and will
    // clear out the timeout if the component is unmounted
    return () => clearTimeout(timer)
  })

  const timerComponents = []
  //The Object.keys() method returns an array of a given object's own enumerable property names.
  //in this case, an array containing the keys of the timeLeft object (months, hourse, minutes, seconds).
  //forEach() runs a function for every element of the array (actual numeric value of days, hours, minutes, seconds)

  Object.keys(timeLeft).forEach(interval => {
    //console.log(interval)-->displays: "months", "hours", "minutes", "seconds"
    //console.log(timeLeft[interval])-->displays the actual days, ours, minutes and seconds in numeric value
    /*if (!timeLeft[interval]) {
      return
    }*/

    // If the timer interval has a value above zero, it adds an element to the timerComponents array.
    timerComponents.push(
      <div className="date-block">
        <h3 className="number-style">{timeLeft[interval]}</h3>
        <div className="small-uppercase"> {interval} </div>
      </div>
    )
  })

  return (
    <Wrapper>
      <div className="title-container">
        <h3>Conto alla rovescia...</h3>
      </div>

      <StaticImage
        src="../assets/images/spots.png"
        placeholder="tracedSVG"
        layout="constrained"
        className="background-style"
      />
      {/*The timerComponents.length line of code checks to see if there is anything inside the timerComponents array 
and renders it if there is, otherwise it renders Time's up!*/}
      <div className="countdown-container">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
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

  .small-uppercase {
    color: var(--dark-brown);
  }

  .countdown-container {
    background-color: white;
    border-radius: 5px;
    max-width: 1100px;
    display: grid;
    width: 90vw;
    grid-template-columns: repeat(4, 1fr);
    margin: 30px auto;
    padding: 30px 0;
  }

  @media (min-width: 500px) {
    .countdown-container {
      width: 70vw;
    }
  }
  @media (min-width: 1000px) {
    .countdown-container {
      width: 50vw;
    }
  }

  .date-block {
    text-align: center;
  }
`
export default Countdown
