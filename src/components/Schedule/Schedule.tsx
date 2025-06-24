import { ScheduleTabs } from "./ScheduleTabs"
import { useResizePage } from "../../hooks/useResizePage"
import { DivVerticalLine } from "../About/About.styled"
import { JumpInBtn } from "../JumpInBtn/JumpInBtn"
import { ScheduleContainer, TitleSchedule } from "./Schedule.styled"

const Schedule = () => {
  const { isMobile } = useResizePage({ size: 992 })

  return (
    <ScheduleContainer id="schedule">
      {isMobile ? (
        <ScheduleTabs />
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <TitleSchedule>Schedule</TitleSchedule>

            <JumpInBtn />
          </div>

          <DivVerticalLine />

          <ScheduleTabs />
        </>
      )}
    </ScheduleContainer>
  )
}

export { Schedule }
