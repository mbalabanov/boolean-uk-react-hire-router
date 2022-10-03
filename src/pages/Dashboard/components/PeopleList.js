import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people, colName } = props;

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem
          key={index}
          id={index}
          person={person}
          colName={colName}
        />
      ))}
    </ul>
  );
}

export default PeopleList;
