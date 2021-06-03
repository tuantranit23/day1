import React, { useState } from 'react';
import PropTypes from 'prop-types';

TestState.propTypes = {

};

function TestState(props) {
    const [color, setColor] = useState('white');
    const [count, setCount] = useState(0);
    return (
        <div>
            Color: {color}<br />
            Number: {count} <br />
            <button onClick={() => setColor('black')}>Change to black</button>
            <button onClick={() => setColor('white')}>Change to white</button>
            <button onClick={() => setCount(x => x + 1)}>Up number</button>
        </div>
    );
}

export default TestState;