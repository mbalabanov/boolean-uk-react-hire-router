import { useState } from "react";

function HireForm(props) {
  const { person, setPerson, hiredPeople, setHiredPeople } = props;
  const [wageAmount, setWageAmount] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    setWageAmount(event.target.wage.value);
    setPerson({ ...person, wage: wageAmount });
    console.log(person);
    setHiredPeople([...hiredPeople, person]);
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
