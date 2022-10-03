import HiredPeopleListItem from "./HiredPeopleListItem";

function HiredPeopleList(props) {
  const { hiredPeople, setHiredPeople, people, setPeople } = props;

  return (
    <ul>
      {hiredPeople.map((hiredPerson, index) => (
        <HiredPeopleListItem
          key={index}
          hiredPerson={hiredPerson}
          hiredPeople={hiredPeople}
          setHiredPeople={setHiredPeople}
          people={people}
          setPeople={setPeople}
        />
      ))}
    </ul>
  );
}

export default HiredPeopleList;
