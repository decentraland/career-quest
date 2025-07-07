import { FaLinkedinIn } from "react-icons/fa"
import { FaDiscord, FaXTwitter } from "react-icons/fa6"
import { SlMenu } from "react-icons/sl"
import { useResizePage } from "../../hooks/useResizePage"
import careerQuestLogo from "../../img/faq/career-quest-logo.png"
import decentralandLogo from "../../img/misc/logo-decentraland.png"
import {
  MenuIcon,
  MobileMenu,
  NavbarContainer,
  SocialNavbarIcon,
} from "./Navbar.styled"

const Navbar = () => {
  const { isMobile, menuOpen, setMenuOpen } = useResizePage({ size: 768 })

  return (
    <>
      <NavbarContainer>
        {isMobile ? (
          <div className="navbar-mobile">
            <img src={careerQuestLogo} alt="career-quest-logo" />
            <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
              <SlMenu />
            </MenuIcon>
          </div>
        ) : (
          <div className="navbar-desktop">
            <div className="navbar-left">
              <img src={careerQuestLogo} alt="career-quest-logo" />
              <div className="navbar-navigation">
                <span>
                  <a href="#about">About</a>
                </span>
                <span>
                  <a href="#schedule">Schedule</a>
                </span>
                <span>
                  <a href="#workshops">Workshops</a>
                </span>
                <span>
                  <a href="#faq">FAQ</a>
                </span>
              </div>
            </div>

            <div className="navbar-right">
              <a
                href="https://decentraland.org/?utm_org=dcl&utm_source=landing&utm_medium=organic&utm_campaign=careerquest"
                target="_blank"
                rel="noopener noreferrer"
                className="decentraland-logo"
              >
                <img src={decentralandLogo} alt="decentraland-logo" />
              </a>
              <SocialNavbarIcon
                href="https://x.com/decentraland"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </SocialNavbarIcon>
              <SocialNavbarIcon
                href="https://decentraland.org/discord/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </SocialNavbarIcon>
              <SocialNavbarIcon
                href="https://www.linkedin.com/company/decentralandorg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </SocialNavbarIcon>
            </div>
          </div>
        )}
      </NavbarContainer>
      {isMobile && menuOpen && (
        <MobileMenu>
          <div className="mobile-links">
            <a href="#about">About</a>
            <a href="#schedule">Schedule</a>
            <a href="#workshops">Workshops</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="mobile-socials">
            <SocialNavbarIcon
              href="https://x.com/decentraland"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </SocialNavbarIcon>
            <SocialNavbarIcon
              href="https://decentraland.org/discord/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </SocialNavbarIcon>
            <SocialNavbarIcon
              href="https://www.linkedin.com/company/decentralandorg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </SocialNavbarIcon>

            <a
              href="https://decentraland.org/?utm_org=dcl&utm_source=mvfwlanding&utm_medium=organic&utm_campaign=mvfw&utm_term=header"
              target="_blank"
              rel="noopener noreferrer"
              className="decentraland-logo"
            >
              <img src={decentralandLogo} alt="decentraland-logo" />
            </a>
          </div>
        </MobileMenu>
      )}
    </>
  )
}

export { Navbar }
