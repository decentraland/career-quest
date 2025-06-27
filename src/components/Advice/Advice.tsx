import { useState } from "react"
import { adviceData } from "./data"
import { useResizePage } from "../../hooks/useResizePage"
import comment from "../../img/icons/comment.png"
import flower from "../../img/icons/flower.png"
import glitter from "../../img/icons/glitter.png"
import hIcon from "../../img/icons/h-icon.png"
import repeat from "../../img/icons/repeat.png"
import {
  DescriptionLiveTalksContainer,
  DescriptionTextLiveTalks,
  DivVerticalLine,
  IconItemLiveTalks,
  IconsLiveTalksContainer,
  LiveTalksInfoContainer,
  ModalLiveTalksImage,
  SubtitleLiveTalks,
  TitleLiveTalks,
  TitleLiveTalksContainer,
} from "../../shared/common.styled"
import { Modal } from "../Modal"
import {
  AdviceContainer,
  AdviceContainerLeft,
  AdviceContainerRight,
  TalkCardAdvice,
} from "./Advice.styled"

const Advice = () => {
  const { isMobile } = useResizePage({ size: 1200 })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageUrl, setModalImageUrl] = useState("")

  return (
    <>
      <AdviceContainer id="advice">
        {isMobile ? (
          <AdviceInfo />
        ) : (
          <AdviceContainerLeft>
            <AdviceInfo />

            <DivVerticalLine />
          </AdviceContainerLeft>
        )}

        <AdviceContainerRight>
          {adviceData.map((talk, index) => (
            <TalkCardAdvice key={index}>
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
                  {talk.title}
                  {talk.description && `: ${talk.description}`}
                </h3>
                <p style={{ marginTop: "30px" }}>{talk.date}</p>
                <div className="time-card">
                  <p>{talk["time-start"]}</p> | <p>{talk["time-start-p"]}</p>
                </div>
              </div>
            </TalkCardAdvice>
          ))}
        </AdviceContainerRight>
      </AdviceContainer>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalLiveTalksImage src={modalImageUrl} alt="Modal Image" />
      </Modal>
    </>
  )
}

const AdviceInfo = () => {
  return (
    <LiveTalksInfoContainer>
      <TitleLiveTalksContainer>
        <TitleLiveTalks>Advice &</TitleLiveTalks>
        <TitleLiveTalks>Connection</TitleLiveTalks>
      </TitleLiveTalksContainer>

      <SubtitleLiveTalks>
        Gain advice at the Talk Zone (6,88) or connect with recruiters and
        educators in the Expo Zone (-8,74)
      </SubtitleLiveTalks>

      <DescriptionLiveTalksContainer>
        <IconItemLiveTalks>
          <img src={repeat} alt="repeat" />
        </IconItemLiveTalks>

        <DescriptionTextLiveTalks>
          All content will repeat in world starting at Midnight UTC the
          following day
        </DescriptionTextLiveTalks>

        <IconsLiveTalksContainer>
          <IconItemLiveTalks>
            <img src={glitter} alt="glitter" />
          </IconItemLiveTalks>
          <IconItemLiveTalks>
            <img src={flower} alt="flower" />
          </IconItemLiveTalks>
          <IconItemLiveTalks>
            <img src={comment} alt="comment" />
          </IconItemLiveTalks>
          <IconItemLiveTalks>
            <img src={hIcon} alt="h-icon" />
          </IconItemLiveTalks>
        </IconsLiveTalksContainer>
      </DescriptionLiveTalksContainer>
    </LiveTalksInfoContainer>
  )
}

export { Advice }
