import React from 'react';
import "../../stylesheets/form/palette.scss";

class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(ev) {
        // console.log(ev.target.value);
        this.props.handlePalette(ev.target.value);
    }

    render() {

        return (
            <>
                <label className='display-block design__square-label'>
                    <input
                        id={this.props.i}
                        type='radio'
                        name='palette'
                        className='design__square-radio js-palette'
                        checked={this.props.i === this.props.palette}
                        value={`${this.props.i}`}
                        onClick={this.handleClick}
                    />
                    <ul className={`palette-${this.props.i}`}>
                        <li className='design__square-color color-1'></li>
                        <li className='design__square-color color-2'></li>
                        <li className='design__square-color color-3'></li>
                    </ul>
                </label>


            </>
        )
    }
}
export default Palette;