import React, { Component } from 'react'

export class FormValidation extends Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",

        firstnameErr: "",
        lastnameErr: "",
        emailErr: "",
        phoneNumberErr: ""
    }
    handleChange = (e) => {
        // console.log(e.target.value);

        const { name, value } = e.target;
        this.setState({ [name]: value })
        // this.setState({ [e.target.name]: e.target.value })
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.validation();
    }

    validation = () => {
        let firstnameErr = "";
        let lastnameErr = "";
        let emailErr = "";
        let phoneNumberErr = ""

        // updaing error message for variables
        if (this.state.firstname.length < 3) {
            firstnameErr = "Minimun 3 length require of firstname"
        }
        if (this.state.lastname.length < 1) {
            lastnameErr = "Too sort";
        }
        if (this.state.phoneNumber.length !== 10) {
            phoneNumberErr = "Invalid Phone Number";
        }
        if (!this.state.email.includes('@')) {
            emailErr = "Invalid Email";
        }

        //updating the state with error
        if (firstnameErr | lastnameErr | emailErr | phoneNumberErr) {
            this.setState({ firstnameErr, lastnameErr, emailErr, phoneNumberErr });
        } else {
            this.setState({ firstnameErr, lastnameErr, emailErr, phoneNumberErr });
        }
    }
    render() {

        return (

            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <form onSubmit={this.handleSubmit}>
                            <h2 className='text-center mt-4 mb-4'>Contact US</h2>
                            <input type='text' placeholder='Enter First Name' className='form-control' name='firstname' onChange={this.handleChange} />
                            <p className='text-danger'>{this.state.firstnameErr}</p>
                            <input type='text' placeholder='Enter Last Name' className='form-control mt-2' name='lastname' onChange={this.handleChange} />
                            <p className='text-danger'>{this.state.lastnameErr}</p>
                            <input type='email' placeholder='Enter Email' className='form-control mt-2' name='email' onChange={this.handleChange} />
                            <p className='text-danger'>{this.state.emailErr}</p>
                            <input type='text' placeholder='Enter Phone Number' className='form-control mt-2' name='phoneNumber' onChange={this.handleChange} />
                            <p className='text-danger'>{this.state.phoneNumberErr}</p>
                            <button className='btn btn-info mt-2'>Submit</button>
                        </form>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        )
    }
}

export default FormValidation
