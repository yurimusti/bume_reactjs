import React, { useState } from "react";
import { Button } from "antd";

export default function Response2() {
  const [data, setData] = useState([
    { user: "Carlos" },
    { user: "Luiz" },
    { user: "Roberto" },
    { user: "Mateus" },
    { user: "Joao" }
  ]);

  function randomList() {
    setData([
      ...data.sort(function() {
        return 0.5 - Math.random();
      })
    ]);
  }

  return (
    <div>
      <Button onClick={() => randomList()}>Random</Button>
      <h1>Lista</h1>
      {data.map((e, i) => (
        <p key={i}>{e.user}</p>
      ))}
    </div>
  );
}
