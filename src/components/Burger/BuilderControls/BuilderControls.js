import React from 'react';
import BuilderControl from './BuilderControl/BuilderControl';
import './BuilderControls.css'

const controls =[
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const BuilderControls = (props) => {
    return (
        <div className="builderControls">
            {
                controls.map(ctrl => 
               
                <BuilderControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    added={() => props.ingredientAdd(ctrl.type)}

                /> )
                
            }
        </div>
    );
};

export default BuilderControls;