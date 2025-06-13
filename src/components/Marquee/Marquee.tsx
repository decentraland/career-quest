import { styled } from "styled-components"
import { theme } from "../../utils/theme"

/**
 * Interface for marquee item data
 */
interface MarqueeItem {
  id: number
  text: string
}

/**
 * Double infinite marquee component that displays scrolling text in opposite directions.
 * Creates a dynamic, continuous scrolling effect with hover pause.
 *
 * @returns {JSX.Element} The rendered marquee component
 */
const Marquee = () => {
  const items: MarqueeItem[] = [
    { id: 1, text: "WEB3 CAREERS" },
    { id: 2, text: "EXPERT PANELS" },
    { id: 3, text: "SKILLS CHALLENGES" },
    { id: 4, text: "LIVE WORKSHOPS" },
    { id: 5, text: "TRAINING GIVEAWAYS" },
    { id: 6, text: "CAREER GUIDANCE" },
    { id: 7, text: "INSIDER CAREER TALKS" },
    { id: 8, text: "GAME ARENA" },
    { id: 9, text: "WIN A BOOTCAMP" },
    { id: 10, text: "WEB3 CAREERS" },
    { id: 11, text: "EXPERT PANELS" },
    { id: 12, text: "SKILLS CHALLENGES" },
    { id: 13, text: "LIVE WORKSHOPS" },
    { id: 14, text: "TRAINING GIVEAWAYS" },
    { id: 15, text: "CAREER GUIDANCE" },
    { id: 16, text: "INSIDER CAREER TALKS" },
    { id: 17, text: "GAME ARENA" },
    { id: 18, text: "WIN A BOOTCAMP" },
    { id: 19, text: "WEB3 CAREERS" },
    { id: 20, text: "EXPERT PANELS" },
    { id: 21, text: "SKILLS CHALLENGES" },
    { id: 22, text: "LIVE WORKSHOPS" },
    { id: 23, text: "TRAINING GIVEAWAYS" },
    { id: 24, text: "CAREER GUIDANCE" },
    { id: 25, text: "INSIDER CAREER TALKS" },
    { id: 26, text: "GAME ARENA" },
    { id: 27, text: "WIN A BOOTCAMP" },
  ]

  // Double the items to ensure smooth infinite scroll
  const doubledItems = [...items, ...items]

  return (
    <MarqueeContainer>
      <MarqueeWrapper>
        <MarqueeContent>
          {doubledItems.map((item, idx) => (
            <MarqueeItem key={`${item.id}-${idx}`}>{item.text}</MarqueeItem>
          ))}
        </MarqueeContent>
      </MarqueeWrapper>
    </MarqueeContainer>
  )
}

const MarqueeContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  overflow: hidden;
  background-color: ${theme.black};
  padding-block: 0.7rem;
  border-top: 2px solid ${theme.white};
  border-bottom: 2px solid ${theme.white};
`

const MarqueeWrapper = styled.div`
  position: relative;
  display: flex;
  overflow-x: hidden;
  width: 100%;

  &:hover {
    animation-play-state: paused;
  }
`

const MarqueeContent = styled.div`
  display: flex;
  white-space: nowrap;
  animation: marquee 200s linear infinite;

  &.clone {
    position: absolute;
    top: 0;
    left: 100%;
  }

  &:hover {
    animation-play-state: paused;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`

const MarqueeItem = styled.span`
  font-size: 14px;
  font-weight: 900;
  padding: 0.5rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 0.375rem;
  color: ${theme.white};
  letter-spacing: 0.08em;
`

export { Marquee }
