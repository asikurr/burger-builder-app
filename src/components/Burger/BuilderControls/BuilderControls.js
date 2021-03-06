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
            <p>Current Price : <strong>{props.price.toFixed(2)} $</strong> </p>
            {
             
                controls.map(ctrl => 
               
                <BuilderControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    added={() => props.ingredientAdd(ctrl.type)}
                    removed={() => props.ingredientRemove(ctrl.type)}
                    disabled={props.disabled[ctrl.type] }
                     
                /> )
                
            }
            <button 
            className="OrderButton"
                disabled={!props.purchaseAble}
                onClick={props.ordered}
            >Order Now</button>
        </div>
    );
};

export default BuilderControls;