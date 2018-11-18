import React from 'react';
import Message from './message';
import GuessForm from './guess-form';
import GuessHistory from './guess-history';

import './game.css';

export default class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Make your first guess!',
            guesses: [],
            answer: this.getRandom(),
            guessed: false,
            input: ''
        }
    }

    getRandom = () => {
        return Math.floor(Math.random()*100) + 1;
    }

    processGuess = (event) => {
        event.preventDefault();
        const guess = this.state.input;
        
        this.setState({input: ''});
        
        this.setState({guesses: [...this.state.guesses, guess]})
        
        const diff = Math.abs(this.state.answer - guess);

        if (diff === 0) {
            this.setState({
                message: 'YOU GUESSED IT!', 
                guessed: true
            });
        } else if (diff <= 5) {
            this.setState({message: 'Burning hot!'});
        } else if (diff <= 10) {
            this.setState({message: 'Hot!'});
        } else if (diff <= 15) {
            this.setState({message: 'Kinda hot'});
        } else if (diff <= 20) {
            this.setState({message: 'Warm'});
        } else if (diff <= 30) {
            this.setState({message: 'Cool'});
        } else if (diff <= 50) {
            this.setState({message: 'Cold'});
        } else if (diff <= 70) {
            this.setState({message: 'Very Cold'});
        } else {
            this.setState({message: 'Ice Cold!'});
        }
    }

    newGame = () => {
        this.setState({
            message: 'Make your first guess!',
            guesses: [],
            answer: this.getRandom(),
            guessed: false,
            input: ''
        });
    }

    updateInput = (input) => {
        this.setState({input});
    }

    render() {
        const guessForm = this.state.guessed ? null : 
            <GuessForm input={this.state.input} onChange={event => this.updateInput(event.target.value)} onSubmit={event => this.processGuess(event)} />;

        return (
            <main>
                <h1>Hot or Cold</h1>
                <div className='gameboard'>
                    <Message message={this.state.message}/>
                    {guessForm}
                    <GuessHistory guesses={this.state.guesses}/>
                    <button className='newgamebtn' type='button' onClick={this.newGame}>New Game</button>
                </div>
                
            </main>
        );
    }
}