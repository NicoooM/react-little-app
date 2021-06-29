import React, { Component } from "react";
import Section from "./components/Section/Section";
import FormContainer from "./components/FormContainer/FormContainer";
import Form from "./components/Form/Form";
import ArticlesContainer from "./components/ArticlesContainer/ArticlesContainer";
import "./style/_reset.scss";
import "./style/_typography.scss";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleImg: "",
      title: "",
      content: "",
      submit: false,
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.updateImg = this.updateImg.bind(this);
    this.updateSubmit = this.updateSubmit.bind(this);
  }
  updateTitle(newTitle, prevState) {
    this.setState({ ...prevState, title: newTitle });
  }
  updateContent(newContent, prevState) {
    this.setState({ ...prevState, content: newContent });
  }
  updateImg(newImg, prevState) {
    this.setState({ ...prevState, articleImg: newImg });
  }
  updateSubmit(prevState) {
    this.setState({ ...prevState, submit: true });
    setTimeout(() => {
      this.setState({ articleImg: "", title: "", content: "", submit: false });
    }, 30);
  }
  render() {
    return (
      <main>
        <Section class="landing">
          <FormContainer>
            <h1>Create your article</h1>
            <Form
              onUpdateTitle={this.updateTitle}
              title={this.state.title}
              onUpdateContent={this.updateContent}
              content={this.state.content}
              onUpdateImg={this.updateImg}
              articleImg={this.state.articleImg}
              updateSubmit={this.updateSubmit}
            />
          </FormContainer>
        </Section>
        <Section class="articles">
          <h1 style={{ marginBottom: 3 + "%" }}>Your articles</h1>
          <ArticlesContainer
            title={this.state.title}
            content={this.state.content}
            articleImg={this.state.articleImg}
            submitting={this.state.submit}
          />
        </Section>
      </main>
    );
  }
}

export default Layout;
