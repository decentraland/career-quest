import { styled } from "styled-components"
import { breakpoints, theme } from "../../utils/theme"

const ModalTalkImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0 auto;
`

const LiveTalksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.black};
  padding: 60px 20px;
  width: 100%;

  @media (min-width: ${breakpoints.md}) {
    padding: 80px 80px;
  }

  @media (min-width: ${breakpoints.l}) {
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
  }
`

const LiveTalksCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  padding: 20px;
  width: 100%;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
  }
`

const LiveTalksTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  p {
    font-size: 24px;
    font-weight: 500;
    color: ${theme.white};
    text-align: end;
  }
`

const LiveTalksTitle = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: ${theme.white};
  letter-spacing: 0.1em;
  text-align: center;

  @media (min-width: ${breakpoints.l}) {
    text-align: end;
  }
`

const TalkCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  background-color: ${theme.black};
  height: 100%;

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
    font-weight: 700;
    color: ${theme.white};
    margin-bottom: 10px;
    text-align: center;

    span {
      font-size: 16px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 700;
    color: ${theme.white};
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    p {
      font-size: 14px;
      font-weight: 500;
      color: ${theme.white};
    }
  }
`

export {
  LiveTalksContainer,
  LiveTalksCardsContainer,
  LiveTalksTitleContainer,
  LiveTalksTitle,
  TalkCard,
  ModalTalkImage,
}
