import React from "react";

const Details = (props) => {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  );
  //   return <h1>Hello Details</h1>;
};

export default Details;
