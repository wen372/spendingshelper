import React from 'react';
import { BrowserRouter as Router , Link, Route, Navigate} from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

class LoginPage extends React.Component {
  state = {
    redirectToReferrer: false,
    failed: false,
    email: "",
    password: "",
  }

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  login = (e) => {
    e.preventDefault();
    const auth = this.context;
    let { email, password } = this.state;
    auth.authenticate(email, password)
      .then((user) => {
        this.setState({ redirectToReferrer: true });
      })
      .catch((err) => {
        this.setState({ failed: true });
      });
  }

  render() {
    const { from } = this.props.location || { from: { pathname: '/' } };
    const { redirectToReferrer, failed } = this.state;

    if (redirectToReferrer) {
      return <Navigate to={from} />;
    }

    let err = "";
    if (failed) {
      err = <div className="alert alert-danger" role="alert">Login Failed</div>;
    }

    return (
      <form onSubmit={this.login}>
        <div className="form-row">
          { err }
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.fieldChanged('email')} />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.fieldChanged('password')} />

          <Link to={"/register"}> Register </Link>
          <button
            type="submit"
            className="btn btn-primary ml-auto"
          >Login</button>
        </div>
      </form>
    );
  }
}

LoginPage.contextType = AuthContext

export default LoginPage;