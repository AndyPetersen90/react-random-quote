import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
    state = { advice: '' };

    //below is one of many life cycle methods//
    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((res) => {
            const {advice} = res.data.slip;

            this.setState({ advice: advice });
        })
        .catch((err) => {
            console.log(err)
        });
    };

    render() {
        const {advice} = this.state;
        return (
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span>GET MORE ADVICE</span>
                    </button>

                </div>
            </div>
        )
    }
}

export default App;