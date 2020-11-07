import React from 'react';
import './BuilderControl.css'

const BuilderControl = (props) => {
    console.log(props.added)
    return (
        <div className="builder-control">
            <div className="Label">{props.label}</div>
            <button className="Less">Less</button>
            <button className="More" onClick={props.added}>More</button>
        </div> 
    );
};

export default BuilderControl;