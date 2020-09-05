import React from 'react'
import PadBank from './PadBank'

export default class App extends React.Component {
  state = {
    display: '',
  }
  onDisplayUpdate = (display) => {
    this.setState(() => ({
      display,
    }))
  }

  render() {
    return (
      <div id="drum-machine" className="ui container center aligned">
        <h1 className="ui segment green inverted huge padded">Drum Machine</h1>
        <div id="display" className="ui segment">
          {this.state.display}
        </div>
        <PadBank onDisplayUpdate={this.onDisplayUpdate} />
      </div>
    )
  }
}
