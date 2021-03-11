import React from 'react';
import '../stylesheets/app.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './form/Form';
import Preview from './preview/Preview';
import ResetButton from './preview/ResetButton';
import defaultImage from './preview/DefaultImage';



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
      profile: {
        avatar: defaultImage
      }
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

  updateAvatar(img) {
    const {profile} = this.state;
    this.setState(prevState => {
      const newProfile = {...profile, avatar: img};
      return {
        profile: newProfile,
        isAvatarDefault: false
      }
    });
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
            <Preview palette={this.state.palette} data={this.state} />
          </div>

          <Form
            data={this.state}
            handleInput={this.handleInput}
            palette={this.state.palette}
            handlePalette={this.handlePalette}
            profile={this.state.profile.avatar}
            updateAvatar={this.updateAvatar}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default CardGenerator;
