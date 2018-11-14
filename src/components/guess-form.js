import React from 'react';

import './guess-form.css'

export default function GuessForm(props) {

    return (
        <form className='guessform' onSubmit={props.onSubmit}>
            <label>Enter your guess:</label>
            <input type='number' value={props.input} onChange={props.onChange} min="1" max="100"/>
            <button type='submit'>Guess</button>
        </form>
    );
}