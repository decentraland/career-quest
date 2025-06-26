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
  switch (activeTab) {
    case 0:
      return (
        <ScheduleList>
          <ScheduleListItem>
            <div>
              <span className="first-span">11:00am UTC</span>

              <span className="first-span">04:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              11:00am UTC 04:00am PST
            </span>

            <span className="second-span">
              The 101 on Decentraland Career Quest: Win a Career-Changing
              Bootcamp!
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">Midday UTC</span>

              <span className="first-span">05:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              Midday UTC 05:00am PST
            </span>

            <span className="second-span">
              Web3 Jobs Decoded: Where the Opportunities Are in 2025
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">01:00pm UTC</span>

              <span className="first-span">06:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              01:00pm UTC 06:00am PST
            </span>

            <span className="second-span">
              Careers in <b>Product Management</b>: What I Wish I’d Known
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">02:00pm UTC</span>

              <span className="first-span">07:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              02:00pm UTC 07:00am PST
            </span>

            <span className="second-span">
              Resume Skills for Web3: How to Build a CV That Gets Attention
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">03:00pm UTC</span>

              <span className="first-span">08:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              03:00pm UTC 08:00am PST
            </span>

            <span className="second-span">
              Careers in <b>Dev Rel & Support</b>: What I Wish I’d Known
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">04:00pm UTC</span>

              <span className="first-span">09:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              04:00pm UTC 09:00am PST
            </span>

            <span className="second-span">
              Web3 Knowledge <b>Tournament</b>
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">09:00pm UTC</span>

              <span className="first-span">04:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              09:00pm UTC 04:00am PST
            </span>

            <span className="second-span">
              Ghosted Again? How to Handle Rejection in Web3 Job Hunting
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">10:00pm UTC</span>

              <span className="first-span">04:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              10:00pm UTC 04:00am PST
            </span>

            <span className="second-span">
              Pitch Yourself in Web3: How to Stand Out to Startups, Protocols &
              Recruiters
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">11:00pm UTC</span>

              <span className="first-span">04:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              11:00pm UTC 04:00am PST
            </span>

            <span className="second-span">
              Careers in <b>Marketing</b>: What I Wish I’d Known
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">Midnight UTC</span>

              <span className="first-span">04:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              Midnight UTC 04:00am PST
            </span>

            <span className="second-span">
              Meet the Teams from web3.career & Decentraland Foundation
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">01:00am UTC</span>

              <span className="first-span">04:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              01:00am UTC 04:00am PST
            </span>

            <span className="second-span">
              Careers in <b>Community Building</b>: What I Wish I’d Known
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">02:00am UTC</span>

              <span className="first-span">04:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              02:00am UTC 04:00am PST
            </span>

            <span className="second-span">
              Web3 Knowledge <b>Tournament</b>
            </span>
          </ScheduleListItem>
        </ScheduleList>
      )
    case 1:
      return (
        <ScheduleList>
          <ScheduleListItem>
            <div>
              <span className="first-span">Midday UTC</span>

              <span className="first-span">05:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              Midday UTC 05:00am PST
            </span>

            <span className="second-span">
              Pitch Yourself in Web3: How to Stand Out to Startups, Protocols &
              Recruiters
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">01:00pm UTC</span>

              <span className="first-span">06:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              01:00pm UTC 06:00am PST
            </span>

            <span className="second-span">
              Careers in <b>Marketing</b>: What I Wish I’d Known
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">02:00pm UTC</span>

              <span className="first-span">07:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              02:00pm UTC 07:00am PST
            </span>

            <span className="second-span">
              Meet the Team from <b>Metana & Decentraland Foundation</b>
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">03:00pm UTC</span>

              <span className="first-span">08:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              03:00pm UTC 08:00am PST
            </span>

            <span className="second-span">
              Careers in <b>Community Building</b>: What I Wish I’d Known
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">04:00pm UTC</span>

              <span className="first-span">09:00 am PST</span>
            </div>

            <span className="first-span tablet-span">
              04:00pm UTC 09:00 am PST
            </span>

            <span className="second-span">
              Web3 Knowledge <b>Tournament</b>
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">09:00pm UTC</span>

              <span className="first-span">04:00 am PST</span>
            </div>

            <span className="first-span tablet-span">
              04:00pm UTC 04:00 am PST
            </span>

            <span className="second-span">
              Careers in <b>Virtual Worlds</b>: What I Wish I’d Known
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">10:00pm UTC</span>

              <span className="first-span">04:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              09:00pm UTC 04:00am PST
            </span>

            <span className="second-span">
              Web3 Jobs Decoded: Where the Opportunities Are in 2025
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">11:00pm UTC</span>

              <span className="first-span">04:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              11:00pm UTC 04:00am PST
            </span>

            <span className="second-span">
              Careers in <b>Product Management</b>: What I Wish I’d Known
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">Midnight UTC</span>

              <span className="first-span">04:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              Midnight UTC 04:00am PST
            </span>

            <span className="second-span">
              Resume Skills for Web3: How to Build a CV That Gets Attention
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">01:00am UTC</span>

              <span className="first-span">04:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              01:00am UTC 04:00am PST
            </span>

            <span className="second-span">
              Careers in <b>Dev Rel & Support</b>: What I Wish I’d Known
            </span>
          </ScheduleListItem>

          <ScheduleListItem>
            <div>
              <span className="first-span">02:00am UTC</span>

              <span className="first-span">04:00am PST</span>
            </div>

            <span className="first-span tablet-span">
              02:00am UTC 04:00am PST
            </span>

            <span className="second-span">
              Web3 Knowledge <b>Tournament</b>
            </span>
          </ScheduleListItem>
        </ScheduleList>
      )
  }
}

export { ScheduleTabs }
