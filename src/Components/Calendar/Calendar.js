import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import {Link} from "react-router-dom";

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
     <br/>
            <Link to="/apidata" className="Link">Register a new Account</Link>
        </>
    )
}

export default Calendar;
