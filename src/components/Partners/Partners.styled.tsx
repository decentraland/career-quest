import { styled } from "styled-components"
import { breakpoints, theme } from "../../utils/theme"

const PartnersContainer = styled.div`
  background-color: ${theme.black};
  padding: 60px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: ${breakpoints.md}) {
    padding: 80px 80px;
  }

  @media (min-width: ${breakpoints.l}) {
    flex-direction: row;
    gap: 0px;
    align-items: stretch;
    padding: 100px 250px;
  }
`

const TitlePartnersSection = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: ${theme.white};
  letter-spacing: 0.1em;
`

const DivVerticalLinePartners = styled.div`
  width: 2px;
  background-color: ${theme.white};
  display: none;
  margin: 0 40px;
  height: auto;
  align-self: stretch;

  @media (min-width: ${breakpoints.l}) {
    display: block;
  }
`

const PartnersImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const ImgPartner = styled.div`
  width: 251px;
  height: 251px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* border: 1px solid red; */

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const SocialMediaItem = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid ${theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
`

export {
  PartnersContainer,
  TitlePartnersSection,
  DivVerticalLinePartners,
  PartnersImgContainer,
  ImgPartner,
  SocialMediaContainer,
  SocialMediaItem,
}
