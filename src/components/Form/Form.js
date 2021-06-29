import React, { Component } from "react";
import "./form.scss";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      articleImg: "",
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleArticleImgChange = this.handleArticleImgChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(event) {
    let title = event.target.value;
    this.props.onUpdateTitle(title);
  }
  handleContentChange(event) {
    let content = event.target.value;
    this.props.onUpdateContent(content);
  }
  handleArticleImgChange(event) {
    let articleImg = event.target.value;
    this.props.onUpdateImg(articleImg);
  }
  handleSubmit() {
    this.props.updateSubmit();
  }
  render() {
    return (
      <div className="form">
        <div className="input-text-container">
          <label htmlFor="title">Post title :</label>
          <input
            type={this.props.type}
            name="title"
            required
            value={this.props.title}
            onChange={this.handleTitleChange}
          />
        </div>
        <div className="text-area-container">
          <label htmlFor="content">Post content :</label>
          <textarea
            name="content"
            required
            value={this.props.content}
            onChange={this.handleContentChange}
          ></textarea>
        </div>
        <div className="input-text-container">
          <label htmlFor="image">Post image link :</label>
          <input
            type={this.props.type}
            name="image"
            required
            value={this.props.articleImg}
            onChange={this.handleArticleImgChange}
          />
        </div>
        <button className="btn-primary submit-form" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default Form;
