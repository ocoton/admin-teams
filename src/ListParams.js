import { useEffect, useState } from "react";
import User from "./User";
import Results from "./Results";


useEffect(() => {
    requestUsers();
  }, []);

  async function requestUsers() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com`
    );
    const json = await res.json();

    setUsers(json.users);
  }
