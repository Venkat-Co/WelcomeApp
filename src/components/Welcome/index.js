import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  handleUpdateFalse = () => {
    this.setState({
      isSubscribe: false,
    })
  }

  handleUpdateTrue = () => {
    this.setState({
      isSubscribe: true,
    })
  }

  renderAuthButton = () => {
    const {isSubscribe} = this.state
    if (isSubscribe === true) {
      return (
        <button className="btn" type="button" onClick={this.handleUpdateFalse}>
          Subscribe
        </button>
      )
    }
    return (
      <button className="btn" type="button" onClick={this.handleUpdateTrue}>
        Subscribed
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="main">
          <h1 className="heading">Welcome</h1>
          <p className="details">Thank you! Happy Learning</p>
          {this.renderAuthButton()}
        </div>
      </div>
    )
  }
}

export default Welcome
