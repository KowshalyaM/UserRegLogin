import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions} from '../actions';
class Login extends Component{
    constructor(props) {
        super(props);

        // reset login status
        // this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }
render(){
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
return (
    <div className="col-md-8">
    <div className="card">
        <div className="card-header">Login</div>
        <div className="card-body">
            <form onSubmit={this.handleSubmit}>
                <div className={'form-group row ' + (submitted && !username ? ' has-error' : '')}>
                    <label for="username" className="col-md-4 col-form-label text-md-right">Username</label>
                    <div className="col-md-6">
                        <input type="text" id="username" className="form-control" name="username" onChange={this.handleChange}  autofocus />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                </div>

                <div className={'form-group row' + (submitted && !password ? ' has-error' : '')}>
                    <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>
                    <div className="col-md-6">
                        <input type="password" id="password" className="form-control" name="password" onChange={this.handleChange}  />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                </div>

               

                <div className="col-md-6 offset-md-4">
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                    <Link className="btn btn-link" to="/signup">Signup</Link>
                    {/* <a href="#" className="btn btn-link">
                        Forgot Your Password?
                    </a> */}
                </div>
     
        </form>
    </div>
</div>
</div>
)
}
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};


// export default Login;
export default connect(mapState, actionCreators)(Login);