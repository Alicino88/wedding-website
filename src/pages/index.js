import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Title from "../components/Title"
import About from "../components/About"
import Wedding from "../components/Wedding"
import Location from "../components/Location"
import Countdown from "../components/Countdown"
import Rsvp from "../components/Rsvp"

export default function Home() {
  return (
    <Layout>
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
