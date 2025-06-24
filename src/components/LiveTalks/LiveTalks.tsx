import { useState } from "react"
import { liveTalksData } from "./data"
import { useResizePage } from "../../hooks/useResizePage"
import { DivVerticalLine } from "../About/About.styled"
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

    //     <>
    //       <LiveTalksContainer id="talks">
    //         <div className="live-talks-header">
    //           <h2>Insider Career Talks</h2>
    //           <h5>
    //             All talks will be live-streamed in{" "}
    //             <a
    //               href="https://decentraland.org/"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               Decentraland
    //             </a>
    //             ,{" "}
    //             <a
    //               href="https://x.com/decentraland
    // "
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               X
    //             </a>
    //             ,{" "}
    //             <a
    //               href="https://www.youtube.com/@decentraland_foundation"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               YouTube
    //             </a>{" "}
    //             and{" "}
    //             <a
    //               href="https://www.linkedin.com/company/decentralandorg"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               LinkedIn
    //             </a>
    //           </h5>
    //           <div className="header-desktop">
    //             <img src={iconTalksSingle} alt="Talks Single" />
    //             <p>
    //               All content will repeat in world starting at Midnight UTC the
    //               following day
    //             </p>
    //             <div className="header-desktop-icons">
    //               <img src={iconsTalks} alt="LinkedIn" />
    //             </div>
    //             <JumpInBtn />
    //           </div>
    //         </div>
    //         <TalksGrid>
    //           {liveTalksData.map((talk, index) => (
    //             <TalkCard key={index}>
    //               <img
    //                 src={talk.image}
    //                 alt={talk.title}
    //                 onClick={() => {
    //                   setIsModalOpen(true)
    //                   setModalImageUrl(talk.image)
    //                 }}
    //               />
    //               <h3>{talk.title}:</h3>
    //               <p>{talk.description}</p>
    //               <p>{talk.date}</p>
    //               <TimeInfoTalk>
    //                 <TalkTime>{talk["time-start"]}</TalkTime>
    //                 <TalkTime>{talk["time-start-p"]}</TalkTime>
    //                 {/* <TalkTime>{talk["time-end"]}</TalkTime> */}
    //               </TimeInfoTalk>
    //             </TalkCard>
    //           ))}
    //         </TalksGrid>
    //       </LiveTalksContainer>
    //       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
    //         <ModalTalkImage src={modalImageUrl} alt="Modal Image" />
    //       </Modal>
    //     </>
  )
}

export { LiveTalks }
