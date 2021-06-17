import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar (){
    const handlDateClick=(dateClickInfo:any )=>{
console.log(dateClickInfo.dateStr);
alert(dateClickInfo.dateStr);
    }
    return(
        <>
     <FullCalendar
     plugins={[dayGridPlugin, interactionPlugin]}
     dateClick={handlDateClick}
     />
        </>
    )
}

export default Calendar;
