import React from "react";

export default ({ article }) => {
  if (Object.entries(article).length === 0 && article.constructor === Object)
    return <h3>loading</h3>;
  else
    return (
      <div>
        <h3>{article.hint}</h3>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
        <hr />
        <div className="flex">
          <img
            src={article.author.profile}
            alt="author profile"
            className="round"
          />
          <h4>{article.author.name}</h4>
          <img src="/icons/flame.svg" alt="fire" className="move-right" />
          <img src="/icons/toilet-paper.svg" alt="paper" />
          <img src="/icons/drop.svg" alt="drop" />
        </div>
      </div>
    );
};
