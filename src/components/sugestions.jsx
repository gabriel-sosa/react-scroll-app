import React from "react";

export default ({ sugestions }) => {
  let res;
  if (sugestions)
    res = sugestions.sugestions.map((value, i) => (
      <img
        src={value}
        alt="sugested"
        className={i % 3 === 0 ? "big" : "small"}
        key={i}
      />
    ));
  else res = <h3>loading...</h3>;
  return <div id="sugestions">{res}</div>;
};
