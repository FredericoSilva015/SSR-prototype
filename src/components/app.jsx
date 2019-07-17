import React from 'react';

class App extends React.Component {
  /**
   * Constructor
   * @private
   */
  constructor() {
    super();
    this.handleButtonClick = this.handleButtonClick.bind( this );
    this.handleTextChange = this.handleTextChange.bind( this );
    this.handleReset = this.handleReset.bind( this );

    this.state = {
      name: '',
      msg: ''
    };
  }

  /**
   * On Button Click
   * @private
   */
  handleButtonClick() {

    const nameLen = this.state.name.length;

    if( nameLen > 0 ) {
      this.setState({ 
        msg: `Your name has ${nameLen} characters including space`
      });
    }
  }

  /**
   * On Text Change
   * @private
   * @param {Event} event on text change
   */
  handleTextChange( event ) {
    this.setState({ name: event.target.value })
  }

  /**
   * On Reset
   * @private
   */
  handleReset() {
    this.setState({ name: '', msg: '' })
  }

  render() {
    return (
      <div>
        <label>Your Name</label>
        <input 
          type="text"
          id="txtName"
          name="txtName"
          value={this.state.name}
          onChange={this.handleTextChange}
        />
        <button id="btnSubmit" onClick={this.handleButtonClick}>
          Calculate Name Length
        </button>
        <button id="btnReset" onClick={this.handleReset}>
          Reset All
        </button>
        <hr />
        { this.state.msg !== '' ? <p>{this.state.msg}</p> : '' }
      </div>
    );
  }
};

export default App;
