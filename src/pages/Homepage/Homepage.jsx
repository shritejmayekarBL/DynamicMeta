import React from "react";
import SEO from "../../components/SEO";
import homepage from "../../config/homepage";
const Homepage = () => {
    return (<>
        <SEO title='Welcome to home page' meta={homepage.meta} />
        <div>Home</div>
        </>
    )
}

export default Homepage;