import React, { Component } from 'react'
import { Redirect } from 'react-router'
import "./Login.css"
import Logo from "../Logo2.jpg"
export default class Logout extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

            let loggedIn = true
            if(token == null){
                loggedIn = false
            }

        this.state = {
            email: '',
            password: '',
            loggedIn  
        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault()
        const {email, password} = this.state
        if(email === "user@gmail.com" && password === "123"){
            localStorage.setItem("token" , "dsadsakjfksajfksajfiqfwqf")
            this.setState({
                loggedIn: true
            })
        }
    }

    render() {
        if(this.state.loggedIn){
            return <Redirect to="/home"/>
        }
        return (
            <div className = "form-login">
                <img className= "form-logo" src={Logo}></img>
                <form className="form-input" onSubmit = {this.submitForm}>
                    <h2>Enter Your Account</h2>
                    <input className="form-item" type= "email" placeholder="@Gmail.com" name="email" value={this.state.email} onChange={this.onChange}/>
                    <br/>
                    <input className="form-item" type= "password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                    <br/>
                    <button className="form-item">LOGIN</button>
                    <br/>
                </form>
            </div>
        )
    }
}
