import { render } from '@testing-library/react';
import React from 'react';

class Palette extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <label className='display-block design__square-label'>
                <input
                    type='radio'
                    name='palette'
                    className='design__square-radio js-palette'
                    value='1'
                />
                <ul className='palette-1'>
                    <li className='design__square-color color-1'></li>
                    <li className='design__square-color color-2'></li>
                    <li className='design__square-color color-3'></li>
                </ul>
            </label>
        )
    }
}
export default Palette;