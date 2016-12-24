import React, {Component} from 'react'
import MenuBar from './appbar.js'

export default class App extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render () {
    return (
      <div >
        <MenuBar />
        {this.props.children}
      </div>
    )
  }
}
