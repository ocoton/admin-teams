const User = (props) => {
  const { username, name, email, id } = props;


  const backendData = [
    { username: "ZiggyStardust", firstName: "David", lastName: "Bowie", email: "a@gmail", id: 1 },
    { username: "TheQueen", firstName: "Freddie", lastName: "Mercury", email: "b@gmail", id: 2 },
    { username: "Who", firstName: "Keith", lastName: "Moon", email: "c@gmail", id: 3 }
  ]

  const noteRootStyle = {
    border: "2px #0af solid",
    borderRadius: 9,
    margin: 20,
    backgroundColor: "#efefef",
    padding: 6
  };

  return (
    <div>
      {backendData.map(ele => 
        <div style={noteRootStyle}>
          <h3> {ele.id} - {ele.username} - {ele.firstName} - {ele.lastName}</h3>
          <button type="submit" href=""> 
            Delete User
          </button>
        </div>
      )}
    </div>
  )
}

export default User;
