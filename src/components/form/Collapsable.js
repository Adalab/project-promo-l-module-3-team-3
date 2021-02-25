import React from 'react';
import "../../stylesheets/form/collapsable.scss";

class Collapsable extends React.Component {
    constructor(props) {
    super(props);
    // state
    this.state = {
      isOpen: false,
    //   email: '',
    //   name:'',
    };
    // events
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }
  // events
  handleHeaderClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    render() {
        const {props,} = this;
        // get open / close class name 
        const openClassName = this.state.isOpen ? 'open' : '';
        const openText = this.state.isOpen ? 'Abierto' : 'Cerrado';
        return (
            <div className={`header-container collapsable__content js-collapsable ${openClassName}`}>
                <div className='collapsable__header' 
                onClick={this.handleHeaderClick}>
                   {this.props.title}: {openText}
                </div>
                <div className='collapsable__header2'>
                    <i className='collapsable__header--arrow fas fa-chevron-down js-collapsable-arrow'></i>
                </div>
            </div>
        );
    }
}

export default Collapsable;


// class Collapsable extends React.Component {
//   constructor(props) {
//     super(props);
//     // state
//     this.state = {
//       isOpen: false,
//       email: '',
//       name:'',
//     };
//     // events
//     this.handleHeaderClick = this.handleHeaderClick.bind(this);
//   }
//   // events
//   handleHeaderClick() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   // render
//   render() {
//     // get open / close class name 
//     const openClassName = this.state.isOpen ? 'open' : '';
//     const openText = this.state.isOpen ? 'Abierto' : 'Cerrado';
//     return (
//       <div className={`collapsable-container ${openClassName}`}>
//         <div className="collapsable-header" onClick={this.handleHeaderClick}>
//           {this.props.title}: {openText}
//         </div>
//         <div className="collapsable-content">{this.props.children}</div>
//       </div>
//     );
//   }
// }