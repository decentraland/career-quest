import styledComponents from "styled-components"
import decentralandLogo from "../../img/icons/logo.png"
import { breakpoints } from "../../utils/theme.js"
import { Discord } from "../icons/Vector-Discord.js"
import { Instagram } from "../icons/Vector-Instagram.js"
import { Twitter } from "../icons/Vector-Twitter.js"

const Footer = () => {
  return (
    <StyledFooter className="Footer">
      <Nav>
        <FooterLeft>
          <a
            href="https://decentraland.org/?utm_org=dcl&utm_source=decentraland&utm_medium=musiclanding&utm_campaign=musicfestival24"
            target="_blank"
            rel="noreferrer"
          >
            <LogoContainer>
              <LogoImage src={decentralandLogo} alt="DMF 2024 Logo" />
            </LogoContainer>
          </a>
          <FooterText
            href="https://decentraland.org/terms/"
            target="_blank"
            rel="noreferrer"
          >
            Terms & Services
          </FooterText>
          <FooterText
            href="https://decentraland.org/privacy/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </FooterText>
        </FooterLeft>

        <FooterRight>
          <SocialIcon
            href="https://twitter.com/decentraland"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </SocialIcon>
          <SocialIcon
            href="https://www.instagram.com/decentraland_foundation/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </SocialIcon>
          <SocialIcon
            href="https://decentraland.org/discord/"
            target="_blank"
            rel="noreferrer"
          >
            <Discord />
          </SocialIcon>
        </FooterRight>
      </Nav>
    </StyledFooter>
  )
}

const StyledFooter = styledComponents.section`
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  width: 100%;
`

const FooterLeft = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  width: 50%;
`

const FooterRight = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`

const FooterText = styledComponents.a`
  color: #efefef;
  font-size: 12px;
  font-weight: 700;
  font-family: "InterMedium", sans-serif;
  letter-spacing: 3px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  width: fit-content;
`

const SocialIcon = styledComponents.a`
  cursor: pointer;
  display: inline-block;
  border-radius: 100%;
  transition: transform 0.4s ease;
  background-color: #ebecfa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  :hover {
    transform: scale(1.1);
    transition: transform 0.4s ease;
    will-change: transform;
  }

  svg {
    filter: invert(1);
    width: 24px;
    height: 24px;

    path {
      fill: #ebecfa;
      transition: fill 0.4s ease;
    }

    :hover path {
      fill: black;
    }
  }
`

const Nav = styledComponents.nav`
  width: 100%;
  display: flex;
  padding: 24px 24px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;

  @media screen and (min-width: ${breakpoints.s}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 18px 62px;
  }
`

const LogoContainer = styledComponents.a`
  cursor: pointer;
  display: flex;
  align-items: center;
`

const LogoImage = styledComponents.img`
  height: 24px;
  width: auto;
`

// eslint-disable-next-line import/no-default-export
export { Footer }
