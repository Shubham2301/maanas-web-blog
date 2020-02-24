import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Button from "../components/button"
import CustomLayout from '../components/layout';

function IndexPage(props) {
  const siteTitle = "Gatsby Starter Personal Website"
  return (
    <>
      <CustomLayout>
        <h1>Home Page</h1>
      </CustomLayout>
    </>
  )
}

export default IndexPage
