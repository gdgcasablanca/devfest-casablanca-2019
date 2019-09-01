import React from "react"

import IndexPage from "../components/index-page/index-page"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <IndexPage />
  </Layout>
)

export default Index
