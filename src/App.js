import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Sort from "./components/Sort";

import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";


import "./styles.css";

const API_URL = "https://randomuser.me/api/?results=50";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  const getRandomUsers = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    const dataWithWageField = data.results.map((eachDataItem) => {
      eachDataItem.wage = 0;
      return eachDataItem;
    });
    const sortedPeople = Sort(dataWithWageField, "name", "first");
    setPeople(sortedPeople);
  };

  useEffect(() => {
    getRandomUsers();
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to="/" className="viewButton">
              Dashboard
            </Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
              people={people}
              setPeople={setPeople}
            />
          }
        />
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
              people={people}
              setPeople={setPeople}
            />
          }
        />
      </Routes>
    </>
  );
}
