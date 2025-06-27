import { styled } from "styled-components"
import { breakpoints, theme } from "../utils/theme"

const DivVerticalLine = styled.div`
  width: 2px;
  background-color: ${theme.white};
  display: none;
  margin: 0 40px;
  height: auto;
  align-self: stretch;

  @media (min-width: ${breakpoints.md}) {
    display: block;
  }
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: ${breakpoints.xl}) {
    justify-content: flex-end;
    align-items: flex-end;
  }
`

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const IconItem = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid ${theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
`

const DescriptionText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${theme.white};
  text-align: center;
  max-width: 560px;

  @media (min-width: ${breakpoints.xl}) {
    text-align: end;
    max-width: 345px;
  }
`

export {
  DivVerticalLine,
  IconsContainer,
  IconItem,
  DescriptionContainer,
  DescriptionText,
}
