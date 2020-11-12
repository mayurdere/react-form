import React from 'react';
import Thankyou from './Thankyou';

export class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "mayur",
            phone: "",
            email: "",
            password: "",
            gender: "male",
            salary: "",
            address: "Navi Mumbai",
            isSubmitted: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        const json = localStorage.getItem('details')
        const details = JSON.parse(json)
        this.setState(details)
    }
    componentDidUpdate(prevProps, prevState) {
        const json = JSON.stringify(this.state)
        localStorage.setItem('details', json)
    }

    emailChangeHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    usernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    phoneChange = (e) => {
        this.setState({
            phone: e.target.value
        })
    }
    passwordChangeHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    genderChangeHandler = (e) => {
        this.setState({
            gender: e.target.value
        })
    }

    addressChangeHandler = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    salaryChangeHandler = (e) => {
        this.setState({
            salary: e.target.value
        })
    }
    validate = () => {
        let usernameError = "";
        let emailError = "";
        let passwordError = "";
        let phoneError = "";
        if (this.state.username.length == 0) {
            usernameError = 'Username cannot be empty'
        }
        if (usernameError) {
            this.setState({ usernameError });
            return false;
        }
        if (this.state.password.length < 8) {
            passwordError = 'Password must have atleast 8 characters'
        }
        if (passwordError) {
            this.setState({ passwordError });
            return false;
        }
        if (this.state.phone.length < 10) {
            phoneError = 'Phone must have atleast 10 characters'
        }
        if (phoneError) {
            this.setState({ phoneError });
            return false;
        }
        if (!this.state.email.includes('@')) {
            emailError = 'Invalid Email'
        }
        if (emailError) {
            this.setState({ emailError });
            return false;
        }
        if (this.state.salary) {
            let salary = this.state.salary;
            salary = salary.toString();
            let lastThree = salary.substring(salary.length - 3);
            let otherNumbers = salary.substring(0, salary.length - 3);
            if (otherNumbers != '')
                lastThree = ',' + lastThree;
            let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
            this.setState({
                salary: res
            })
        }
        return true;
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
        }
        this.setState({ 'isSubmitted': true });
    }

    render() {
        return (
            <div className="registration-form">
                <h1>User Registration Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Username" value={this.state.username} onChange={this.usernameChange} />
                            <div className="form-error">{this.state.usernameError}</div>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Password</label>
                            <input type="password" className="form-control" id="password" placeholder="New Password" value={this.state.password} onChange={this.passwordChangeHandler}  required/>
                            <div className="form-error">{this.state.passwordError}</div>

                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Your Email" value={this.state.email} onChange={this.emailChangeHandler} required />
                            <div className="form-error">{this.state.emailError}</div>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Phone</label>
                            <input type="number" className="form-control" id="phone" placeholder="Phone" value={this.state.phone} onChange={this.phoneChange} required />
                            <div className="form-error">{this.state.phoneError}</div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Gender</label>
                            <select className="form-control" onChange={this.genderChangeHandler} value={this.state.gender}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Salary</label>
                            <input type="text" className="form-control" id="salary" placeholder="Salary" value={this.state.salary} onChange={this.salaryChangeHandler} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label>Address</label>
                            <textarea className="form-control" rows="3" id="address" placeholder="Address" value={this.state.address} onChange={this.addressChangeHandler} readOnly></textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                {
                    this.state.isSubmitted && <Thankyou/>
                }
            </div>

        );
    }
}

export default Form;