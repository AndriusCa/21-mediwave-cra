import React from 'react';
import style from "./Main.module.css";
import { Column } from "./Column";
import { TodayTable } from './todayTable/TodayTable';
import { LiaCalendarSolid } from "react-icons/lia";
import { FaRegHospital } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export function Main({ appointmentsData }) {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h1>Overview</h1>
        <div className={style.team}>
          <div className={style.team}>
            <IoMdPerson size="1rem" color="#aaa" />
            <p>Md Rayhan Islam</p>
            <MdOutlineKeyboardArrowDown size="1rem" color="#aaa" />
          </div>
          <div className={style.team}>
            <FaRegHospital />
            <p>Central Clinic, Dhaka</p>
            <MdOutlineKeyboardArrowDown size="1rem" color="#aaa" />
          </div>
          <div className={style.team}>
            <LiaCalendarSolid />
            <p>Todays</p>
            <MdOutlineKeyboardArrowDown size="1rem" color="#aaa" />
          </div>
        </div>
      </div>
      <Column title="Appointments" />
      <Column title="Consultations" />
      <Column title="Cancelled" />
      <Column title="Urgent resolve" />
      <TodayTable appointmentsData={appointmentsData} />
    </main>
  )
};