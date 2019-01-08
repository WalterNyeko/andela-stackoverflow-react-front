import React from "react";
import RightSideBar from "../utils/RightSideBar";
import LeftSideBar from "../utils/LeftSideBar";
import Footer from "../utils/Footer";
import DefaultLayout from "../utils/DefaultLayout";

export const YourQuestionDetailsComponent = ({
  answers,
  question,
  handleSubmit,
  answer_body,
  onChange
}) => {
  return (
    <div>
      <div>
        <div className="content">
          <div className="container-fluid">
            <DefaultLayout />
            <div className="row">
              <LeftSideBar />
              <div className="col-md-12 main-content-details">
                <div className="body-header-details pt-4 pb-2 clearfix">
                  <div className="top-question float-left">
                    <h4>Question Details</h4>
                  </div>
                </div>

                <div className="questions">
                  <div className="col-md-7 main-content">
                    <div className="card mt-4">
                      <div className="card-header bg-primary text-white">
                        {question.question_title}
                      </div>
                      <div className="card-body">
                        <p className="text-justify">{question.question_body}</p>
                      </div>
                    </div>

                    {/* <!-- Answers --> */}
                    {answers.map(answer => (
                      <div className="card">
                        <div className="card-footer">
                          <div className="row">
                            <div className="col-md-1">
                              <div className="text-center fa fa-user-circle fa-3x" />
                            </div>
                            <div className="col-md-9">
                              <p>{answer.answer_body}</p>
                            </div>
                            <div className="col-md-2">
                              <div className="btn-group m-2">
                                <button
                                  type="button"
                                  className="btn btn-success"
                                >
                                  <i className="fa fa-thumbs-up" />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  <i className="fa fa-thumbs-down" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* <!-- Post Your Answer --> */}
                    <div className="card mt-4">
                      <div className="card-header bg-primary text-white">
                        Post Your Answer Here
                      </div>
                      <div className="card-body">
                        <div className="form-group">
                          <label>Answer Description</label>
                          <textarea
                            cols="30"
                            rows="2"
                            className="form-control"
                            name="answer_body"
                            onChange={onChange}
                            defaultValue={answer_body}
                          />
                        </div>
                        <div className="form-group">
                          <button
                            className="btn btn-success"
                            onClick={handleSubmit}
                          >
                            Post Answer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <RightSideBar />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

YourQuestionDetailsComponent.defaultProps = {
  question: { question_title: "" },
  answers: []
};
