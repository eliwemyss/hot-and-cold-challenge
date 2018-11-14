import React from 'react';

import './message.css';

export default function Message(props) {
    return (
        <p className='message'>{props.message}</p>
    );
}