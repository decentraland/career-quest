import { useEffect, useState } from "react"
import { styled } from "styled-components"
import careerQuestLogo from "../../img/faq/career-quest-logo.png"
import bgImage from "../../img/misc/background.png"
import { breakpoints, theme } from "../../utils/theme"
import { JumpInBtn } from "../JumpInBtn/JumpInBtn"

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const mobileWidth = window.innerWidth <= 568
      setIsMobile(mobileWidth)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <HeroContainer>
      <HeroInnerContainer>
        <div className="hero-top">
          <p className="hero-date">JULY 16 - 17</p>
          <img src={careerQuestLogo} alt="decentraland-logo" />
          <p className="hero-info">
            EXPLORE WEB3 CAREERS, SHARPEN YOUR SKILLS, AND CONNECT WITH TOP
            HIRING TEAMS
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "100%",
            marginBottom: "24px",
          }}
        >
          {isMobile ? (
            <>
              <HeroTextContainer>
                <HeroTextContainerLeft className="background-fill-white">
                  <p>FREE & OPEN TO ALL</p>
                </HeroTextContainerLeft>
                <HeroTextContainerRight className="background-transparent">
                  <p>HIRING INSIGHTS</p>
                </HeroTextContainerRight>
              </HeroTextContainer>

              <HeroTextContainer>
                <HeroTextContainerLeft className="background-transparent">
                  <p>EXPERT WORKSHOPS</p>
                </HeroTextContainerLeft>
                <HeroTextContainerRight className="background-fill-white">
                  <p>TRAINING GIVEAWAYS</p>
                </HeroTextContainerRight>
              </HeroTextContainer>

              <HeroTextContainer>
                <HeroTextContainerLeft className="background-fill-white">
                  <p>WIN A WEB3 BOOTCAMP</p>
                </HeroTextContainerLeft>
                <HeroTextContainerRight className="background-transparent">
                  <p>GAME ARENA</p>
                </HeroTextContainerRight>
              </HeroTextContainer>
            </>
          ) : (
            <>
              <HeroTextContainer>
                <HeroTextContainerLeft className="background-fill-white">
                  <p>FREE & OPEN TO ALL</p>
                </HeroTextContainerLeft>

                <HeroTextContainerCenter className="background-transparent">
                  <p>HIRING INSIGHTS</p>
                </HeroTextContainerCenter>

                <HeroTextContainerRight className="background-fill-white">
                  <p>EXPERT WORKSHOPS</p>
                </HeroTextContainerRight>
              </HeroTextContainer>

              <HeroTextContainer>
                <HeroTextContainerLeft className="background-transparent">
                  <p>TRAINING GIVEAWAYS</p>
                </HeroTextContainerLeft>

                <HeroTextContainerCenter className="background-fill-white">
                  <p>WIN A WEB3 BOOTCAMP</p>
                </HeroTextContainerCenter>

                <HeroTextContainerRight className="background-transparent">
                  <p>GAME ARENA</p>
                </HeroTextContainerRight>
              </HeroTextContainer>
            </>
          )}
        </div>
        <div className="hero-bottom">
          <JumpInBtn />
        </div>
      </HeroInnerContainer>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${bgImage});
  background-position: 57% 47%;
  background-size: 200%;

  @media (min-width: 640px) {
    background-position: 48% 50%;
    background-size: 170%;
  }

  @media (min-width: 1024px) {
    background-position: 37% 55%;
    background-size: 140%;
  }

  @media (min-width: 1280px) {
    background-position: 25% 55%;
    background-size: 100%;
  }

  @media (min-width: 1440px) {
    background-position: 5% 55%;
    background-size: 100%;
  }
`

const HeroInnerContainer = styled.div`
  width: 100%;
  height: auto;
  /* max-width: 1240px; */
  margin: 0 auto;
  color: ${theme.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  position: relative;
  padding: 0px 20px;

  @media (min-width: ${breakpoints.md}) {
    padding: 0px 70px;
  }

  @media (min-width: ${breakpoints.l}) {
    padding: 0px 100px;
  }

  .hero-top {
    width: 100%;
    height: 100%;
    max-width: 750px;

    .hero-date {
      font-size: 40px;
      font-weight: 800;
      margin-bottom: 40px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-info {
      font-size: 16px;
      font-weight: 700;
      color: ${theme.white};
      margin-top: 5px;
      margin-bottom: 20px;
    }
  }
`

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
`

const HeroTextContainerLeft = styled.div`
  width: fit-content;
  height: 100%;
  max-width: 750px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 6px 16px;
  border: 2px solid ${theme.white};

  p {
    font-size: 10px;
    font-weight: 700;
    text-align: center;
  }

  &.background-fill-white {
    background-color: ${theme.white};

    p {
      color: ${theme.darkGray};
    }
  }

  &.background-transparent {
    background-color: transparent;

    p {
      color: ${theme.white};
    }
  }

  @media (min-width: 568px) {
    p {
      font-size: 14px;
    }
  }
`

const HeroTextContainerCenter = styled.div`
  width: fit-content;
  height: 100%;
  max-width: 750px;
  background-color: transparent;
  padding: 6px 16px;
  border: 2px solid ${theme.white};

  p {
    font-size: 10px;
    font-weight: 700;
    text-align: center;
  }

  &.background-fill-white {
    background-color: ${theme.white};

    p {
      color: ${theme.darkGray};
    }
  }

  &.background-transparent {
    background-color: transparent;

    p {
      color: ${theme.white};
    }
  }

  @media (min-width: 568px) {
    p {
      font-size: 14px;
    }
  }
`

const HeroTextContainerRight = styled.div`
  width: fit-content;
  height: 100%;
  max-width: 750px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 6px 16px;
  border: 2px solid ${theme.white};

  p {
    font-size: 10px;
    font-weight: 700;
    text-align: center;
  }

  &.background-fill-white {
    background-color: ${theme.white};

    p {
      color: ${theme.darkGray};
    }
  }

  &.background-transparent {
    background-color: transparent;

    p {
      color: ${theme.white};
    }
  }

  @media (min-width: 568px) {
    p {
      font-size: 14px;
    }
  }
`

export { Hero }
