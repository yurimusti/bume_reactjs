import React, { useState } from "react";
import { Button, Input } from "antd";

export default function Response2() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([{ user: "Carlos" }]);

  function handleChangeUser(e) {
    setUser(e.target.value);
  }

  function add() {
    setData([...data, { user }]);
  }

  return (
    <div>
      <Input onChange={handleChangeUser} />
      <Button onClick={() => add()}>Add</Button>
      <h1>Lista</h1>
      {data.map((e, i) => (
        <p key={i}>{e.user}</p>
      ))}
    </div>
  );
}
