import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person, id, colName } = props;

  return (
    <>
      <div>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
        {person.wage > 0 && <p>Wage: £{person.wage}</p>}
        {colName === "PeopleCol" && (
          <Link to={`/view/${id}`} state={{ person }} className="viewButton">
            View
          </Link>
        )}
      </div>
    </>
  );
}

export default PeopleListItem;
