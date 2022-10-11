import React, { useState } from 'react';

const Options = ({ option }) => {
    const [selected, setSelected] = useState(false);
    console.log();
    return (
        <div className='options'>
            <div className="radio">
                <div className={selected ? 'radio-select' : ''}></div>
            </div>
            <p value={option} onClick={() => setSelected(!selected)} className={`option-select ${selected ? 'selected' : undefined}`}>{option}</p>
        </div>
    );
};

export default Options;