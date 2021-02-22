import React from "react";
import "../../stylesheets/form/design.scss";
import Collapsable from './Collapsable';

function Design() {
    return (
        <section className='collapsable'>
            <Collapsable
                name = 'Diseña'
                icon='collapsable__header--icon far fa-object-ungroup'
            />
            <div className='collapsable__box js-collapsable-close'>
                <div className='collapsable__colors'>
                    <h3 className='collapsable__colors--title'>Colores</h3>
                </div>
                <div className='collapsable__content design'>
                    
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

          <label className="display-block design__square-label">
            <input type="radio" name="palette" className="design__square-radio js-palette" value="2" />
            <ul className="palette-2">
              <li className="design__square-color color-1"></li>
              <li className="design__square-color color-2"></li>
              <li className="design__square-color color-3"></li>
            </ul>
          </label>

          <label className="display-block design__square-label">
            <input type="radio" name="palette" className="design__square-radio js-palette" value="3" />
            <ul className="palette-3">
              <li className="design__square-color color-1"></li>
              <li className="design__square-color color-2"></li>
              <li className="design__square-color color-3"></li>
            </ul>
          </label>
        </div>
      </div>
    </section>
  );
}

export default Design;
