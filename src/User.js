function User() {
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
    <div style={{ width: 400 }}>
      {backendData.map(ele => 
        <div style={noteRootStyle}>
          <h3>{ele.username}</h3>
          <p>id:{ele.id} - name:{ele.firstName} - surname:{ele.lastName}</p>
        </div>
      )}
    </div>
  )
}

export default User;
