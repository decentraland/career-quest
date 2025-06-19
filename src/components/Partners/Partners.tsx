import { styled } from "styled-components"
import bondex from "../../img/partners/bondex.png"
import metana from "../../img/partners/metana.png"
import shefi from "../../img/partners/shefi.png"
import { breakpoints, theme } from "../../utils/theme"

const Partners = () => {
  return (
    <PartnersContainer>
      <TitlePartnersSection>Partners</TitlePartnersSection>

      <DivVerticalLinePartners />

      <PartnersImgContainer>
        <ImgPartner>
          <img src={bondex} alt="bondex" />
        </ImgPartner>
        <ImgPartner>
          <img src={metana} alt="metana" />
        </ImgPartner>
        <ImgPartner>
          <img src={shefi} alt="shefi" />
        </ImgPartner>
      </PartnersImgContainer>
    </PartnersContainer>
  )
}

const PartnersContainer = styled.div`
  background-color: ${theme.black};
  padding: 60px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (min-width: ${breakpoints.md}) {
    padding: 80px 80px;
  }

  @media (min-width: ${breakpoints.l}) {
    flex-direction: row;
    gap: 0px;
    align-items: stretch;
    padding: 100px 20px;
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

  @media (min-width: ${breakpoints.l}) {
    flex-direction: row;
    gap: 0px;
    align-items: stretch;
    padding: 100px 20px;
  }
`

const ImgPartner = styled.div`
  width: 200px;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export { Partners }
