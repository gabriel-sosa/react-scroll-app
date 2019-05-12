import React from "react";

export default ({ sidebar }) => {
  const handleSubmit = e => {
    const block = e.target.parentElement.parentElement;
    if (block.classList.contains("block")) {
      block.classList.remove("block");
      block.classList.add("full");
    } else {
      block.classList.remove("full");
      block.classList.add("block");
    }
  };

  let res;
  if (sidebar)
    res = sidebar.sidebar.map((value, i) => (
      <div key={i} className="background block">
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
          {value.picture && (
            <div className="picture-container">
              <img src={value.picture} alt="sidebar" />
              <img src={value.picture} alt="sidebar" />
              <img src={value.picture} alt="sidebar" />
              <img src={value.picture} alt="sidebar" />
              <img src={value.picture} alt="sidebar" />
            </div>
          )}
        </div>
      </div>
    ));
  else res = <h3>loading...</h3>;
  return <div id="sidebar">{res}</div>;
};
