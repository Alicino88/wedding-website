import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Title from "../components/Title"
import About from "../components/About"
import Wedding from "../components/Wedding"
import Location from "../components/Location"
import Countdown from "../components/Countdown"
import Rsvp from "../components/Rsvp"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Marta e Alberto sposi"
        description="Marta e Alberto si sposeranno il 25 giugno 2022, presso la splendida location Jardin à Vivre a Castelletto sopra Ticino"
      />
      <Hero />
      <Title />
      <About />
      <Wedding />
      <Location />
      <Countdown />
      <Rsvp />
    </Layout>
  )
}
