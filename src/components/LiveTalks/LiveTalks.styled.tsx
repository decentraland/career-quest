import { styled } from "styled-components"
import { breakpoints } from "../../utils/theme"

const LiveTalksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ebecfa;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 24px;
  position: relative;
  max-width: 1200px;
  margin-block: 100px;
  @media (min-width: ${breakpoints.l}) {
    flex-direction: row;
    justify-content: center;
    gap: 24px;
    align-items: flex-start;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 30px 15px;
  }

  @media (max-width: ${breakpoints.s}) {
    padding: 20px 10px;
  }

  .live-talks-header {
    gap: 10px;
    padding-left: 20px;
    border-left: 1px solid #ebecfa;
    margin-block: 24px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
      font-size: 32px;
      font-weight: 700;
      color: #ebecfa;
      letter-spacing: 0.04em;
      text-align: left;
    }

    h5 {
      font-size: 18px;
      font-weight: 400;
      color: #ebecfa;
      letter-spacing: 0.06em;
      text-align: left;
      margin-block: 12px;
      max-width: 360px;

      a {
        text-decoration: underline;
        color: rgb(88, 122, 235);
      }
    }

    @media (min-width: ${breakpoints.l}) {
      max-width: 360px;
      text-align: right;
      align-items: flex-end;

      h5 {
        text-align: right;
        max-width: 350px;
      }

      h2 {
        text-align: right;
      }
    }

    @media (min-width: ${breakpoints.l}) {
      margin-block: 0;
      padding-left: 0;
      border-left: none;
      height: 100%;
    }

    > div.header-desktop {
      margin-top: 24px;
      width: 100%;
      display: none;

      > img:first-child {
        margin-bottom: 12px;
      }

      @media (min-width: 1024px) {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        text-align: right;
        flex-direction: column;
        display: flex;
      }

      p {
        font-size: 14px;
        font-weight: 400;
        color: #ebecfa;
        max-width: 350px;
        letter-spacing: 0.06em;
        margin-bottom: 24px;
      }

      .header-desktop-icons {
        align-items: flex-end;
        justify-content: flex-end;

        svg {
          width: 240px;
          height: 100%;
          margin-left: auto;
        }
      }

      a:first-child {
        margin-top: 24px;
      }
    }
  }
`

const ModalTalkImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0 auto;
`

const TalksGrid = styled.div`
  display: grid;
  gap: 30px;
  width: 100%;
  max-width: 1240px;
  margin-bottom: 60px;

  @media (max-width: ${breakpoints.s}) {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(240px, 1fr));
    gap: 20px;
    border-left: 1px solid #ebecfa;
    padding-left: 24px;
  }
`

const TalkCard = styled.div`
  color: #ebecfa;
  text-align: center;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    border: 1px solid;
    object-fit: cover;
    aspect-ratio: 16/9;
    border-radius: 20px;
    cursor: pointer;
    transition: transform 0.3s ease;
    will-change: transform;
    &:hover {
      transform: scale(1.03);
      transition: transform 0.3s ease;
    }
  }

  h3 {
    margin-top: 15px;
    font-size: 22px;
    font-weight: bold;
    font-family: "Inter", sans-serif !important;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    color: #ebecfa;
    line-height: 1.4;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 0;

    h3 {
      font-size: 20px;
      letter-spacing: 0.05em;
    }

    p {
      font-size: 14px;
      letter-spacing: 0.05em;
      opacity: 0.8;
    }

    img {
      height: unset;
    }
  }
`

const TalkTime = styled.p`
  font-weight: 400 !important;
  letter-spacing: 0.05em;
`

const TimeInfoTalk = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  margin-top: 15px;

  p {
    color: #ebecfa !important;
    font-weight: 400 !important;
    margin: 0;
    position: relative;

    &:not(:last-child)::after {
      content: "|";
      position: absolute;
      right: -7px;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 12px;
    gap: 8px;
  }
`

export {
  LiveTalksContainer,
  ModalTalkImage,
  TalksGrid,
  TalkCard,
  TalkTime,
  TimeInfoTalk,
}
