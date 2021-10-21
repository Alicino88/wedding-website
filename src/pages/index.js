import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Title from "../components/Title"
import About from "../components/About"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Title />
      <About />
    </Layout>
  )
}
