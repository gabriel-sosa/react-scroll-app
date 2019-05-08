import React, { Component } from "react";
import "normalize.css";
import "./App.scss";

import Header from "./components/header";
import Jumbotron from "./components/jumbotron";
import Article from "./components/article";
import Sugestions from "./components/sugestions";
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
  }

  render() {
    return (
      <div>
        <Header />
        <Jumbotron picture={this.state.article.picture} />
        <div id="container">
          <Article article={this.state.article} />
          <Sugestions sugestions={this.state.sugestions} />
          <Sidebar sidebar={this.state.sidebar} />
        </div>
      </div>
    );
  }
}

export default App;
