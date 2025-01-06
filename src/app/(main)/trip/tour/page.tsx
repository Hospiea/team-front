"use client";
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const TourPage = () => {

  return(
    <div>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: 'event 1', date: '2025-01-03' },
          { title: 'event 2', date: '2025-01-08' }
        ]}
      />
    </div>
  )
}

export default TourPage;