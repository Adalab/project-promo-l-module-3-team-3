import React from 'react';
import '../stylesheets/app.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './form/Form';
import Preview from './preview/Preview';
import ResetButton from './preview/ResetButton';

class App extends React.Component {
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
    };
    this.handlePalette = this.handlePalette.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handlePalette(value) {
    this.setState({
      palette: value,
    });
  }

  handleInput(data) {
    this.setState({
      [data.inputName]: data.inputValue,
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
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
