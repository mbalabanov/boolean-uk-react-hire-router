import PeopleList from "./components/PeopleList";
import { Link } from "react-router-dom";

function Dashboard(props) {
  const { hiredPeople, people } = props;

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} colName="PeopleCol" />
      </section>
      <section>
        <h2>Hired People</h2>
        {hiredPeople.length > 0 && (
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
