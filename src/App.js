import React, { Component } from 'react';
import Counter from './components/counter';

class App extends Component {
    render() { 
        return ( 
            <div>
                <h1>Hello world!!</h1>
                <Counter/>
            </div>
        );
    }
}
 
export default App;