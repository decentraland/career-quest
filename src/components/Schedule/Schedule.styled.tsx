import { styled } from "styled-components"
import scheduleBg from "../../img/misc/schedule.png"

const ScheduleSectionContainer = styled.section`
  width: 100%;
  height: 100%;
  background-image: url(${scheduleBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-block: 48px;
  padding-inline: 24px;
  background-size: cover;

  @media (min-width: 1268px) {
    background-position: -200px -100px;
  }

  > div.schedule-container {
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 40px;
      font-weight: 400;
      color: #ebecfa;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      padding-right: 24px;
      padding-bottom: 24px;
      font-weight: 700;
      text-align: right;
      letter-spacing: 0.05em;

      span {
        &:first-child {
          font-size: 32px;
          text-align: right;
          font-weight: 600;
        }
      }

      @media (max-width: 568px) {
        display: none;
      }

      // @media (min-width: 1024px) {
      //   width: 270px;
      // }
    }

    > ul {
      padding: 4px 52px;
      margin: 0;
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      border-left: 2px solid #ebecfa;
      max-width: 678px;

      li {
        font-size: 22px;
        font-weight: 500;
        letter-spacing: 0.08em;
        color: #ebecfa;
        margin-bottom: 8px;

        b {
          font-weight: 900;
        }
      }

      @media (max-width: 568px) {
        margin-inline: auto;
      }
    }
  }

  > div.schedule-tabs-section-container {
    margin-top: 24px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    max-width: 1200px;
    margin-inline: auto;
    gap: 24px;
    position: relative;

    > div.schedule-tabs-container {
      // padding-left: 24px;
      // border-left: 2px solid #ebecfa;

      @media (max-width: 1024px) {
        padding-left: 0;
        border-left: none;
      }
    }
  }

  div.schedule-tabs-section-left {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
    height: 100%;
    border-right: 2px solid #ebecfa;
    padding-right: 24px;
    h3 {
      font-size: 32px;
      font-weight: 900;
      color: #ebecfa;
      letter-spacing: 0.05em;
    }

    .download-btn-container {
      margin-top: auto !important;
    }

    @media (max-width: 1024px) {
      display: none;
    }
  }

  > div.download-btn-container {
    margin-top: 24px;
    max-width: 400px;
    margin-inline: auto;

    @media (min-width: 568px) {
      display: none;
    }
  }
`

const TabsScheduleContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  max-width: 678px;
`

const TabsScheduleList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: -4px;
  z-index: 0;

  @media (max-width: 568px) {
    justify-content: flex-start;
    flex-direction: row;
    gap: 0;
  }
`

const TabScheduleButton = styled.button<{ $isActive: boolean }>`
  padding: 12px;
  background-color: ${({ $isActive }) =>
    $isActive ? "#ebecfa" : "rgba(15, 20, 23, 0.8)"};
  color: ${({ $isActive }) => ($isActive ? "#0F1417" : "#EBECFA")};
  border: none;
  border-radius: 12px 12px 0 0;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  transition: all 0.3s ease;
  border: 2px solid rgba(235, 236, 250, 1);
  width: 100%;

  &.tabButton {
    &:hover {
      background-color: ${({ $isActive }) =>
        $isActive ? "#ebecfa" : "rgba(35, 40, 43, 0.8)"};
      color: ${({ $isActive }) => ($isActive ? "#0F1417" : "#FFFFFF")};
      transition: all 0.3s ease;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 568px) {
    padding: 8px;
    font-size: 16px;
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 150px;
  }
`

const TabScheduleContent = styled.div`
  background-color: rgba(15, 19, 23, 1);
  border-radius: 0 0px 12px 12px;
  padding: 24px;
  color: #ebecfa;
  border: 2px solid rgba(235, 236, 250, 1);
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  flex-wrap: wrap;

  @media (max-width: 568px) {
    padding: 16px;
  }
`

const ScheduleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  flex-wrap: wrap;
  letter-spacing: 0.02em;
`

const ScheduleListItem = styled.li`
  font-size: 18px;
  font-weight: 400;
  color: #ebecfa;
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;

  span {
    &:first-child {
      font-weight: 700;
      font-size: 14px;
      flex: 1;
      opacity: 0.8;
    }

    &:last-child {
      font-weight: 400;
      font-size: 16px;
      flex: 2;
    }
  }
`

export {
  ScheduleSectionContainer,
  TabsScheduleContainer,
  TabsScheduleList,
  TabScheduleButton,
  TabScheduleContent,
  ScheduleList,
  ScheduleListItem,
}
