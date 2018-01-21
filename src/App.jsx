import React from "react";
import QuestionList from "./components/QuestionList";
import QuestionDetails from "./components/QuestionDetails";
import { connect } from "react-redux";

import { Route, Link } from "react-router-dom";

/**
 * App Component is the highest level real component in the application, it is the parent of the routes and an
 * an ancestors of all other compoents
 */
const AppDisplay = () => (
  <div>
    <div>
      <Link to={`/`}>
        <h1>Isomorphic React</h1>
      </Link>
      <Route exact path="/" render={() => <QuestionList />} />
      <Route
        exact
        path="/questions/:id"
        render={({ match }) => (
          <QuestionDetails question_id={match.params.id} />
        )}
      />
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  ...state
});

/**
 * The connected component exported below forms the
 * core of our application and is used both on the server and the client
 */
export default connect(mapStateToProps)(AppDisplay);
