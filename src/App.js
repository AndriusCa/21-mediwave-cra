import './App.css';
import { SlCheck, SlClose } from "react-icons/sl";
import { FaRegLightbulb } from "react-icons/fa";
import { Aside } from './components/aside/Aside';
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

function App() {

  const appointmentsData = [
    {
      id: 1,
      name: "Abdullah AlAhad Shuvo",
      status: "Consultation",
      date: "03.01.2019",
      time: "10:00 AM",
      situation: <FaRegLightbulb />,
      actions: (
        <g>
          <SlCheck />
          <SlClose />
        </g>
      ),
    },
    {
      id: 2,
      name: "Al Shahriar Shawon",
      status: "Consultation",
      date: "03.01.2019",
      time: "10:20 AM",
      situation: <FaRegLightbulb />,
      actions: (
        <g>
          <SlCheck />
          <SlClose />
        </g>
      ),
    },
    {
      id: 3,
      name: "Lyn R. Lemus",
      status: "Consultation",
      date: "03.01.2019",
      time: "10:40 AM",
      situation: <FaRegLightbulb />,
      actions: (
        <g>
          <g>
            <SlCheck />
            <SlClose />
          </g>
        </g>
      ),
    },
    {
      id: 4,
      name: "Katherine A. Stanfill",
      status: "Consultation",
      date: "03.01.2019",
      time: "11:00 AM",
      situation: <FaRegLightbulb />,
      actions: (
        <g>
          <SlCheck />
          <SlClose />
        </g>
      ),
    },
    {
      id: 5,
      name: "Robert K. Perez",
      status: "Consultation",
      date: "03.01.2019",
      time: "11:20 AM",
      situation: <FaRegLightbulb />,
      actions: (
        <g>
          <SlCheck />
          <SlClose />
        </g>
      ),
    },
    {
      id: 6,
      name: "Jason L. Bowling",
      status: "Consultation",
      date: "03.01.2019",
      time: "11:40 AM",
      situation: <FaRegLightbulb />,
      actions: (
        <g>
          <SlCheck />
          <SlClose />
        </g>
      ),
    },
    {
      id: 7,
      name: "Joseph A. Bove",
      status: "Consultation",
      date: "03.01.2019",
      time: "12:00 AM",
      situation: <FaRegLightbulb />,
      actions: (
        <g>
          <SlCheck />
          <SlClose />
        </g>
      ),
    },
  ]

  return (
    <div className="app">
      <Header />
      <Aside />
      <Main appointmentsData={appointmentsData} />
    </div>
  )
};

export default App;
