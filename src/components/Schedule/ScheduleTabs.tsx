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

  const days = ["DAY 1", "DAY 2", "DAY 3", "DAY 4"]

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
        <ScheduleList>
          <ScheduleListItem>
            <div>
              <span className="first-span">05:00pm UTC</span>

              <span className="first-span">10:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              05:00pm UTC 10:00am PST
            </span>

            <span className="second-span">
              Five Years of Virtual Fashion <b>LIVE TALK</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">06:00pm UTC</span>

              <span className="first-span">11:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              06:00pm UTC 11:00am PST
            </span>

            <span className="second-span">
              Roustan <b>RUNWAY</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">08:00pm UTC</span>

              <span className="first-span">01:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              08:00pm UTC 01:00pm PST
            </span>

            <span className="second-span">
              Virtual Identities <b>LIVE TALK</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">09:00pm UTC</span>

              <span className="first-span">02:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              09:00pm UTC 02:00pm PST
            </span>

            <span className="second-span">
              Winners of The Banners We Wear <b>RUNWAY</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">10:00pm UTC</span>

              <span className="first-span">03:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              10:00pm UTC 03:00pm PST
            </span>

            <span className="second-span">
              Opening Party with <b>Marc Romboy</b>
            </span>
          </ScheduleListItem>
        </ScheduleList>
      )
    case 1:
      return (
        <ScheduleList>
          <ScheduleListItem>
            <div>
              <span className="first-span">Midnight UTC</span>

              <span className="first-span">05:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              Midnight UTC 05:00pm PST
            </span>

            <span className="second-span">
              Five Years of Virtual Fashion (Repeat Talk)
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">01:00am UTC</span>

              <span className="first-span">06:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              01:00am UTC 06:00pm PST
            </span>

            <span className="second-span">
              Winners of The Banners We Wear <b> RUNWAY</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">02:00am UTC</span>

              <span className="first-span">07:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              02:00am UTC 07:00pm PST
            </span>

            <span className="second-span">
              Virtual Identities (Repeat Talk)
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">11:00am UTC</span>

              <span className="first-span">04:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              11:00am UTC 04:00am PST
            </span>

            <span className="second-span">
              Decentraland Japan <b>RUNWAY</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">05:00pm UTC</span>

              <span className="first-span">10:00 am PST</span>
            </div>

            <span className="first-span tablet-span">
              05:00pm UTC 10:00 am PST
            </span>

            <span className="second-span">
              Gaming x Fashion <b>LIVE TALK</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">06:00pm UTC</span>

              <span className="first-span">11:00 am PST</span>
            </div>

            <span className="first-span tablet-span">
              06:00pm UTC 11:00 am PST
            </span>

            <span className="second-span">
              Cyberdog <b>RUNWAY</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">07:00pm UTC</span>

              <span className="first-span">Midday PST</span>
            </div>

            <span className="first-span tablet-span">
              07:00pm UTC Midday PST
            </span>

            <span className="second-span">The WIP Meetup at MVFW</span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">09:00pm UTC</span>

              <span className="first-span">02:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              09:00pm UTC 02:00pm PST
            </span>

            <span className="second-span">
              Wearables Around The World <b>RUNWAY</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">10:00pm UTC</span>

              <span className="first-span">03:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              10:00pm UTC 03:00pm PST
            </span>

            <span className="second-span">
              Co-creating with AI <b>LIVE TALK</b>
            </span>
          </ScheduleListItem>
        </ScheduleList>
      )
    case 2:
      return (
        <ScheduleList>
          <ScheduleListItem>
            <div>
              <span className="first-span">Midnight UTC</span>

              <span className="first-span">05:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              01:00am UTC 06:00pm PST
            </span>

            <span className="second-span">Gaming x Fashion (Repeat Talk)</span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">01:00am UTC</span>

              <span className="first-span">06:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              02:00am UTC 07:00pm PST
            </span>

            <span className="second-span">
              Cyberdog <b>RUNWAY</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">02:00am UTC</span>

              <span className="first-span">07:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              03:00am UTC 08:00pm PST
            </span>

            <span className="second-span">
              Wearables Around The World (Repeat Talk)
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">03:00am UTC</span>

              <span className="first-span">08:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              3:00pm UTC 8:00 am PST
            </span>

            <span className="second-span">
              Co-creating with AI (Repeat Talk)
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">3:00pm UTC</span>

              <span className="first-span">8:00 am PST</span>
            </div>

            <span className="second-span">
              Avatares y Cultura <b>LIVE TALK</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">05:00pm UTC</span>

              <span className="first-span">10:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              05:00pm UTC 10:00am PST
            </span>

            <span className="second-span">
              Digital Streewtear <b>LIVE TALK</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">06:00pm UTC</span>

              <span className="first-span">11:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              06:00pm UTC 11:00am PST
            </span>

            <span className="second-span">
              Free The Youth <b>RUNWAY</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">07:00pm UTC</span>

              <span className="first-span">12:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              07:00pm UTC 12:00pm PST
            </span>

            <span className="second-span">
              Future Retail <b>LIVE TALK</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">08:00pm UTC</span>

              <span className="first-span">01:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              08:00pm UTC 01:00pm PST
            </span>

            <span className="second-span">Fashion Film Screenings</span>
          </ScheduleListItem>
        </ScheduleList>
      )
    case 3:
      return (
        <ScheduleList>
          <ScheduleListItem>
            <div>
              <span className="first-span">Midnight UTC</span>

              <span className="first-span">01:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              Midnight UTC 01:00pm PST
            </span>

            <span className="second-span">
              Avatares y Cultura (Repeat Talk)
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">01:00am UTC</span>

              <span className="first-span">06:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              01:00am UTC 06:00pm PST
            </span>

            <span className="second-span">
              Digital Streetwear (Repeat Talk)
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">02:00am UTC</span>

              <span className="first-span">07:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              02:00am UTC 07:00pm PST
            </span>

            <span className="second-span">
              Free The Youth <b>RUNWAY</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">03:00am UTC</span>

              <span className="first-span">08:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              03:00am UTC 08:00pm PST
            </span>

            <span className="second-span">Future Retail (Repeat Talk)</span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">04:00am UTC</span>

              <span className="first-span">09:00pm PST</span>
            </div>

            <span className="second-span">Fashion Film Screenings</span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">05:00pm UTC</span>

              <span className="first-span">10:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              05:00pm UTC 10:00am PST
            </span>

            <span className="second-span">
              Cyberdog <b>RUNWAY</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">06:00pm UTC</span>

              <span className="first-span">11:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              06:00pm UTC 11:00pm PST
            </span>

            <span className="second-span">
              Free The Youth <b>RUNWAY</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">07:00pm UTC</span>

              <span className="first-span">12:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              07:00pm UTC 12:00pm PST
            </span>

            <span className="second-span">
              The Banners We Wear <b>RUNWAY</b>
            </span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">08:00pm UTC</span>

              <span className="first-span">05:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              08:00pm UTC 05:00pm PST
            </span>

            <span className="second-span">Fashion Film Screenings</span>
          </ScheduleListItem>
          <ScheduleListItem>
            <div>
              <span className="first-span">Midnight UTC</span>

              <span className="first-span">5:00pm PST</span>
            </div>

            <span className="first-span tablet-span">
              Midnight UTC 5:00pm PST
            </span>

            <span className="second-span">
              Closing Party with <b>Coppola</b>
            </span>
          </ScheduleListItem>
        </ScheduleList>
      )
  }
}

export { ScheduleTabs }
