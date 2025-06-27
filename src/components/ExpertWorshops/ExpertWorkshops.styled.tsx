import { styled } from "styled-components"
import { breakpoints, theme } from "../../utils/theme"

const ExpertWorkshopsContainer = styled.div`
  background-color: ${theme.black};
  padding: 40px 20px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (min-width: ${breakpoints.md}) {
    padding: 80px 20px;
  }

  @media (min-width: ${breakpoints.xl}) {
    flex-direction: row;
    gap: 0px;
    padding: 100px 60px;
    align-items: flex-start;
  }
`

const ExpertWorkshopsContainerLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.xl}) {
    justify-content: flex-end;
    align-items: flex-start;
    width: 40%;
    align-self: stretch;
  }
`

const ExpertWorkshopsContainerRight = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: 1fr;
    width: 60%;
    justify-content: flex-start;
    align-items: flex-start;
    /* justify-content: flex-start; */
  }
`

const ExpertWorkshopInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: ${breakpoints.xl}) {
    justify-content: flex-end;
    align-items: flex-end;
  }
`

const TitleExpertWorkshopsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    gap: 10px;
  }

  @media (min-width: ${breakpoints.xl}) {
    flex-direction: column;
    gap: 0px;
    align-items: flex-end;
    justify-content: flex-end;
  }
`

const TitleExpertWorkshops = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: ${theme.white};
  letter-spacing: 0.1em;
`

const SubtitleExpertWorkshops = styled.h3`
  font-size: 24px;
  font-weight: 700;
  max-width: 560px;
  color: ${theme.white};
  text-align: center;

  @media (min-width: ${breakpoints.xl}) {
    max-width: 345px;
    text-align: end;
  }
`

const TalkCardExpertWorkshops = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: ${theme.black};
  height: 100%;

  .info-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: ${breakpoints.xl}) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    .info-card {
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  img {
    width: 100%;
    max-width: 346px;
    border: 2px solid ${theme.white};
    object-fit: cover;
    border-radius: 25px;
    cursor: pointer;

    aspect-ratio: 16/9;
    transition: transform 0.3s ease;
    will-change: transform;
    &:hover {
      transform: scale(1.03);
      transition: transform 0.3s ease;
    }
  }

  h3 {
    font-size: 20px;
    max-width: 346px;
    font-weight: 700;
    color: ${theme.white};
    text-align: center;

    @media (min-width: ${breakpoints.xl}) {
      text-align: start;
    }
  }

  p {
    font-size: 16px;
    font-weight: 700;
    color: ${theme.white};
    text-align: center;
  }

  .time-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    p {
      font-size: 12px;
      font-weight: 500;
      color: ${theme.white};
      text-align: center;
    }
  }
`

const ModalExpertWorkshopsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0 auto;
`

export {
  ExpertWorkshopsContainer,
  ExpertWorkshopsContainerLeft,
  ExpertWorkshopsContainerRight,
  ExpertWorkshopInfoContainer,
  TitleExpertWorkshopsContainer,
  TitleExpertWorkshops,
  SubtitleExpertWorkshops,
  TalkCardExpertWorkshops,
  ModalExpertWorkshopsImage,
}
