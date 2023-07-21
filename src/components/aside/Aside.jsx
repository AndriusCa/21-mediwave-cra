import style from "./Aside.module.css";
import { BsCalendarPlus, BsInfoCircle, BsPeopleFill } from "react-icons/bs";
import { LiaCalendarSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import { FaRegHospital } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { GrDashboard } from "react-icons/gr";


const firstNavData = [
  {
    icon: <GrDashboard size="1rem" color="#aaa" />,
    label: "dashboard",
    link: "/",
  },
  {
    icon: <BsCalendarPlus size="1rem" color="#aaa" />,
    label: "appointments",
    link: "/",
  },
  {
    icon: <LiaCalendarSolid size="1rem" color="#aaa" />,
    label: "calendar",
    link: "/",
  },
  {
    icon: <BsPeopleFill size="1rem" color="#aaa" />,
    label: "patients",
    link: "/",
  },
  {
    icon: <IoMdPerson size="1rem" color="#aaa" />,
    label: "doctors",
    link: "/",
  },
  {
    icon: <FaRegHospital size="1rem" color="#aaa" />,
    label: "clinics",
    link: "/",
  },
];

const secondNavData = [
  {
    icon: <CiSettings size="1rem" color="#aaa" />,
    label: "settings",
    link: "/",
  },
  {
    icon: <BsInfoCircle size="1rem" color="#aaa" />,
    label: "help",
    link: "/",
  },
]

export function Aside() {
  return (
    <aside className={style.header}>
      <nav>
        {firstNavData.map((item) => (
          <div key={item.label} className={style.asideicon}>
            {item.icon}
            <a className={style.active} href={item.link}>
              {item.label}
            </a>
          </div>
        ))}
      </nav>
      <div className={style.asideicon}>
        <nav>
          {secondNavData.map((item) => (
            <div key={item.label} className={style.asideicon}>
              {item.icon}
              <a className={style.active} href={item.link}>
                {item.label}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
};