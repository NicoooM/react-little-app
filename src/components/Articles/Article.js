import React, { Component } from "react";
import "./article.scss";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showArticle: true,
    };
    this.onDeleteArticle = this.onDeleteArticle.bind(this);
  }
  onDeleteArticle() {
    this.setState({ showArticle: false });
    this.props.deleteArticle(this.props.id);
  }
  render() {
    if (this.state.showArticle) {
      return (
        <li className="article">
          <div className="img-container">
            <img src={this.props.articleImg} alt="" />
          </div>
          <div className="content-container">
            <h2>{this.props.title}</h2>
            <p>{this.props.content}</p>
            <button
              className="btn-danger"
              onClick={() => {
                this.onDeleteArticle();
              }}
            >
              Delete
            </button>
          </div>
        </li>
      );
    } else {
      return "";
    }
  }
}

export default Article;
