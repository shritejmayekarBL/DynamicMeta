import React from "react"
import {Helmet} from "react-helmet"
const SEO = ({title, description, meta = []}) => {
    return(
        <Helmet
        title={title}
        htmlAttributes={{ lang: "en" }}
        meta={meta}
      />
      
     )
}

export default SEO;