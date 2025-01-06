"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styles from "./style.module.css";

const TourPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.calendar}>
        {/* <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: "event 1", date: "2025-01-03" },
            { title: "event 2", date: "2025-01-08" },
          ]}
        /> */}
      </div>
    </div>
  );
};

export default TourPage;
