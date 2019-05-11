import React from "react";

import Sugestions from "./sugestions";

export default ({ article, sugestions }) => {
  if (Object.entries(article).length === 0 && article.constructor === Object)
    return <h3>loading</h3>;
  else
    return (
      <div id="article">
        <h3>{article.hint}</h3>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
        <hr />
        <div>
          <img
            src={article.author.profile}
            alt="author profile"
            className="round"
          />
          <h4>{article.author.name}</h4>
          <img src="/icons/flame.svg" alt="fire" className="move-right" />
          <img src="/icons/toilet-paper.svg" alt="paper" className="icon" />
          <img src="/icons/drop.svg" alt="drop" className="icon" />
        </div>
        <Sugestions sugestions={sugestions} />
      </div>
    );
};
