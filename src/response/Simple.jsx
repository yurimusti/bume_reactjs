import React from "react";
import Highlight from "react-highlight";

export default function Exercise(props) {
  const { title, content } = props;
  return (
    <div>
       <span style={{fontSize: 28}}>{title}</span>
      <Highlight language="javascript">{content}</Highlight>
      <hr />
    </div>
  );
}
