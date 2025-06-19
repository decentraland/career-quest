import { styled } from "styled-components"
import { breakpoints, theme } from "../../utils/theme"

const SectionFaqContainer = styled.section`
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

const LeftFaqContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;

  @media (min-width: ${breakpoints.l}) {
    width: 30%;
    margin-bottom: 0;
  }
`

const RightFaqContainer = styled.div`
  width: 100%;
  color: ${theme.white};

  @media (min-width: ${breakpoints.l}) {
    width: 70%;
  }
`

const TitleFaq = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: ${theme.white};
  letter-spacing: 0.1em;
`

const QuestionFaqContainer = styled.div`
  border-top: 2px solid ${theme.white};
  padding: 20px 0;

  &:last-child {
    border-bottom: 2px solid ${theme.white};
  }
`

const QuestionFaq = styled.div`
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

const AnswerFaq = styled.div<{ $isActive: boolean }>`
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
    color: blue;
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
  }
`

const ArrowFaq = styled.img<{ $isActive: boolean }>`
  transition: all 0.3s ease-in-out;
  height: 24px;
  transform: ${(props) =>
    props.$isActive ? "rotate(180deg)" : "rotate(0deg)"};
`

const DivVerticalLineFaq = styled.div`
  display: none;
  width: 2px;
  background-color: ${theme.white};
  height: auto;
  align-self: stretch;

  @media (min-width: ${breakpoints.l}) {
    display: block;
  }
`

export {
  SectionFaqContainer,
  LeftFaqContainer,
  RightFaqContainer,
  TitleFaq,
  QuestionFaqContainer,
  QuestionFaq,
  AnswerFaq,
  ArrowFaq,
  DivVerticalLineFaq,
}
