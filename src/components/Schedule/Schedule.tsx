import { ScheduleTabs } from "./ScheduleTabs"
import { JumpInBtn } from "../JumpInBtn/JumpInBtn"
import { ScheduleSectionContainer } from "./Schedule.styled"

const Schedule = () => {
  return (
    <ScheduleSectionContainer id="schedule">
      <div className="schedule-container">
        <h2>
          <span>Enter</span> <span>Decentraland</span> <span>APRIL 9 - 12</span>
        </h2>
        <ul className="schedule-list">
          <li>
            Experience <b>4</b> days of exclusive fashion and 8 live VIP talks
          </li>
          <li>
            Be front row for <b>6</b> iconic runway shows
          </li>
          <li>
            Explore <b>16</b> designer showrooms
          </li>
          <li>
            Claim <b>22+</b> free digital fashion collectibles
          </li>
        </ul>
      </div>
      <div className="schedule-tabs-section-container">
        <div className="schedule-tabs-section-left">
          <h3>Schedule</h3>
          <span className="download-btn-container">
            <JumpInBtn />
          </span>
        </div>
        <div className="schedule-tabs-container">
          <ScheduleTabs />
        </div>
      </div>
      <div className="download-btn-container">
        <JumpInBtn />
      </div>
    </ScheduleSectionContainer>
  )
}

export { Schedule }
