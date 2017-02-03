import React, { Component, PropTypes } from 'react'

class ModalContainer extends Component {
  render () {
    return (
      <div className="modal">
        <form onSubmit={this.props.onSubmit} className="modalForm">
          <Input id="name" type="text" placeholder="Justin Davidson"/>
          <Input id="username" type="email" placeholder="justindavidson23@gmail.com"/>
          <Input id="password" type="password" placeholder="password"/>
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

export default ModalContainer
