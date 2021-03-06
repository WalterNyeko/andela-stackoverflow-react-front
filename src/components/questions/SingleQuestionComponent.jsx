import { connect } from "react-redux";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { fetchQuestions, fetchQuestion } from "../../store/actions/questions";
export class SingleQuestionComponent extends Component {
  componentWillMount() {
    this.props.fetchQuestions();
  }

  render() {
    function truncate(str, numberOfWords) {
      return str
        .split(" ")
        .splice(0, numberOfWords)
        .join(" ");
    }
    const fetchedQuestions = this.props.questions.map(question => (
      <div className="card mt-3 question-body" key={question.question_id}>
        <div className="card-body">
          <div className="single-question">
            <div className="row">
              <div className="col-md-1 text-center spacing">
                1 <br />
                Votes
              </div>
              <div className="col-md-1 text-center spacing">
                2 <br />
                Answers
              </div>
              <div className="col-md-10">
                {question.question_title}
                <div className="row">
                  <div className="col-md-6">
                    {truncate(question.question_body, 5)}...{" "}
                    <NavLink
                      className="navbar-brand"
                      to={`/questions/${question.question_id}`}
                    >
                      read more
                    </NavLink>
                  </div>
                  <div className="col-md-6 text-right">
                    Asked by {question.question_author}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
    return <div>{fetchedQuestions}</div>;
  }
}

export const mapStateToProps = state => ({
  questions: state.questions.questions
});

export const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchQuestion: data => dispatch(fetchQuestion(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleQuestionComponent);
