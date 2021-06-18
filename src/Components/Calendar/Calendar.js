import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import {Link} from "react-router-dom";
import timeGridPlugin from '@fullcalendar/timegrid';

function Calendar (){

  const handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            })
        }
    }

    const confirm = ()=>{

    }

  const handleEventClick = (clickInfo) => {
        if (confirm
        (`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove()
        }
    }


    return(
        <>
     <FullCalendar
         headerToolbar={{
             left: 'prev,next today',
             center: 'title',
             right: 'dayGridMonth,timeGridWeek,timeGridDay'
         }}
         plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
         initialView="dayGridMonth"
         weekends={true}
         editable={true}
         selectable={true}
         selectMirror={true}
         dayMaxEvents={true}
         select={handleDateSelect}
         eventClick={handleEventClick}
     />
     <br/>
            <Link to="/apidata" className="Link">Register a new Account</Link>
        </>
    )
}

export default Calendar;
