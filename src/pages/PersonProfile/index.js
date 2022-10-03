import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import HireForm from "./components/HireForm";

function PersonProfile(props) {
  const { hiredPeople, setHiredPeople } = props;
  const [person, setPerson] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { person } = location.state;
      setPerson({ ...person, wage: 0 });
    }
  }, [location]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm
        person={person}
        setPerson={setPerson}
        hiredPeople={hiredPeople}
        setHiredPeople={setHiredPeople}
      />
    </article>
  );
}

export default PersonProfile;
