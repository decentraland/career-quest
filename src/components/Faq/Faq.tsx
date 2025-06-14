import { memo, useState } from "react"
import { styled } from "styled-components"
import arrowDown from "../../img/icons/arrow-down2.png"
import { breakpoints, theme } from "../../utils/theme"

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const questions = [
    {
      question: "What is Decentraland?",
      answer: () => (
        <p>
          Decentraland is a social virtual world where you can connect, explore,
          and create.
        </p>
      ),
    },
    {
      question: "What is Decentraland Career Quest?",
      answer: () => (
        <p>
          A free, two-day event inside Decentraland where you can learn about
          Web3 careers, meet hiring partners, and sharpen your skills.
        </p>
      ),
    },
    {
      question: "How do I access Decentraland Career Quest?",
      answer: () => (
        <p>
          Decentraland Career Quest will take place in Decentraland. Download
          the{" "}
          <a
            href="https://decentraland.org/download/?utm_org=dcl&utm_source=site&utm_medium=organic&utm_campaign=careerquest"
            target="_blank"
            rel="noopener noreferrer"
          >
            Desktop Client
          </a>{" "}
          to get started. A jump-in link will appear on this page when Career
          Quest is taking place, meanwhile feel free to explore Genesis Plaza
          with your avatar.
        </p>
      ),
    },
    {
      question: "Do I need experience in Web3 to join?",
      answer: () => (
        <p>
          No. Whether you&apos;re new to Web3 or looking to grow, Career Quest
          has something for everyone.
        </p>
      ),
    },
    {
      question: "How do I join?",
      answer: () => (
        <p>
          Just create an account and download Decentraland. Once inside, look
          for the Career Quest hub.
        </p>
      ),
    },
    {
      question:
        "Do I need cryptocurrency or a digital wallet to use Decentraland?",
      answer: () => (
        <p>
          You don&apos;t need cryptocurrency to enjoy Decentraland—it&apos;s
          free to explore. If you want to buy a community-made creation from the{" "}
          <a
            href="https://decentraland.org/marketplace/?utm_org=dcl&utm_source=site&utm_medium=organic&utm_campaign=careerquest"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marketplace
          </a>
          , you can use a credit/debit card, bank transfer, or a variety of
          cryptocurrencies. As for a{" "}
          <a
            href="https://docs.decentraland.org/player/blockchain-integration/get-a-wallet/?utm_org=dcl&utm_source=site&utm_medium=organic&utm_campaign=careerquest"
            target="_blank"
            rel="noopener noreferrer"
          >
            digital wallet
          </a>
          , if you already have one, great! If you don&apos;t already have one,
          when you sign up for Decentraland with your email or a social account,
          a digital wallet will be automatically created for you. It&apos;s part
          of your account and stores any assets you collect, like free Wearables
          you might claim in-world or a fun Emote you purchase in the
          Marketplace.
        </p>
      ),
    },
    {
      question: "How do I keep up to date with Decentraland Career Quest news?",
      answer: () => (
        <p>
          Follow{" "}
          <a
            href="https://x.com/decentraland"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Decentraland
          </a>{" "}
          on X.com and search MVFW25 for live updates. You can also find
          Decentraland on{" "}
          <a
            href="https://www.instagram.com/decentraland_foundation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          , or{" "}
          <a
            href="https://decentraland.beehiiv.com/subscribe?utm_org=dcl&utm_source=mvfwlanding&utm_medium=organic&utm_campaign=mvfw25&utm_term=faq&utm_content=newsletter"
            target="_blank"
            rel="noopener noreferrer"
          >
            subscribe
          </a>{" "}
          to Decentraland&apos;s weekly newsletter for all of the latest news.
        </p>
      ),
    },
    {
      question: "I want to create in Decentraland, where can I learn more?",
      answer: () => (
        <p>
          Anyone can become a Decentraland creator, all it takes is a little
          know-how and endless creative ideas! Everything you need to know to
          start your creative journey can be found on the{" "}
          <a
            href="https://decentraland.org/create/?utm_org=dcl&utm_source=site&utm_medium=organic&utm_campaign=careerquest"
            target="_blank"
            rel="noopener noreferrer"
          >
            Decentraland Create
          </a>{" "}
          page.
        </p>
      ),
    },
  ]

  return (
    <SectionContainer>
      <LeftContainer>
        <Title>Frequently Asked Questions</Title>
      </LeftContainer>
      <DivVerticalLine />
      <RightContainer>
        {questions.map((item, index) => (
          <QuestionContainer key={index}>
            <Question onClick={() => toggleAnswer(index)}>
              <p>{item.question}</p>
              <Arrow
                src={arrowDown}
                alt="arrow"
                $isActive={activeIndex === index}
              />
            </Question>
            <Answer $isActive={activeIndex === index}>{item.answer()}</Answer>
          </QuestionContainer>
        ))}
      </RightContainer>
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 20px;
  background-color: ${theme.black};

  @media (min-width: ${breakpoints.md}) {
    padding: 80px 80px;
  }

  @media (min-width: ${breakpoints.l}) {
    flex-direction: row;
    padding: 100px 100px;
    gap: 40px;
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: 100px 150px;
  }

  @media (min-width: ${breakpoints.xxl}) {
    padding: 100px 200px;
  }
`

const LeftContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;

  @media (min-width: ${breakpoints.l}) {
    width: 30%;
    margin-bottom: 0;
  }
`

const RightContainer = styled.div`
  width: 100%;
  color: ${theme.white};

  @media (min-width: ${breakpoints.l}) {
    width: 70%;
  }
`

const Title = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: ${theme.white};
  letter-spacing: 0.1em;
`

const QuestionContainer = styled.div`
  border-top: 2px solid ${theme.white};
  padding: 20px 0;

  &:last-child {
    border-bottom: 2px solid ${theme.white};
  }
`

const Question = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  p {
    font-size: 24px;
    font-weight: 700;
    color: ${theme.white};
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`

const Answer = styled.div<{ $isActive: boolean }>`
  max-height: ${(props) => (props.$isActive ? "1000px" : "0")};
  opacity: ${(props) => (props.$isActive ? "1" : "0")};
  margin-top: ${(props) => (props.$isActive ? "20px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  p {
    font-size: 18px;
    color: ${theme.white};
    font-weight: 500;
  }

  a {
    text-decoration: underline !important;
    color: ${theme.white};
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
  }
`

const Arrow = styled.img<{ $isActive: boolean }>`
  transition: all 0.3s ease-in-out;
  height: 24px;
  transform: ${(props) =>
    props.$isActive ? "rotate(180deg)" : "rotate(0deg)"};
`

const DivVerticalLine = styled.div`
  display: none;
  width: 2px;
  background-color: ${theme.white};
  height: auto;
  align-self: stretch;

  @media (min-width: ${breakpoints.l}) {
    display: block;
  }
`

memo(Faq)
export { Faq }
