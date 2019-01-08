import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuestion, postAnswer } from "../store/actions/questions";
import { YourQuestionDetailsComponent } from "../components/questions/YourQuestionDetailsComponent";

class YourQuestionDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer_body: ""
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchQuestion(id);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const data = {
      answer_body: this.state.answer_body,
      id: id
    };
    console.log(data);
    this.props.postAnswer(data);
  };
  render() {
    const { answers, questions } = this.props.question;
    return (
      <div>
        <YourQuestionDetailsComponent
          answers={answers}
          question={questions}
          handleSubmit={this.handleSubmit}
          answer_body={this.state.answer_body}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  question: state.questions.question
});

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  postAnswer: data => dispatch(postAnswer(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourQuestionDetails);
