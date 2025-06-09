import styledComponents from "styled-components"
import { ExperiencesSectionInfo } from "../ExperiencesSectionInfo/ExperiencesSectionInfo"
import { Runways } from "../Runways"

const ExperiencesSection = () => {
  return (
    <Container>
      <InnerContainer>
        <Runways useMode="runways" />
        <ExperiencesSectionInfo />
        <Runways useMode="experiences" />
      </InnerContainer>
    </Container>
  )
}

const Container = styledComponents.div`
  width: 100%;
  height: 100%;
`

const InnerContainer = styledComponents.div`
  width: 100%;
  height: 100%;
  max-width: 1240px;
  margin: 0 auto;
`

export { ExperiencesSection }
