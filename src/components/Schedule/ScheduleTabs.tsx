import { useState } from "react"
import { dayOne, dayTwo } from "./data"
import {
  ScheduleList,
  ScheduleListItem,
  TabScheduleButton,
  TabScheduleContent,
  TabsScheduleContainer,
  TabsScheduleList,
} from "./Schedule.styled"

const ScheduleTabs = () => {
  const [activeTab, setActiveTab] = useState(0)

  const days = ["DAY 1", "DAY 2"]

  return (
    <TabsScheduleContainer>
      <TabsScheduleList>
        {days.map((day, index) => (
          <TabScheduleButton
            key={day}
            onClick={() => setActiveTab(index)}
            $isActive={activeTab === index}
            className={"tabButton"}
          >
            {day}
          </TabScheduleButton>
        ))}
      </TabsScheduleList>

      <TabScheduleContent>{renderContent(activeTab)}</TabScheduleContent>
    </TabsScheduleContainer>
  )
}

const renderContent = (activeTab: number) => {
  const scheduleData = activeTab === 0 ? dayOne : dayTwo

  return (
    <ScheduleList>
      {scheduleData.map((item, index) => (
        <ScheduleListItem key={index}>
          <div>
            <span className="first-span">{item.dateUTC}</span>
            <span className="first-span">{item.datePST}</span>
          </div>

          <span className="first-span tablet-span">
            {item.dateUTC} {item.datePST}
          </span>

          <span
            className="second-span"
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
        </ScheduleListItem>
      ))}
    </ScheduleList>
  )
}

export { ScheduleTabs }
