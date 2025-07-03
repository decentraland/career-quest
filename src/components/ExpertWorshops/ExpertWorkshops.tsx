import { useState } from "react"
import { expertWorkShopsData } from "./data"
import { useResizePage } from "../../hooks/useResizePage"
import repeat from "../../img/icons/repeat.png"
import {
  DescriptionLiveTalksContainer,
  DivVerticalLine,
  IconItemLiveTalks,
  LiveTalksInfoContainer,
  ModalLiveTalksImage,
  SubtitleLiveTalks,
  TitleLiveTalks,
  TitleLiveTalksContainer,
} from "../../shared/common.styled"
import { Modal } from "../Modal"
import {
  ExpertWorkshopsContainer,
  ExpertWorkshopsContainerLeft,
  ExpertWorkshopsContainerRight,
  TalkCardExpertWorkshops,
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
                <h3>{talk.description2}</h3>
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
        <ModalLiveTalksImage src={modalImageUrl} alt="Modal Image" />
      </Modal>
    </>
  )
}

const WorkshopInfo = () => {
  return (
    <LiveTalksInfoContainer>
      <TitleLiveTalksContainer>
        <TitleLiveTalks>Expert</TitleLiveTalks>
        <TitleLiveTalks>Workshops</TitleLiveTalks>
      </TitleLiveTalksContainer>

      <SubtitleLiveTalks>
        Take part in Decentraland at the Career Quest Talk Zone (6,88)
      </SubtitleLiveTalks>

      <DescriptionLiveTalksContainer>
        <IconItemLiveTalks>
          <img src={repeat} alt="repeat" />
        </IconItemLiveTalks>
      </DescriptionLiveTalksContainer>
    </LiveTalksInfoContainer>
  )
}

export { ExpertWorkshops }
