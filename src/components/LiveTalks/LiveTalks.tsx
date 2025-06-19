import { useState } from "react"
import { liveTalksData } from "./data"
import iconsTalks from "../../img/vectors/logos-talks.svg?url"
import iconTalksSingle from "../../img/vectors/talksico.svg?url"
import { JumpInBtn } from "../JumpInBtn/JumpInBtn"
import { Modal } from "../Modal"
import {
  LiveTalksContainer,
  ModalTalkImage,
  TalkCard,
  TalkTime,
  TalksGrid,
  TimeInfoTalk,
} from "./LiveTalks.styled"

const LiveTalks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageUrl, setModalImageUrl] = useState("")

  return (
    <>
      <LiveTalksContainer id="talks">
        <div className="live-talks-header">
          <h2>Insider Career Talks</h2>
          <h5>
            All talks will be live-streamed in{" "}
            <a
              href="https://decentraland.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Decentraland
            </a>
            ,{" "}
            <a
              href="https://x.com/decentraland
"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/@decentraland_foundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/company/decentralandorg"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </h5>
          <div className="header-desktop">
            <img src={iconTalksSingle} alt="Talks Single" />
            <p>
              All content will repeat in world starting at Midnight UTC the
              following day
            </p>
            <div className="header-desktop-icons">
              <img src={iconsTalks} alt="LinkedIn" />
            </div>
            <JumpInBtn />
          </div>
        </div>
        <TalksGrid>
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
              <h3>{talk.title}:</h3>
              <p>{talk.description}</p>
              <p>{talk.date}</p>
              <TimeInfoTalk>
                <TalkTime>{talk["time-start"]}</TalkTime>
                <TalkTime>{talk["time-start-p"]}</TalkTime>
                {/* <TalkTime>{talk["time-end"]}</TalkTime> */}
              </TimeInfoTalk>
            </TalkCard>
          ))}
        </TalksGrid>
      </LiveTalksContainer>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalTalkImage src={modalImageUrl} alt="Modal Image" />
      </Modal>
    </>
  )
}

export { LiveTalks }
