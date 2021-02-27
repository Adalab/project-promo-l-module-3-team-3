import React from 'react';
import "../../stylesheets/form/palette.scss";

class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(ev) {
        console.log(ev);
    }

    render() {
        const palette = [1, 2, 3];
        const paletteId = palette[this.props.i];
        return (
            <>
                <label className='display-block design__square-label'>
                    <input
                        id={paletteId}
                        type='radio'
                        name='palette'
                        className='design__square-radio js-palette'
                        value={`${this.props.i}`}
                        onClick={this.handleClick}
                    />
                    <ul className={`palette-${paletteId}`}>
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