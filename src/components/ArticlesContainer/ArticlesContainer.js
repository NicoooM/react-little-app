import React, { Component } from "react";
import Article from "../Articles/Article";
import "./articlesContainer.scss";

class ArticlesContainer extends Component {
  constructor(props) {
    super(props);
    this.articles = [];
    this.id = 0;
    this.deleteArticle = this.deleteArticle.bind(this);
  }
  deleteArticle(id) {
    return (this.articles = this.articles.filter((article) => {
      return id !== article.id;
    }));
  }
  render() {
    if (this.props.submitting) {
      this.articles.push({
        articleImg: this.props.articleImg,
        title: this.props.title,
        content: this.props.content,
        id: this.id + 1,
      });
      this.id++;
    }
    return (
      <ul className="articles-container">
        {this.articles.map((article) => {
          return (
            <Article
              key={article.id}
              articleImg={article.articleImg}
              title={article.title}
              content={article.content}
              id={article.id}
              deleteArticle={this.deleteArticle}
            />
          );
        })}
        {this.articles.length === 0 ? <p>You have no article yet</p> : ""}
      </ul>
    );
  }
}

export default ArticlesContainer;
