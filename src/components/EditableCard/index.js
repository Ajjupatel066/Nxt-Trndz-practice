import {Component} from 'react'

import './index.css'

class EditableCard extends Component {
  state = {
    EditableInput: true,
    inputValue: '',
  }

  saveBtn = () => this.setState({EditableInput: false})

  onChangeInput = event => this.setState({inputValue: event.target.value})

  renderInputView = () => {
    const {inputValue} = this.state

    return (
      <div className="input-container">
        <input
          className="input-value"
          onChange={this.onChangeInput}
          value={inputValue}
          type="text"
        />
        <button type="button" className="btn" onClick={this.saveBtn}>
          Save
        </button>
      </div>
    )
  }

  editBtn = () => {
    this.setState({EditableInput: true, inputValue: ''})
  }

  renderSavedView = () => {
    const {inputValue} = this.state

    return (
      <div className="input-container">
        <Paragraph className="value">{inputValue}</Paragraph>
        <button type="button" className="btn" onClick={this.editBtn}>
          Edit
        </button>
      </div>
    )
  }

  render() {
    const {EditableInput} = this.state

    return (
      <div className="card-container">
        <h1 className="heading">Editable Text Input</h1>
        {EditableInput ? this.renderInputView() : this.renderSavedView()}
      </div>
    )
  }
}

export default EditableCard
