import React, { Component } from "react";
import "./article.scss";

class Article extends Component {
  render() {
    return (
      <li className="article">
        <div className="img-container">
          <img src={this.props.articleImg} alt="" />
        </div>
        <div className="content-container">
          <h2>{this.props.title}</h2>
          <p>{this.props.content}</p>
        </div>
      </li>
    );
  }
}

export default Article;
