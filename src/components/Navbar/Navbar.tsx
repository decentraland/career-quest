import { useEffect, useState } from "react"
import { FaLinkedinIn } from "react-icons/fa"
import { FaDiscord, FaXTwitter } from "react-icons/fa6"
import { SlMenu } from "react-icons/sl"
import { styled } from "styled-components"
import careerQuestLogo from "../../img/faq/career-quest-logo.png"
import decentralandLogo from "../../img/misc/logo-decentraland.png"
import { breakpoints, theme } from "../../utils/theme"

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const mobileWidth = window.innerWidth < 768
      setIsMobile(mobileWidth)
      if (!mobileWidth) {
        setMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

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
                  <a href="#faq">FAQ</a>
                </span>
              </div>
            </div>

            <div className="navbar-right">
              <a
                href="https://decentraland.org/?utm_org=dcl&utm_source=mvfwlanding&utm_medium=organic&utm_campaign=mvfw&utm_term=header
    "
                target="_blank"
                rel="noopener noreferrer"
                className="decentraland-logo"
              >
                <img src={decentralandLogo} alt="decentraland-logo" />
              </a>
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
            </div>
          </div>
        )}
      </NavbarContainer>
      {isMobile && menuOpen && (
        <MobileMenu>
          <div className="mobile-links">
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="mobile-socials">
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

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;

  @media (min-width: ${breakpoints.md}) {
    padding: 20px 40px;
  }

  @media (min-width: ${breakpoints.l}) {
    padding: 20px 60px;
  }

  .navbar-mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (min-width: ${breakpoints.md}) {
      display: none;
    }
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 220px;
    max-height: 50px;
    object-fit: contain;
  }

  .navbar-desktop {
    display: none;
    width: 100%;

    @media (min-width: ${breakpoints.md}) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .navbar-left {
    display: flex;
    align-items: center;
    gap: 40px;

    .navbar-navigation {
      display: none;
      align-items: center;
      gap: 40px;

      @media (min-width: ${breakpoints.md}) {
        display: flex;
      }

      span {
        a {
          text-decoration: none;
          color: ${theme.white};
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;

          @media (min-width: ${breakpoints.xl}) {
            font-size: 16px;
          }
        }
      }
    }
  }

  .navbar-right {
    display: flex;
    align-items: center;
    gap: 16px;

    .decentraland-logo {
      display: none;
      margin-right: 16px;

      @media (min-width: ${breakpoints.l}) {
        display: block;
      }
    }
  }
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

const MenuIcon = styled.button`
  background-color: ${theme.darkGray};
  border-radius: 50%;
  border: 1px solid ${theme.darkGray600};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }

  svg {
    width: 12px;
    height: 12px;
    fill: ${theme.white};
  }
`

const MobileMenu = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
  width: 100%;
  background-color: ${theme.darkGray};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1000;

  .mobile-links {
    display: flex;
    flex-direction: column;
    gap: 16px;

    a {
      text-decoration: none;
      color: ${theme.white};
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  .mobile-socials {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-top: 16px;
    border-top: 1px solid ${theme.darkGray600};

    .decentraland-logo {
      img {
        margin-top: 4px;
        max-width: 200px;
        /* max-height: 30px; */
      }
    }
  }
`

export { Navbar }
