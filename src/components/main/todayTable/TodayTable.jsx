import React from 'react';
import style from './TodayTable.module.css';
import { BsGrid3X3GapFill } from "react-icons/bs";
import { TiThList } from "react-icons/ti";
import { Button } from "../button/Button";

export function TodayTable({ appointmentsData }) {
  
  return (
    <div className={style.wholeTable}>
      <div className={style.tableTop}>
        <p>Todays</p>
        <p>Appointments</p>
        <button className={style.tableTopButton}>
          <TiThList size="1.5rem" color="grey" />
          <BsGrid3X3GapFill size="1.5rem" color="grey" />
        </button>
      </div>
      <table className={`${style.header} ${style.tableWithGap}`}>
        <tr>
          <td>Name</td>
          <td>Status</td>
          <td>Date</td>
          <td>Time</td>
          <td>Situation</td>
          <td>Action</td>
        </tr>
        <tbody>
          {appointmentsData.map((appointmentsData) => (
            <tr key={appointmentsData.id}>
              <td>{appointmentsData.name}</td>
              <td>{appointmentsData.status}</td>
              <td>{appointmentsData.date}</td>
              <td>{appointmentsData.time}</td>
              <td>{appointmentsData.situation}</td>
              <td>{appointmentsData.actions}</td>
              <td>
                <Button />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};