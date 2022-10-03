import PeopleList from "./components/PeopleList";
import { Link } from "react-router-dom";

function Dashboard(props) {
  const { hiredPeople, people } = props;

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
        <PeopleList people={hiredPeople} colName="HiredPeopleCol" />
      </section>
    </main>
  );
}

export default Dashboard;
