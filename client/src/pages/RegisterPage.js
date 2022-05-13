import React from 'react';
import { BrowserRouter as Router, Route, Link, Navigate} from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

class RegisterPage extends React.Component {
    
  state = {
    redirectToReferrer: false,
    failed: false,
    success: false,
    email: "",
    password: "",
    username: "",
  }

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  /*
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
*/

  login = (e) => {
    e.preventDefault();
    fetch("/api/auth/signup", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({firstName: this.state.username, lastName: null, email: this.state.email, password:this.state.password}),
    })
      .then(res => {
        if(res.ok) {
          const auth = this.context;
          let { email, password } = this.state;
          auth.authenticate(email, password)
          return res.json()
        }
        
        

        throw new Error('Content validation');
      })
      .then(post => {
        this.setState({
          redirectToReferrer: true,
          //success: true,
        });
      })
      .catch(err => {
        this.setState({
          failed: true,
        });
      });
  }







  render() {
    const { from } = { from: { pathname: '/' } };
    const { redirectToReferrer, failed } = this.state;

    if (redirectToReferrer) {
      return <Navigate to={from} />;
    }

    let err = "";
    if (failed) {
      err = <div className="alert alert-danger" role="alert">Register Failed</div>;
    }

    return (
      <form onSubmit={this.login}>
        <div className="form-row">
          { err }
          <input
            type="username"
            className="form-control"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.fieldChanged('username')} />

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
          <button
            type="submit"
            className="btn btn-primary ml-auto"
          >Register</button>
        </div>
      </form>
    );
  }
}

RegisterPage.contextType = AuthContext

export default RegisterPage;