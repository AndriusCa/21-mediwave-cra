import React from 'react';
import style from "./Main.module.css";
import { Column } from "./Column";
import { TodayTable } from './TodayTable';



export function Main({ appointmentsData }) {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h1>Overview</h1>
        <div className={style.team}>
          <img src="/" alt="md rayhan islam" />
          <img src="/" alt="central clinic, dhaka" />
          <img src="/" alt="todays" />
        </div>
      </div>
      <Column className={style.appoint} title="Appointments" />
      <Column title="Consultations" />
      <Column title="Cancelled" />
      <Column title="Urgent resolve" />
      <TodayTable appointmentsData={appointmentsData} />
    </main>
  )
};