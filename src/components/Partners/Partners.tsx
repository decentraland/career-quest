import { useResizePage } from "../../hooks/useResizePage"
import comment from "../../img/icons/comment.png"
import flower from "../../img/icons/flower.png"
import glitter from "../../img/icons/glitter.png"
import hIcon from "../../img/icons/h-icon.png"
import bondex from "../../img/partners/bondex.png"
import metana from "../../img/partners/metana.png"
import shefi from "../../img/partners/shefi.png"
import { DivVerticalLine } from "../../shared/common.styled"
import {
  ImgPartner,
  PartnerContainerLeft,
  PartnerContainerRight,
  PartnersContainer,
  SocialMediaContainer,
  SocialMediaItem,
  TitlePartnersSection,
} from "./Partners.styled"

const Partners = () => {
  const { isMobile } = useResizePage({ size: 992 })

  return (
    <PartnersContainer>
      {isMobile ? (
        <TitlePartnersSection>Partners</TitlePartnersSection>
      ) : (
        <PartnerContainerLeft>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <TitlePartnersSection>Partners</TitlePartnersSection>

            <SocialMediaContainer>
              <SocialMediaItem>
                <img src={glitter} alt="glitter" />
              </SocialMediaItem>
              <SocialMediaItem>
                <img src={flower} alt="flower" />
              </SocialMediaItem>
              <SocialMediaItem>
                <img src={comment} alt="comment" />
              </SocialMediaItem>
              <SocialMediaItem>
                <img src={hIcon} alt="h-icon" />
              </SocialMediaItem>
            </SocialMediaContainer>
          </div>
          <DivVerticalLine />
        </PartnerContainerLeft>
      )}

      <PartnerContainerRight>
        <ImgPartner>
          <img src={bondex} alt="bondex" />
        </ImgPartner>
        <ImgPartner>
          <img src={shefi} alt="shefi" />
        </ImgPartner>
        <ImgPartner>
          <img src={metana} alt="metana" />
        </ImgPartner>
      </PartnerContainerRight>
    </PartnersContainer>
  )
}

export { Partners }
