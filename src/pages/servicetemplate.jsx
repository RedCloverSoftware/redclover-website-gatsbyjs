import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
export default function ServiceTemplate({ data }) {
  return (
    <Layout>
      {console.log("service_data:", data)}
      <Link to="/contact/">Contact</Link>
      <p>What a world.</p>
    </Layout>
  )
}

/*export const pageQuery = graphql`

`
*/
