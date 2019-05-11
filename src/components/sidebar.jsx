import React from "react";

export default ({ sidebar }) => {
  const handleSubmit = e => {
    alert("hello");
  };

  let res;
  if (sidebar)
    res = sidebar.sidebar.map((value, i) => (
      <div key={i} className="background">
        <div className="sidebar-container">
          <div className="shadow">{(i < 9 && "0") + (i + 1)}</div>
          {value.hint && (
            <div className="hint">
              <img src={value.icon} alt="icon" />
              <h3>{value.hint}</h3>
            </div>
          )}
          <h2 className="title">{value.title}</h2>
          {value.hint && <button onClick={handleSubmit}>Clicca qui</button>}
        </div>
      </div>
    ));
  else res = <h3>loading...</h3>;
  return <div id="sidebar">{res}</div>;
};
