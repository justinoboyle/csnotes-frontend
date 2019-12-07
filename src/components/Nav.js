import React, { Component } from "react"
import "./Nav.css"
import { Link } from "react-router-dom"

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <Link to='/'>
            ~/<strong>cs</strong>n<span className="hideable">otes</span>
          </Link>
        </div>
        <div className="search-box-container">
          {/* <input placeholder="Search for a problem..." /> */}
        </div>
        <nav>
          <ul>
            <li className="display-mobile">
              <Link to='/'>Search</Link>
            </li>
            <li>
              {/* <a href={`http://localhost:3021/auth/token/${localStorage.token}`}>Log In</a> */}
            </li>
            <li>
              <Link to="/post">+ Post</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
