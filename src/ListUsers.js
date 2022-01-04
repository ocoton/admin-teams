import User from "./User";

const Results = ({ users }) => {
  return (
    <div>
      {!users.length ? (
        <h1>No Users Found</h1>
      ) : (
        users.map((user) => {
          return (
            <User
              username={user.username}
              key={user.id}
              name={user.name}
              email={user.email}
              id={user.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;