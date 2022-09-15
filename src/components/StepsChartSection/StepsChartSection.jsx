import React, { useState, useEffect } from "react"

import {
  OuterContainer,
  InnerContainer,
  CentralTextBlock,
  SectionTitle,
  SectionIntroParagraph,
  StyledGatsbyImage,
  ProcessItem,
  ProcessDescriptionWrapper,
} from "./StepsChartSection.styled.js"

const StepsChartSection = props => {
  const [hasUserClicked, setUserClicked] = useState(false)
  const [hoverIndex, setHoverIndex] = useState(1)
  const [currentTimeoutId, setCurrentTimeoutId] = useState(-1)

  function handleHover(index) {
    setUserClicked(true)
    clearTimeout(currentTimeoutId)
    setHoverIndex(index)
  }

  useEffect(() => {
    if (!hasUserClicked) {
      //Increment the hover state automatically every 4 secs
      let timeoutId = setTimeout(() => {
        if (hoverIndex < props.process_steps.length) {
          setHoverIndex(hoverIndex + 1)
        } else {
          setHoverIndex(1)
        }
      }, 4000)

      setCurrentTimeoutId(timeoutId)
    }
  }, [hoverIndex])

  // Window Size Hook, default to 2560px
  const [windowWidth, setWindowWidth] = useState(2560)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <OuterContainer id="our-approach">
      <SectionTitle>{props.primary_heading}</SectionTitle>
      <SectionIntroParagraph>{props.primary_paragraph}</SectionIntroParagraph>
      <InnerContainer>
        {props.process_steps.map((current_step, index) =>
          index + 1 === props.process_steps.length ? (
            <React.Fragment
              key={current_step.procstep_primary_step_title.richText[0].text.replace(
                /\s\s+/g,
                "_"
              )}
            >
              <ProcessItem
                key={current_step.procstep_primary_step_title.richText[0].text.replace(
                  /\s\s+/g,
                  "_"
                )}
              >
                <img
                  src={current_step.procstep_image.localFile.publicURL}
                  alt={current_step.procstep_image.alt}
                  width={60}
                  onClick={() => handleHover(index + 1)}
                  style={
                    index + 1 <= hoverIndex
                      ? { filter: "grayscale(0)", transition: "filter 0.5s" }
                      : { filter: "grayscale(1)", transition: "filter 0.5s" }
                  }
                />
                <h3
                  style={
                    index + 1 <= hoverIndex
                      ? { color: "#671955" }
                      : { color: "black" }
                  }
                >
                  <button type="button" onClick={() => handleHover(index + 1)}>
                    {current_step.procstep_primary_step_title.richText[0].text}
                  </button>
                </h3>
                {windowWidth <= 1300 ? (
                  <p
                    key={props.process_steps[
                      index
                    ].procstep_primary_step_title.richText[0].text.replace(
                      /\s\s+/g,
                      "_"
                    )}
                    style={
                      hoverIndex === index + 1
                        ? {
                            opacity: "1",
                            height: "fit-content",
                            transform: "scaleY(1)",
                            transition: "opacity 0.5s, transform 0.5s",
                          }
                        : {
                            opacity: "0",
                            height: "0",
                            transform: "scaleY(0)",
                            transition: "opacity 0.5s, transform 0.5s",
                          }
                    }
                  >
                    {
                      props.process_steps[index].procstep_step_paragraph
                        .richText[0].text
                    }
                  </p>
                ) : null}
              </ProcessItem>
            </React.Fragment>
          ) : (
            <React.Fragment
              key={current_step.procstep_primary_step_title.richText[0].text.replace(
                /\s\s+/g,
                "_"
              )}
            >
              <ProcessItem>
                <img
                  src={current_step.procstep_image.localFile.publicURL}
                  alt={current_step.procstep_image.alt}
                  width={60}
                  onClick={() => handleHover(index + 1)}
                  style={
                    index + 1 <= hoverIndex
                      ? { filter: "grayscale(0)", transition: "filter 0.5s" }
                      : { filter: "grayscale(1)", transition: "filter 0.5s" }
                  }
                />
                <h3
                  style={
                    index + 1 <= hoverIndex
                      ? { color: "#671955" }
                      : { color: "black" }
                  }
                >
                  <button type="button" onClick={() => handleHover(index + 1)}>
                    {current_step.procstep_primary_step_title.richText[0].text}
                  </button>
                </h3>
                {windowWidth <= 1300 ? (
                  <p
                    key={props.process_steps[
                      index
                    ].procstep_primary_step_title.richText[0].text.replace(
                      /\s\s+/g,
                      "_"
                    )}
                    style={
                      hoverIndex === index + 1
                        ? {
                            opacity: "1",
                            height: "fit-content",
                            transform: "scaleY(1)",
                            transition: "opacity 0.5s, transform 0.5s",
                          }
                        : {
                            opacity: "0",
                            height: "0",
                            transform: "scaleY(0)",
                            transition: "opacity 0.5s, transform 0.5s",
                          }
                    }
                  >
                    {
                      props.process_steps[index].procstep_step_paragraph
                        .richText[0].text
                    }
                  </p>
                ) : null}
              </ProcessItem>
              <svg style={{ flex: "1 1 0" }} xmlns="http://www.w3.org/2000/svg">
                {windowWidth <= 1300 ? (
                  <line
                    x1="50%"
                    y1="0"
                    x2="50%"
                    y2="100%"
                    stroke="black"
                    strokeWidth="2"
                    strokeDasharray="8"
                  />
                ) : (
                  <line
                    x1="0"
                    y1="25%"
                    x2="100%"
                    y2="25%"
                    stroke="black"
                    strokeWidth="2"
                    strokeDasharray="8"
                  />
                )}
              </svg>
            </React.Fragment>
          )
        )}
      </InnerContainer>

      {windowWidth >= 1300 ? (
        <ProcessDescriptionWrapper>
          {props.process_steps.map((current_step, index) => (
            <p
              key={current_step.procstep_primary_step_title.richText[0].text.replace(
                /\s\s+/g,
                "_"
              )}
              style={
                hoverIndex === index + 1
                  ? { opacity: "1", transition: "opacity 0.5s" }
                  : { opacity: "0", transition: "opacity 0.5s" }
              }
            >
              {current_step.procstep_step_paragraph.richText[0].text}
            </p>
          ))}
        </ProcessDescriptionWrapper>
      ) : null}
    </OuterContainer>
  )
}

export default StepsChartSection
