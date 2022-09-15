import * as React from "react"
import { useEffect } from "react"
import { navigate } from "@reach/router"

//As this is a single-page site at the present moment, there is no need for a 404 page or any special 404 functionality. As additional pages are added, this should be deprecated and replaced with a static 404 page + 404 header.

const NotFoundPage = () => {
  useEffect(() => {
    navigate("/")
  }, [])

  return null
}

export default NotFoundPage
