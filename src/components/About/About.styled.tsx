import { styled } from "styled-components"
import { breakpoints, theme } from "../../utils/theme"

const AboutContainer = styled.div`
  background-color: ${theme.black};
  // arriba, derecha, abajo, izquierda
  padding: 60px 20px 40px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (min-width: ${breakpoints.md}) {
    padding: 80px 80px 40px 80px;
  }

  @media (min-width: ${breakpoints.l}) {
    flex-direction: row;
    gap: 0px;
    align-items: stretch;
    padding: 100px 20px 40px 20px;
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

export {
  AboutContainer,
  DivVerticalLine,
  LiAbout,
  SpanAbout,
  TitleAboutSection,
}
