import React from 'react';

class Palette extends React.Component {
    constructor(props) {
        super(props);
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