import './App.css';

import React, { Component } from 'react';

/**
 * Stateful (container) base component for the Bulletin-Board-App
 */
class App extends Component {
    constructor() {
        super();

        this.state = {};
    }
    
    render() {
        return (
            <div id="app-container">
                {'Oh, hi, Mark'}
            </div>
        );
    }
}

export default App;
