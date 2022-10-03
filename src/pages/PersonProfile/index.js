import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import HireForm from "./components/HireForm";

function PersonProfile(props) {
  console.log("props", props);
  const [person, setPerson] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { person } = location.state;
      setPerson(person);
      console.log(person);
    }
  }, [location]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  );
}

export default PersonProfile;
