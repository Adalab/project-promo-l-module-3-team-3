import React from 'react';
import '../stylesheets/app.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './form/Form';
import Preview from './preview/Preview';
import ResetButton from './preview/ResetButton';


class CardGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: 1,
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      isAvatarDefault: true,
      avatar: ''
    };
    this.handlePalette = this.handlePalette.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
  }


  handlePalette(value) {
    this.setState({
      palette: parseInt(value),
    });
  }

  handleInput(data) {
    this.setState({
      [data.inputName]: data.inputValue,
    });
  }

  updateAvatar(avatar) {
    this.setState({ avatar: avatar });
  }

  handleReset() {
    this.setState({
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      palette: 1
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container__generator">
          <div className="preview">
            <ResetButton handleReset={this.handleReset} />
            <Preview palette={this.state.palette} data={this.state} avatar={this.state.avatar} />
          </div>

          <Form
            data={this.state}
            handleInput={this.handleInput}
            palette={this.state.palette}
            handlePalette={this.handlePalette}
            avatar={this.state.avatar}
            getAvatar={this.updateAvatar}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default CardGenerator;
