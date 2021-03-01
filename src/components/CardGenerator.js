import React from 'react';
import '../stylesheets/app.scss';
import Header from './Header';
import Form from './form/Form';
import Preview from './preview/Preview';
import Footer from './Footer';

class CardGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: 1,
    };
    this.handlePalette = this.handlePalette.bind(this);
  }

  handlePalette(value) {
    this.setState({
      palette: value,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container__generator">
          <Preview
          palette={this.state.palette} />
          <Form
          palette={this.state.palette}
          handlePalette={this.handlePalette}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default CardGenerator;
