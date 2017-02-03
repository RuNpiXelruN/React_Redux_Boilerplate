import React from 'react'
import { AuthFormContainer } from 'containers'

const MainContainer = React.createClass({
  testFn: function() {
    console.log('hittttt');
  },
  render () {
    return (
      <div>
        <h1>Heyyy from Boilerplate!!</h1>
        <button onClick={this.testFn}>Test here</button>
        {this.props.children}
        <h1><Test Here asdlfkj/h1>
      </div>
    )
  }
})

export default MainContainer
