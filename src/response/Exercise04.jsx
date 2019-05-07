import React from "react";
import { Avatar } from "antd";

export default function Exercise04() {
  return (
    <div style={{ display: `flex`, flexDirection: `row`}}>
      <Avatar style={{flex: 1}}  size={200} icon="user" />
      <Avatar style={{flex: 1}} size={200} icon="user" />
      <Avatar style={{flex: 1}} size={200} icon="user" />
    </div>
  );
}
