import { useState } from "react"
import { liveTalksData } from "./data"
import { useResizePage } from "../../hooks/useResizePage"
import { DivVerticalLine } from "../../shared/common.styled"
import { Modal } from "../Modal"
import {
  LiveTalksCardsContainer,
  LiveTalksContainer,
  LiveTalksTitle,
  LiveTalksTitleContainer,
  ModalTalkImage,
  TalkCard,
} from "./LiveTalks.styled"

const LiveTalks = () => {
  const { isMobile } = useResizePage({ size: 992 })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageUrl, setModalImageUrl] = useState("")

  return (
    <>
      <LiveTalksContainer>
        {isMobile ? (
          <LiveTalksTitle>Launch your Web3 Career</LiveTalksTitle>
        ) : (
          <>
            <LiveTalksTitleContainer>
              <LiveTalksTitle>Insider Career Talks</LiveTalksTitle>
              <p>
                All talks will be live-streamed in Decentraland, X, Youtube and
                Linkedin
              </p>
            </LiveTalksTitleContainer>

            <DivVerticalLine />
          </>
        )}

        <LiveTalksCardsContainer>
          {liveTalksData.map((talk, index) => (
            <TalkCard key={index}>
              <img
                src={talk.image}
                alt={talk.title}
                onClick={() => {
                  setIsModalOpen(true)
                  setModalImageUrl(talk.image)
                }}
              />
              <h3>
                {talk.title}: <span>{talk.description}</span>
              </h3>
              <p>{talk.date}</p>
              <div>
                <p>{talk["time-start"]}</p>
                <p>{talk["time-start-p"]}</p>
              </div>
            </TalkCard>
          ))}
        </LiveTalksCardsContainer>
      </LiveTalksContainer>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalTalkImage src={modalImageUrl} alt="Modal Image" />
      </Modal>
    </>
  )
}

export { LiveTalks }
