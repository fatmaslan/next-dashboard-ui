"use client"
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import { calendarEvents } from "../lib/data";


const localizer = momentLocalizer(moment);
const BigCalendar = () => {
    

    const [view, setView] = useState<View>(Views.WORK_WEEK);

    const handleOnChangeView = (selectedView: View) => {
      setView(selectedView);
    }
  return (
    <Calendar
    localizer={localizer}
    events={calendarEvents}
    startAccessor="start"
    endAccessor="end"
    views={[Views.WORK_WEEK, Views.DAY]}
    view={view}
    style={{ height: "98%" }}
    onView={handleOnChangeView}
    min={new Date(2025, 7, 1, 8, 0, 0)}
    max={new Date(2025, 11, 31, 17, 0, 0)}
  />
 
  )
}

export default BigCalendar;
