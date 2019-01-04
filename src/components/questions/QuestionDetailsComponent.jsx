import React, { Component } from "react";

export default class QuestionDetailsComponent extends Component {
  render() {
    return (
      <div class="col-md-7 main-content">
        <div class="card mt-4">
          <div class="card-header bg-primary text-white">
            This is my post title here.
          </div>
          <div class="card-body">
            <p class="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
              perspiciatis doloribus odio quibusdam? Ex ea ipsa aut in,
              asperiores similique deserunt laudantium ut eum quis odit
              aspernatur architecto distinctio, necessitatibus. <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
              perspiciatis doloribus odio quibusdam? Ex ea ipsa aut in,
              asperiores similique deserunt laudantium ut eum quis odit
              aspernatur architecto distinctio, necessitatibus. <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
              perspiciatis doloribus odio quibusdam? Ex ea ipsa aut in,
              asperiores similique deserunt laudantium ut eum quis odit
              aspernatur architecto distinctio, necessitatibus.
            </p>
          </div>
        </div>

        {/* <!-- Comment One --> */}
        <div class="card">
          <div class="card-footer">
            <div class="row">
              <div class="col-md-1">
                <div class="text-center fa fa-user-circle fa-3x" />
              </div>
              <div class="col-md-9">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi fugiat earum aliquid reprehenderit voluptatibus mollitia
                  eos, delectus, ipsum veniam eum.
                </p>
              </div>
              <div class="col-md-2">
                <div class="btn-group m-2">
                  <button type="button" class="btn btn-success">
                    <i class="fa fa-thumbs-up" />
                  </button>
                  <button type="button" class="btn btn-danger">
                    <i class="fa fa-thumbs-down" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-footer">
            <div class="row">
              <div class="col-md-1">
                <div class="text-center fa fa-user-circle fa-3x" />
              </div>
              <div class="col-md-9">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi fugiat earum aliquid reprehenderit voluptatibus mollitia
                  eos, delectus, ipsum veniam eum.
                </p>
              </div>
              <div class="col-md-2">
                <div class="btn-group m-2">
                  <button type="button" class="btn btn-success">
                    <i class="fa fa-thumbs-up" />
                  </button>
                  <button type="button" class="btn btn-danger">
                    <i class="fa fa-thumbs-down" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-footer">
            <div class="row">
              <div class="col-md-1">
                <div class="text-center fa fa-user-circle fa-3x" />
              </div>
              <div class="col-md-9">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi fugiat earum aliquid reprehenderit voluptatibus mollitia
                  eos, delectus, ipsum veniam eum.
                </p>
              </div>
              <div class="col-md-2">
                <div class="btn-group m-2">
                  <button type="button" class="btn btn-success">
                    <i class="fa fa-thumbs-up" />
                  </button>
                  <button type="button" class="btn btn-danger">
                    <i class="fa fa-thumbs-down" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-footer">
            <div class="row">
              <div class="col-md-1">
                <div class="text-center fa fa-user-circle fa-3x" />
              </div>
              <div class="col-md-9">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi fugiat earum aliquid reprehenderit voluptatibus mollitia
                  eos, delectus, ipsum veniam eum.
                </p>
              </div>
              <div class="col-md-2">
                <div class="btn-group m-2">
                  <button type="button" class="btn btn-success">
                    <i class="fa fa-thumbs-up" />
                  </button>
                  <button type="button" class="btn btn-danger">
                    <i class="fa fa-thumbs-down" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Post Answer --> */}
        <div class="card mt-4">
          <div class="card-header bg-primary text-white">
            Please post your Answer
          </div>
          <div class="card-body">
            <div class="form-group">
              <label>Answer Description</label>
              <textarea cols="30" rows="2" class="form-control" />
            </div>
            <div class="form-group">
              <button class="btn btn-success">Post your Answer</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
