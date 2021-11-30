import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description, image }) => {
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      meta={[{ name: `description`, content: description }]}
      image={image}
    ></Helmet>
  )
}

export default SEO
