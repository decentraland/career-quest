import { useState } from "react"
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

  const days = ["April 9", "April 10", "April 11", "April 12"]

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
  switch (activeTab) {
    case 0:
      return (
        <>
          <ScheduleList>
            <ScheduleListItem>
              <span>
                <b>05:00pm UTC 10:00am PST</b>
              </span>
              <span>
                Five Years of Virtual Fashion <b>LIVE TALK</b>
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>06:00pm UTC 11:00am PST</b>
              </span>
              <span>
                Roustan <b>RUNWAY</b>
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>08:00pm UTC 01:00pm PST</b>
              </span>
              <span>
                Virtual Identities <b>LIVE TALK</b>
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>09:00pm UTC 02:00pm PST</b>
              </span>
              <span>
                Winners of The Banners We Wear <b>RUNWAY</b>{" "}
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>10:00pm UTC 03:00pm PST</b>
              </span>
              <span>
                Opening Party with <b>Marc Romboy</b>
              </span>
            </ScheduleListItem>{" "}
          </ScheduleList>
        </>
      )
    case 1:
      return (
        <>
          <ScheduleList>
            <ScheduleListItem>
              <span>
                <b>Midnight UTC 05:00pm PST</b>
              </span>
              <span>Five Years of Virtual Fashion (Repeat Talk)</span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>01:00am UTC 06:00pm PST</b>
              </span>
              <span>
                Winners of The Banners We Wear <b> RUNWAY</b>
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>02:00am UTC 07:00pm PST</b>
              </span>
              <span>Virtual Identities (Repeat Talk)</span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>11:00am UTC 04:00am PST</b>
              </span>
              <span>
                Decentraland Japan <b>RUNWAY</b>{" "}
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>5:00pm UTC 10:00 am PST</b>
              </span>
              <span>
                Gaming x Fashion <b>LIVE TALK</b>
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>6:00pm UTC 11:00 am PST</b>
              </span>
              <span>
                Cyberdog <b>RUNWAY</b>
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>07:00pm UTC Midday PST</b>
              </span>
              <span>The WIP Meetup at MVFW</span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>09:00pm UTC 02:00pm PST</b>
              </span>
              <span>
                Wearables Around The World <b>RUNWAY</b>
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>10:00pm UTC 03:00pm PST</b>
              </span>
              <span>
                Co-creating with AI <b>LIVE TALK</b>
              </span>
            </ScheduleListItem>{" "}
          </ScheduleList>
        </>
      )
    case 2:
      return (
        <>
          <ScheduleList>
            <ScheduleListItem>
              <span>
                <b>Midnight UTC 05:00pm PST</b>
              </span>
              <span>Gaming x Fashion (Repeat Talk)</span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>01:00am UTC 06:00pm PST</b>
              </span>
              <span>
                Cyberdog <b>RUNWAY</b>
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>02:00am UTC 07:00pm PST</b>
              </span>
              <span>Wearables Around The World (Repeat Talk)</span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>03:00am UTC 08:00pm PST</b>
              </span>
              <span>Co-creating with AI (Repeat Talk)</span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>3:00pm UTC 8:00 am PST</b>
              </span>
              <span>
                Avatares y Cultura <b>LIVE TALK</b>
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>05:00pm UTC 10:00am PST</b>
              </span>
              <span>
                Digital Streewtear <b>LIVE TALK</b>
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>06:00pm UTC 11:00am PST</b>
              </span>
              <span>
                Free The Youth <b>RUNWAY</b>
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>07:00pm UTC 12:00pm PST</b>
              </span>
              <span>
                Future Retail <b>LIVE TALK</b>
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>08:00pm UTC 01:00pm PST</b>
              </span>
              <span>Fashion Film Screenings</span>
            </ScheduleListItem>{" "}
          </ScheduleList>
        </>
      )
    case 3:
      return (
        <>
          <ScheduleList>
            <ScheduleListItem>
              <span>
                <b>Midnight UTC 01:00pm PST</b>
              </span>
              <span>Avatares y Cultura (Repeat Talk)</span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>01:00am UTC 06:00pm PST</b>
              </span>
              <span>Digital Streetwear (Repeat Talk)</span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>02:00am UTC 07:00pm PST</b>
              </span>
              <span>
                Free The Youth <b>RUNWAY</b>
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>03:00am UTC 08:00pm PST</b>
              </span>
              <span>Future Retail (Repeat Talk)</span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>04:00am UTC 09:00pm PST</b>
              </span>
              <span>Fashion Film Screenings</span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>5:00pm UTC 10:00am PST</b>
              </span>
              <span>
                Cyberdog <b>RUNWAY</b>
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>06:00pm UTC 11:00pm PST</b>
              </span>
              <span>
                Free The Youth <b>RUNWAY</b>{" "}
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>07:00pm UTC 12:00pm PST</b>
              </span>
              <span>
                The Banners We Wear <b>RUNWAY</b>{" "}
              </span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>08:00pm UTC 05:00pm PST</b>
              </span>
              <span>Fashion Film Screenings</span>
            </ScheduleListItem>{" "}
            <ScheduleListItem>
              <span>
                <b>Midnight 5:00pm PST</b>
              </span>
              <span>
                Closing Party with <b>Coppola</b>
              </span>
            </ScheduleListItem>{" "}
          </ScheduleList>
        </>
      )
  }
}

export { ScheduleTabs }
