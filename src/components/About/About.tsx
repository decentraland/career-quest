import { useResizePage } from "../../hooks/useResizePage"
import { DivVerticalLine } from "../../shared/common.styled"
import {
  AboutContainer,
  AboutContainerLeft,
  AboutContainerRight,
  LiAbout,
  SpanAbout,
  TitleAboutSection,
} from "./About.styled"

const About = () => {
  const { isMobile } = useResizePage({ size: 768 })

  return (
    <AboutContainer id="about">
      {isMobile ? (
        <TitleAboutSection>Launch Your Web3 Career</TitleAboutSection>
      ) : (
        <AboutContainerLeft>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TitleAboutSection>Launch your</TitleAboutSection>
            <TitleAboutSection>Web3 Career</TitleAboutSection>
          </div>

          <DivVerticalLine />
        </AboutContainerLeft>
      )}

      <AboutContainerRight>
        <ul style={{ padding: "0 20px", maxWidth: "600px" }}>
          <LiAbout>
            Explore <SpanAbout>2 days</SpanAbout> of interactive Web3 career
            events
          </LiAbout>

          <LiAbout>
            Attend <SpanAbout>8+</SpanAbout> workshops and expert sessions
          </LiAbout>

          <LiAbout>
            Join <SpanAbout>knowledge tournaments</SpanAbout> in the Career
            Quest Game Arena
          </LiAbout>

          <LiAbout>
            Connect with{" "}
            <SpanAbout>Bondex, web3.career, Metana and SheFi</SpanAbout> for
            hiring and training insights
          </LiAbout>

          <LiAbout>
            Win <SpanAbout>2 fully-funded</SpanAbout> Web3 bootcamps worth
            $12,000+
          </LiAbout>
        </ul>
      </AboutContainerRight>
    </AboutContainer>
  )
}

export { About }
