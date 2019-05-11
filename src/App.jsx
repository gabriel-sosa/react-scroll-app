import React, { Component } from "react";
import "normalize.css";
import "./App.scss";

import Header from "./components/header";
import Jumbotron from "./components/jumbotron";
import Article from "./components/article";
import Sidebar from "./components/sidebar";

import Server from "./mock/mockApi";

class App extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    this.setState({
      article: Server.getArticle(),
      sugestions: Server.getSugestions(),
      sidebar: Server.getSidebar()
    });
    const sidebarElement = document.querySelector("#sidebar");
    const header = document.querySelector("#header");
    const container = document.querySelector("#container");
    if (sidebarElement && header && container)
      window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const res = scrolled / 3.5 - 150;
        container.y = container.getBoundingClientRect().top;
        const offset =
          container.y - document.body.getBoundingClientRect().top - 100;
        sidebarElement.style.marginTop = `${res > 0 ? 0 : res}px`;
        header.style.top = `${scrolled > offset ? offset : scrolled}px`;
        container.className = container.y < 0 ? "full" : "not-full";
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Jumbotron picture={this.state.article.picture} />
        <div id="container" className="not-full">
          <Article
            article={this.state.article}
            sugestions={this.state.sugestions}
          />
          <Sidebar sidebar={this.state.sidebar} />
        </div>
      </div>
    );
  }
}

export default App;
