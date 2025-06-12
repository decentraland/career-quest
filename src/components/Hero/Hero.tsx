import { styled } from "styled-components"
import decentralandLogo from "../../img/faq/logo.png"
import bgImage from "../../img/misc/background.webp"
import { JumpInBtn } from "../JumpInBtn/JumpInBtn"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroInnerContainer>
        <div className="hero-top">
          <p className="hero-date">JULY 16 - 19</p>
          <img src={decentralandLogo} alt="decentraland-logo" />
          <p className="hero-info">
            EXPLORE WEB3 CAREERS, SHARPEN YOUR SKILLS, AND CONNECT WITH THE
            PEOPLE SHAPING THE FUTURE OF THE INTERNET
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
          <HeroTextContainer>
            <HeroTextContainerLeft>
              <p>FREE & OPEN TO ALL</p>
            </HeroTextContainerLeft>
            <HeroTextContainerRight>
              <p>HIRING INSIGHTS</p>
            </HeroTextContainerRight>
          </HeroTextContainer>

          <HeroTextContainer>
            <HeroTextContainerLeft>
              <p>WORKSHOPS & PANELS</p>
            </HeroTextContainerLeft>
            <HeroTextContainerRight>
              <p>TRAINING GIVEAWAYS</p>
            </HeroTextContainerRight>
          </HeroTextContainer>

          <HeroTextContainer>
            <HeroTextContainerLeft>
              <p>WIN A WEB3 BOOTCAMP</p>
            </HeroTextContainerLeft>
            <HeroTextContainerRight>
              <p>GAME ARENA</p>
            </HeroTextContainerRight>
          </HeroTextContainer>
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bgImage});
  background-position: 57% 47%;
  background-size: 600%;

  @media (min-width: 640px) {
    background-position: 48% 50%;
    background-size: 450%;
  }

  @media (min-width: 1024px) {
    background-position: 37% 55%;
    background-size: 250%;
  }

  @media (min-width: 1280px) {
    background-position: 25% 55%;
    background-size: 200%;
  }

  @media (min-width: 1440px) {
    background-position: 5% 55%;
    background-size: 160%;
  }
`

const HeroInnerContainer = styled.div`
  width: 100%;
  height: auto;
  max-width: 1240px;
  margin: 0 auto;
  color: #ebecfa;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  position: relative;
  padding: 0px 20px;

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
      color: #fcfcfc;
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
  background-color: #ebecfa;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 6px 16px;
  border: 2px solid #ebecfa;

  p {
    font-size: 10px;
    color: #081116;
    font-weight: 700;
    text-align: center;
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
  background-color: transparent;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 6px 16px;
  border: 2px solid #ebecfa;

  p {
    font-size: 10px;
    color: #ebecfa;
    font-weight: 700;
    text-align: center;
  }

  @media (min-width: 568px) {
    p {
      font-size: 14px;
    }
  }
`

export { Hero }
