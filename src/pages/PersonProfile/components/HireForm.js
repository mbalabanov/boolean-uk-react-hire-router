import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function HireForm(props) {
  const navigate = useNavigate();
  const { person, setPerson, hiredPeople, setHiredPeople, people, setPeople } =
    props;

  const [wageAmount, setWageAmount] = useState(person.wage);

  function handleSubmit(event) {
    event.preventDefault();

    person.wage = wageAmount;
    setPerson({ ...person });

    const updatedPeople = people.filter((peopleItem) => {
      if (peopleItem.id.value !== person.id.value) {
        return peopleItem;
      }
    });

    setPeople(updatedPeople);
    setHiredPeople([...hiredPeople, person]);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="number"
        min="1"
        id="wage"
        name="wage"
        onChange={(e) => setWageAmount(e.target.value)}
        value={wageAmount}
      />
      <button type="submit" className="viewButton">
        Hire
      </button>
      <Link to={"/"} className="cancel">
        Cancel
      </Link>
    </form>
  );
}

export default HireForm;
