import React from "react";
import Highlight from "react-highlight";

export default function Exercise(props) {
  const { title, content, component } = props;
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1 }}>
          <span style={{fontSize: 28}}>{title}</span>
          {component}
        </div>
        <div style={{ flex: 1 }}>
          <Highlight language="javascript">{content}</Highlight>
        </div>
      </div>
      <hr />
    </div>
  );
}

// import React, { useState } from "react";
// import { Button, Input } from "antd";

// export default function Response2(props) {
//   const [user, setUser] = useState("");
//   const [data, setData] = useState([
//     { user: "Carlos" }
//   ]);

//   function handleChangeUser(e) {
//     setUser(e.target.value);
//   }

//   function add() {
//     setData([...data, { user }]);
//   }

//   return (
//     <div style={props.style}>
//       <Input onChange={handleChangeUser} />
//       <Button onClick={() => add()}>Add</Button>
//       <h1>Lista</h1>
//       {data.map((e, i) => (
//         <p key={i}>{e.user}</p>
//       ))}
//     </div>
//   );
// }
