import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
// import Button from "../components/button"
import CustomLayout from '../components/layout';
// import Banner from '../../static/images/indexBanner.jpg'

function IndexPage(props) {
  // const siteTitle = "Gatsby Starter Personal Website"
  return (
    <>
      <CustomLayout>
        <div>
          <div className="banner">
            <h1>Maanas Organisation </h1>
            <h2>-A Psychospiritual Initiative- </h2>
          </div>

          <div className="content-wrapper">
            <h3 className="title">The Rendition of Human Mind.</h3>

            <p>
              Hello fellow traveler. 
              Human mind is the most misunderstood and at the same time equally inquisitive phenomena, yet it is of great potential If it’s nature is correctly identified and applied to our daily life. 
              Our purpose is to creatively pursue this astonishing phenomenon and to enrich our lives and give it its deserved meaning. 
              We intend to combine the concepts of Science & Spirituality to get a better perspective of the understanding of human mind and use it in elevating our potential and consciousness.
            </p>
          </div>
        </div>
      </CustomLayout>
    </>
  )
}

export default IndexPage
