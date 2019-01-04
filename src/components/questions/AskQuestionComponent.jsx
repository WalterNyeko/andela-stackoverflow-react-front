import React, { Component } from "react";
import { connect } from "react-redux";
import { postQuestion } from "../../store/actions/questions";

export class AskQuestionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question_title: "",
      question_body: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = e => {
    e.preventDefault();
    const questionObject = {
      question_title: this.state.question_title,
      question_body: this.state.question_body
    };
    this.props.postQuestion(questionObject);
  };
  render() {
    return (
      <div className="col-md-12 ask-question">
        <div className="card mt-4">
          <div className="card-header bg-primary text-white">Ask Question</div>
          <div className="card-body">
            <div className="form-group">
              <label>Title of the Question</label>
              <input
                type="text"
                className="form-control"
                placeholder="Title of the Question"
                onChange={this.onChange}
                value={this.state.question_title}
                name="question_title"
              />
            </div>
            <div className="form-group">
              <label>Description of the Question</label>
              <textarea
                cols="30"
                rows="3"
                className="form-control"
                onChange={this.onChange}
                name="question_body"
                defaultValue={this.state.question_body}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" onClick={this.handleSubmit}>
                Submit Your Question
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { postQuestion }
)(AskQuestionComponent);
