import React from 'react'

export default class DrumPad extends React.Component {
  playSound = (e) => {
    const sound = document.getElementById(this.props.info.keyTrigger)
    sound.play()
    this.props.onDisplayUpdate(this.props.info.id)
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress = (e) => {
    if (e.keyCode === this.props.info.keyCode) {
      this.playSound()
    }
  }

  render() {
    return (
      <div
        className="drum-pad column"
        id={this.props.info.id}
        onClick={this.playSound}
      >
        <div className="ui huge padded green inverted segment">
          <audio
            className="clip"
            id={this.props.info.keyTrigger}
            src={this.props.info.url}
          ></audio>
          {this.props.info.keyTrigger}
        </div>
      </div>
    )
  }
}
