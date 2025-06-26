import { styled } from "styled-components"
import partnersBackground from "../../img/partners/partners-background.png"
import { breakpoints, theme } from "../../utils/theme"

const PartnersContainer = styled.div`
  background-color: ${theme.black};
  background-image: url(${partnersBackground});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: ${breakpoints.md}) {
    padding: 80px 20px;
  }

  @media (min-width: ${breakpoints.l}) {
    flex-direction: row;
    gap: 0px;
    padding: 100px 60px;
  }
`

const PartnerContainerLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.l}) {
    justify-content: flex-end;
    width: 40%;
  }
`

const PartnerContainerRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: ${breakpoints.l}) {
    width: 60%;
    justify-content: flex-start;
  }
`

const TitlePartnersSection = styled.h2`
  font-size: 24px;
  font-weight: 900;
  color: ${theme.white};
  letter-spacing: 0.1em;

  @media (min-width: ${breakpoints.md}) {
    font-size: 40px;
  }
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

const ImgPartner = styled.div`
  width: 160px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */

  img {
    width: 100%;
    height: auto;
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
  PartnerContainerLeft,
  PartnerContainerRight,
  TitlePartnersSection,
  DivVerticalLinePartners,
  ImgPartner,
  SocialMediaContainer,
  SocialMediaItem,
}
