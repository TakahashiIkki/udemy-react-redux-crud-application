import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        const greeting = 'Hi Tomm!!';
        const firstDom = <h1>{greeting}</h1>;
        return firstDom;
    }
}

export default App;
