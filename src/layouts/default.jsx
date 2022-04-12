import React from "react";

export default function DefaultLayout(props) {
  return (
    <div>
      <main className="container">{props.children}</main>
    </div>
  );
}
