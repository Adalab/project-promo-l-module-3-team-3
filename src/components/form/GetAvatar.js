import '../../stylesheets/form/getAvatar.scss';
import React from 'react';
import defaultAvatar from '../../images/giphy.webp';
import PropTypes from 'prop-types';


class GetAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();
    this.myFileField = React.createRef();
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  uploadImage(ev) {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      this.fr.addEventListener('load', this.getImage);
      this.fr.readAsDataURL(myFile);
    }
  }

  getImage() {
    const image = this.fr.result;
    this.props.getAvatar(image);
  }

  render() {
    const avatar = this.props.avatar === '' ? defaultAvatar : this.props.avatar;
    return (
      <div className="get-avatar">
        <label className="get-avatar__label" type="button">
          Añadir imagen
          <input
            type="file"
            ref={this.myFileField}
            className="get-avatar__upload-field"
            onChange={this.uploadImage}
          />
        </label>

        <div className="get-avatar__preview" style={{ backgroundImage: `url(${avatar})` }}></div>
      </div>
    );
  }
}

GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  getAvatar: PropTypes.func.isRequired
};


export default GetAvatar;
