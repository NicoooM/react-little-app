import React, { Component } from "react";
import "./section.scss";

class Section extends Component {
  render() {
    return (
      <section className={this.props.class}>{this.props.children}</section>
    );
  }
}

export default Section;
