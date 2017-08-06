import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header1 extends Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link>Resources</Link></li>
          <li><Link>Sign In</Link></li>
        </ul>
      </div>
    )
  }
}
