import React, { PropTypes, Component } from 'react'
import { Modal } from 'containers'
var ReactCSSTransitionGroup = require('react-addons-css-transition-group')

class AuthFormContainer extends Component {
  getInitialState() {
    return {
      mounted: false,
    }
  }

  componentDidMount() {
    this.setState({
      mounted: true,
    })
  }

  handleSubmit (e) {
    this.setState({
      mounted: false,
    })
    e.preventDefault()
  }

  render () {
    let child;
    if (this.state.mounted) {
      child = (
        <Modal onSubmit={this.handleSubmit} />
      )
    }

    return (
      <div className="authForm">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
            {child}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default AuthFormContainer
