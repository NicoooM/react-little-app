import React, { Component } from "react";
import "./formContainer.scss";

class FormContainer extends Component {
  render() {
    return <div className="form-container">{this.props.children}</div>;
  }
}

export default FormContainer;
