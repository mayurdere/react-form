import React from 'react';
import Thankyou from './Thankyou';

export class Form extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        reEnterEmail: "",
        password: "",
        isSubmitted: false
    };

    emailChangeHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    renterEmailChangeHandler = (e) => {
        this.setState({
            reEnterEmail: e.target.value
        })
    }
    firstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }
    lastNameChange = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    passwordChangeHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    validate = () => {
        let firstNameError = "";
        let emailError = "";
        let reEnterEmailError = "";
        let passwordError = "";

        if (!this.state.email.includes('@')) {
            emailError = 'Invalid Email'
        }
        if (emailError) {
            this.setState({ emailError });
            return false;
        }
        if (this.state.email !== this.state.reEnterEmail) {
            // reEnterEmailError = 'Both emails did not matched'
            reEnterEmailError = 'Both emails did not matched'
        }
        if (reEnterEmailError) {
            this.setState({ reEnterEmailError });
            return false;
        }
        return true;
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
        }
        this.setState({'isSubmitted': true });
        
    }
    
    render() {
        return (
            <div className="registration-form">
                <h1>User Registration Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="first-name" placeholder="First Name" value={this.state.firstName} onChange={this.firstNameChange} required />
                            <div className="form-error">{this.state.firstNameError}</div>
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="last-name" placeholder="Last Name" value={this.state.LastName} onChange={this.lastNameChange} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="email" placeholder="Your Email" value={this.state.email} onChange={this.emailChangeHandler} required />
                        <div className="form-error">{this.state.emailError}</div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="reenter-email" placeholder="Re-enter Email" value={this.state.reEnterEmail} onChange={this.renterEmailChangeHandler} required />
                        <div className="form-error">{this.state.reEnterEmailError}</div>

                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" placeholder="New Password" value={this.state.password} onChange={this.passwordChangeHandler} required />
                    </div>
                    <div className="form-row">
                        <label className="ml-2">Birthday</label>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-check ml-2">
                            <input className="form-check-input" type="radio" name="female" id="female" value="female" />
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                        <div className="form-check ml-2">
                            <input className="form-check-input" type="radio" name="male" id="male" value="male" />
                            <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
                {this.state.isSubmitted && <Thankyou/>}
            </div>

        );
    }
}

export default Form;