import PeopleList from "./components/PeopleList";

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
        <PeopleList people={hiredPeople} colName="HiredPeopleCol" />
      </section>
    </main>
  );
}

export default Dashboard;
