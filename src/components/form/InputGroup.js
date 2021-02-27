import React from 'react';

class InputGroup extends React.Component {
  constructor(props) {
    super(props);
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
          className={this.props.className}
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
  requiered: true,
};

export default InputGroup;
