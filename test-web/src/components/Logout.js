import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
                <h1>Bạn đã đăng xuất khỏi website</h1>
                <Link to = "/">Trở lại trang Login</Link>
            </div>
        )
    }
}
