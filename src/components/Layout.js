import React from "react"
import "../assets/css/main.css"
import Navbar from "./Navbar"
import Footer from "../components/Footer"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
