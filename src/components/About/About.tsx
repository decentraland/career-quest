import { styled } from "styled-components"
import { useResizePage } from "../../hooks/useResizePage"
import { breakpoints, theme } from "../../utils/theme"

const About = () => {
  const { isMobile } = useResizePage({ size: 992 })

  return (
    <AboutContainer id="about">
      {isMobile ? (
        <TitleAboutSection>Launch your Web3 Career</TitleAboutSection>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TitleAboutSection>Launch your</TitleAboutSection>
          <TitleAboutSection>Web3 Career</TitleAboutSection>
        </div>
      )}

      <DivVerticalLine />

      <ul style={{ padding: "0 20px", maxWidth: "600px" }}>
        <LiAbout>
          Explore <SpanAbout>2 days</SpanAbout> of interactive Web3 career
          events
        </LiAbout>

        <LiAbout>
          Attend <SpanAbout>8+</SpanAbout> workshops and expert sessions
        </LiAbout>

        <LiAbout>
          Join <SpanAbout>real-time challenges</SpanAbout> in the Career Quest
          Game Arena
        </LiAbout>

        <LiAbout>
          Connect with{" "}
          <SpanAbout>Bondex, web3.career, Metana and SheFi</SpanAbout> for
          hiring & training insights
        </LiAbout>

        <LiAbout>
          Win <SpanAbout>2 fully-funded</SpanAbout> Web3 bootcamps worth
          $12,000+
        </LiAbout>
      </ul>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  background-color: ${theme.black};
  padding: 60px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (min-width: ${breakpoints.md}) {
    padding: 80px 80px;
  }

  @media (min-width: ${breakpoints.l}) {
    flex-direction: row;
    gap: 0px;
    align-items: stretch;
    padding: 100px 20px;
  }
`

const TitleAboutSection = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: ${theme.white};
  letter-spacing: 0.1em;
`

const DivVerticalLine = styled.div`
  width: 2px;
  background-color: ${theme.white};
  display: none;
  margin: 0 40px;
  height: auto;
  align-self: stretch;

  @media (min-width: ${breakpoints.l}) {
    display: block;
  }
`

const LiAbout = styled.li`
  font-size: 22px;
  font-weight: 500;
  color: ${theme.white};
  margin-bottom: 5px;
`

const SpanAbout = styled.span`
  font-size: 22px;
  font-weight: 900;
  background: linear-gradient(90deg, ${theme.purple}, ${theme.orange});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`

export { About }
