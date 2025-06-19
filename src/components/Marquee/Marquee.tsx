import {
  MarqueeContainer,
  MarqueeContent,
  MarqueeItem,
  MarqueeWrapper,
} from "./Marquee.styled"

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
    { id: 4, text: "WORKSHOPS" },
    { id: 5, text: "TRAINING GIVEAWAYS" },
    { id: 6, text: "CAREER GUIDANCE" },
    { id: 8, text: "GAME ARENA" },
    { id: 9, text: "WIN A BOOTCAMP" },
    { id: 10, text: "WEB3 CAREERS" },
    { id: 11, text: "EXPERT PANELS" },
    { id: 12, text: "SKILLS CHALLENGES" },
    { id: 13, text: "WORKSHOPS" },
    { id: 14, text: "TRAINING GIVEAWAYS" },
    { id: 15, text: "CAREER GUIDANCE" },
    { id: 17, text: "GAME ARENA" },
    { id: 18, text: "WIN A BOOTCAMP" },
    { id: 19, text: "WEB3 CAREERS" },
    { id: 20, text: "EXPERT PANELS" },
    { id: 21, text: "SKILLS CHALLENGES" },
    { id: 22, text: "WORKSHOPS" },
    { id: 23, text: "TRAINING GIVEAWAYS" },
    { id: 24, text: "CAREER GUIDANCE" },
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

export { Marquee }
