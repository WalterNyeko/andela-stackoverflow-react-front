import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuestion } from "../store/actions/questions";
import { YourQuestionDetailsComponent } from "../components/questions/YourQuestionDetailsComponent";

class YourQuestionDetails extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchQuestion(id);
  }
  render() {
    const { answers, questions } = this.props.question;
    return (
      <div>
        <YourQuestionDetailsComponent answers={answers} question={questions} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  question: state.questions.question
});

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourQuestionDetails);
