import { useState } from "react"
import { expertWorkShopsData } from "./data"
import { useResizePage } from "../../hooks/useResizePage"
import comment from "../../img/icons/comment.png"
import flower from "../../img/icons/flower.png"
import glitter from "../../img/icons/glitter.png"
import hIcon from "../../img/icons/h-icon.png"
import repeat from "../../img/icons/repeat.png"
import {
  DescriptionContainer,
  DescriptionText,
  DivVerticalLine,
  IconItem,
  IconsContainer,
} from "../../shared/common.styled"
import { Modal } from "../Modal"
import {
  ExpertWorkshopInfoContainer,
  ExpertWorkshopsContainer,
  ExpertWorkshopsContainerLeft,
  ExpertWorkshopsContainerRight,
  ModalExpertWorkshopsImage,
  SubtitleExpertWorkshops,
  TalkCardExpertWorkshops,
  TitleExpertWorkshops,
  TitleExpertWorkshopsContainer,
} from "./ExpertWorkshops.styled"

const ExpertWorkshops = () => {
  const { isMobile } = useResizePage({ size: 1200 })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageUrl, setModalImageUrl] = useState("")

  return (
    <>
      <ExpertWorkshopsContainer id="workshops">
        {isMobile ? (
          <WorkshopInfo />
        ) : (
          <ExpertWorkshopsContainerLeft>
            <WorkshopInfo />

            <DivVerticalLine />
          </ExpertWorkshopsContainerLeft>
        )}

        <ExpertWorkshopsContainerRight>
          {expertWorkShopsData.map((talk, index) => (
            <TalkCardExpertWorkshops key={index}>
              <img
                src={talk.image}
                alt={talk.title}
                onClick={() => {
                  setIsModalOpen(true)
                  setModalImageUrl(talk.image)
                }}
              />
              <div className="info-card">
                <h3>
                  {talk.title}: {talk.description}
                </h3>
                <p style={{ marginTop: "30px" }}>{talk.date}</p>
                <div className="time-card">
                  <p>{talk["time-start"]}</p> | <p>{talk["time-start-p"]}</p>
                </div>
              </div>
            </TalkCardExpertWorkshops>
          ))}
        </ExpertWorkshopsContainerRight>
      </ExpertWorkshopsContainer>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalExpertWorkshopsImage src={modalImageUrl} alt="Modal Image" />
      </Modal>
    </>
  )
}

const WorkshopInfo = () => {
  return (
    <ExpertWorkshopInfoContainer>
      <TitleExpertWorkshopsContainer>
        <TitleExpertWorkshops>Expert</TitleExpertWorkshops>
        <TitleExpertWorkshops>Workshops</TitleExpertWorkshops>
      </TitleExpertWorkshopsContainer>

      <SubtitleExpertWorkshops>
        Take part in Decentraland at the Career Quest Talk Zone (6,88)
      </SubtitleExpertWorkshops>

      <DescriptionContainer>
        <IconItem>
          <img src={repeat} alt="repeat" />
        </IconItem>

        <DescriptionText>
          All content will repeat in world starting at Midnight UTC the
          following day
        </DescriptionText>

        <IconsContainer>
          <IconItem>
            <img src={glitter} alt="glitter" />
          </IconItem>
          <IconItem>
            <img src={flower} alt="flower" />
          </IconItem>
          <IconItem>
            <img src={comment} alt="comment" />
          </IconItem>
          <IconItem>
            <img src={hIcon} alt="h-icon" />
          </IconItem>
        </IconsContainer>
      </DescriptionContainer>
    </ExpertWorkshopInfoContainer>
  )
}

export { ExpertWorkshops }
