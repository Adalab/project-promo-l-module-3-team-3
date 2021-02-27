import React from 'react';

class InputGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(ev) {
    this.props.handleInput({
      inputName: ev.target.name,
      inputValue: ev.target.value,
    });
  }

  render() {
    return (
      <>
        <label htmlFor={this.props.forId} className="fillin__label">
          {this.props.text}
        </label>
        <input
          className={this.props.className} // esto está bien?
          placeholder={this.props.placeText}
          type={this.props.type}
          name={this.props.name}
          onChange={this.handleInputChange}
          value={this.props.value}
        />
      </>
    );
  }
}

InputGroup.defaultProps = {
  type: 'text',
  required: true,
};

export default InputGroup;
