import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HireForm(props) {
  const navigate = useNavigate();
  const { person, setPerson, hiredPeople, setHiredPeople, people, setPeople } =
    props;
  const [wageAmount, setWageAmount] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("wageAmount");
    console.log(wageAmount);
    person.wage = wageAmount;
    setPerson({ ...person });
    console.log(person.id.value);

    const updatedPeople = people.filter((peopleItem) => {
      if (peopleItem.id.value !== person.id.value) {
        return peopleItem;
      }
    });

    console.log("updatedPeople");
    console.log(updatedPeople);

    setPeople(updatedPeople);
    setHiredPeople([...hiredPeople, person]);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWageAmount(e.target.value)}
        value={wageAmount}
      />
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;
