import { useNavigate } from "react-router-dom";
import Sort from "../../../components/Sort";

function HiredPeopleListItem(props) {
  const navigate = useNavigate();
  const { hiredPerson, hiredPeople, setHiredPeople, people, setPeople } = props;

  const removeFromHired = (removeId) => {
    hiredPerson.wage = 0;

    const updatedHiredPeople = hiredPeople.filter((peopleItem) => {
      if (peopleItem.id.value !== removeId) {
        return peopleItem;
      }
    });

    setHiredPeople(updatedHiredPeople);
    const sortedPeople = Sort([...people, hiredPerson], "name", "first");
    setPeople(sortedPeople);
    navigate("/");
  };
  return (
    <>
      <li>
        <h3>
          {hiredPerson.name.first} {hiredPerson.name.last}
        </h3>
        <p>
          Wage: £{hiredPerson.wage}{" "}
          <span
            onClick={(e) => removeFromHired(hiredPerson.id.value)}
            className="cancel"
          >
            Remove from List
          </span>
        </p>
      </li>
    </>
  );
}

export default HiredPeopleListItem;
