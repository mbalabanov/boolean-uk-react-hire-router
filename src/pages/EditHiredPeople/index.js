import HiredPeopleList from "./components/HiredPeopleList";
import { Link } from "react-router-dom";

function EditHiredPeople(props) {
  const { hiredPeople, setHiredPeople, people, setPeople } = props;

  return (
    <main className="dashboard-layout">
      <section>
        <h2>Edit List of Hired People</h2>
        <Link to={"/"} className="viewButton">
          Cancel
        </Link>
        <HiredPeopleList
          hiredPeople={hiredPeople}
          setHiredPeople={setHiredPeople}
          people={people}
          setPeople={setPeople}
        />
      </section>
    </main>
  );
}

export default EditHiredPeople;
