import React from "react"

import Layout from "../components/layout"
import GradientHeroSection from "../components/GradientHeroSection/GradientHeroSection.styled.js"
import CTAButton from "../components/CTAButton/CTAButton.styled.js"

const NotFoundPage = () => {
  return (
    <Layout>
      <GradientHeroSection min_height={"70vh"}>
        <h1>404 Error - Page Not Found</h1>
        <p>
          The link you are trying to access may have a typo or might just no
          longer exist.
        </p>
        <CTAButton>
          <a href="https://www.redcloversoftware.ca">Back to Home</a>
        </CTAButton>
      </GradientHeroSection>
    </Layout>
  )
}

export default NotFoundPage
