import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from '../actions';
import { Link } from 'react-router-dom';
class Signup extends Component{
    constructor(props) {
        super(props);

        this.state = {
            user: {
                first_name: '',
                last_name: '',
                username: '',
                password: '',
                email:'',
                gender:'',
                country:'',
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;

        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
        console.log(this.state.user);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
  
        if (user.first_name && user.email && user.username && user.password) {
            this.props.register(user);
        }
    }
render(){
    const { user, submitted } = this.state;
return (
    <div className="col-md-8">
    <div className="card">
        <div className="card-header">Register</div>
        <div className="card-body">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label for="username" className="col-md-4 col-form-label text-md-right">UserName</label>
                    <div className="col-md-6">
                        <input type="text" id="username" className="form-control" name="username" onChange={this.handleChange} required autofocus />
                    </div>
                </div>

                <div className="form-group row">
                    <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>
                    <div className="col-md-6">
                        <input type="password" id="password" className="form-control" name="password" onChange={this.handleChange} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="email_address" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                    <div className="col-md-6">
                        <input type="text" id="email_address" className="form-control" name="email" onChange={this.handleChange} required />
                    </div>
                </div>

                <div className="form-group row">
                    <label for="first_name" className="col-md-4 col-form-label text-md-right">FirstName</label>
                    <div className="col-md-6">
                        <input type="text" id="first_name" className="form-control" name="first_name" onChange={this.handleChange} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="last_name" className="col-md-4 col-form-label text-md-right">LastName</label>
                    <div className="col-md-6">
                        <input type="text" id="last_name" className="form-control" name="last_name" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="gender" className="col-md-4 col-form-label text-md-right">Gender</label>
                    <div className="col-md-6">
                    <label className="radio-inline"><input type="radio" name="gender" value="male" checked onChange={this.handleChange} />Male</label>
<label className="radio-inline"><input type="radio" name="gender" value="female" onChange={this.handleChange} />Female</label>

                    </div>
                </div>
                
                <div className="form-group row">
                    <label for="country" className="col-md-4 col-form-label text-md-right">Country</label>
                    <div className="col-md-6">
                        
                    <select className="form-control" id="sel1" onChange={this.handleChange}  name="country">
    <option>Select</option>
    <option value='india'>INDIA</option>
    <option value='uk'>UK</option>

  </select>

                    </div>
                </div>
               

                <div className="col-md-6 offset-md-4">
                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                    <Link className="btn btn-link" to="/">Login</Link>
                    
                </div>
     
        </form>
    </div>
</div>
</div>
)
}
}

// function mapState(state) {
//     const { registering } = state.registration;
//     return { registering };
// }
const actionCreators = {
    register: userActions.register
}
export default connect(null, actionCreators)(Signup);
// export default Signup;