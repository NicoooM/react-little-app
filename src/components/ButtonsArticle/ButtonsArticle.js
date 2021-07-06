import React, { Component } from "react";
import "./buttonsArticle.scss";

class ButtonsArticle extends Component {
  constructor(props) {
    super(props);
    this.onDeleteArticle = this.onDeleteArticle.bind(this);
  }
  onDeleteArticle() {
    this.setState({ showArticle: false });
    this.props.deleteArticle(this.props.id);
  }
  render() {
    const deleteButton = (
      <button className="btn-danger" onClick={this.onDeleteArticle}>
        Delete
      </button>
    );
    if (this.props.updateArticle) {
      return (
        <div>
          <button
            className="btn-secondary"
            onClick={() => {
              this.props.onUpdateArticle();
            }}
          >
            Submit
          </button>
          {deleteButton}
        </div>
      );
    } else {
      return (
        <div>
          <button
            className="btn-secondary"
            onClick={() => {
              this.props.onUpdateArticle();
            }}
          >
            Update
          </button>
          {deleteButton}
        </div>
      );
    }
  }
}

export default ButtonsArticle;
