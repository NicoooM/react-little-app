import React, { Component } from "react";
import ButtonsArticle from "../ButtonsArticle/ButtonsArticle";
import "./article.scss";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content,
      articleImg: this.props.articleImg,
      updateArticle: false,
      showArticle: true,
    };
    this.onDeleteArticle = this.onDeleteArticle.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateContent = this.updateContent.bind(this);
  }
  onDeleteArticle() {
    this.setState({ showArticle: false });
    this.props.deleteArticle(this.props.id);
  }
  onUpdateArticle = () => {
    this.setState({ updateArticle: !this.state.updateArticle });
  };
  updateTitle(e) {
    this.setState({ title: e.target.value });
  }
  updateContent(e) {
    this.setState({ content: e.target.value });
  }
  render() {
    if (this.state.showArticle && this.state.updateArticle === false) {
      return (
        <li className="article">
          <div className="img-container">
            <img src={this.state.articleImg} alt="" />
          </div>
          <div className="content-container">
            <h2>{this.state.title}</h2>
            <p>{this.state.content}</p>
            <div className="btn-container">
              <ButtonsArticle
                onUpdateArticle={this.onUpdateArticle}
                updateArticle={this.state.updateArticle}
                deleteArticle={this.onDeleteArticle}
              />
            </div>
          </div>
        </li>
      );
    } else if (this.state.showArticle && this.state.updateArticle) {
      return (
        <li className="article">
          <div className="img-container">
            <img src={this.state.articleImg} alt="" />
          </div>
          <form className="content-container">
            <div>
              <label htmlFor="title">Title :</label>
              <input
                value={this.state.title}
                name="title"
                onChange={this.updateTitle}
              />
            </div>
            <div>
              <label htmlFor="content">Content :</label>
              <textarea
                value={this.state.content}
                name="content"
                onChange={this.updateContent}
              ></textarea>
            </div>
            <div className="btn-container">
              <ButtonsArticle
                onUpdateArticle={this.onUpdateArticle}
                updateArticle={this.state.updateArticle}
                deleteArticle={this.onDeleteArticle}
              />
            </div>
          </form>
        </li>
      );
    } else {
      return null;
    }
  }
}

export default Article;
