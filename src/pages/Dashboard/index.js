import PeopleList from "./components/PeopleList";
import HiredPeopleList from "./components/HiredPeopleList";
import { Link } from "react-router-dom";

function Dashboard(props) {
  const { hiredPeople, setHiredPeople, people, setPeople } = props;
  console.log("Props in Dashboard");
  console.log(props);
  const numberOfPeople = people.length;
  const numberOfHiredPeople = hiredPeople.length;

  return (
    <main className="dashboard-layout">
      <section>
        <h2>
          People <span>({numberOfPeople})</span>
        </h2>
        <PeopleList people={people} colName="PeopleCol" />
      </section>
      <section>
        <h2>
          Hired People
          {numberOfHiredPeople > 0 && <span> ({numberOfHiredPeople})</span>}
        </h2>
        {numberOfHiredPeople > 0 && (
          <Link to="/edit_hired" className="viewButton">
            Edit
          </Link>
        )}
        <HiredPeopleList
          hiredPeople={hiredPeople}
          setHiredPeople={setHiredPeople}
          people={people}
          setPeople={setPeople}
          colName="HiredPeopleCol"
        />
      </section>
    </main>
  );
}

export default Dashboard;
