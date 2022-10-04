import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people, colName } = props;

  return (
    <div className="TwoColGrid">
      {people.map((person, index) => (
        <PeopleListItem
          key={index}
          id={index}
          person={person}
          colName={colName}
        />
      ))}
    </div>
  );
}

export default PeopleList;
