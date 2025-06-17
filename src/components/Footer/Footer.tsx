import { FaLinkedinIn } from "react-icons/fa"
import { FaDiscord, FaXTwitter } from "react-icons/fa6"
import { styled } from "styled-components"
import decentralandLogo from "../../img/icons/logo.png"
import { breakpoints, theme } from "../../utils/theme"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <LogoImage src={decentralandLogo} alt="DMF 2025 Logo" />

        <a
          href="https://decentraland.org/terms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms & Services
        </a>
        <a
          href="https://decentraland.org/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </FooterLeft>
      <FooterRight>
        <SocialIcon
          href="https://x.com/decentraland"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </SocialIcon>
        <SocialIcon
          href="https://decentraland.org/discord/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/company/decentralandorg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </SocialIcon>
      </FooterRight>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  background-color: ${theme.black};
  width: 100%;
  border-top: 0.5px solid ${theme.white};

  @media (min-width: ${breakpoints.md}) {
    padding: 20px 40px;
    align-items: center;
  }

  @media (min-width: ${breakpoints.l}) {
    padding: 20px 60px;
  }
`

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }

  p {
    font-size: 14px;
    font-weight: 700;
    color: ${theme.white};
  }
`

const LogoImage = styled.img`
  height: 32px;
  width: auto;
`

const FooterRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`

const SocialIcon = styled.a`
  background-color: ${theme.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;

  @media (min-width: ${breakpoints.xl}) {
    width: 52px;
    height: 52px;
  }

  svg {
    width: 20px;
    height: 20px;

    @media (min-width: ${breakpoints.xl}) {
      width: 24px;
      height: 24px;
    }

    fill: ${theme.darkGray};
  }
`

export { Footer }
