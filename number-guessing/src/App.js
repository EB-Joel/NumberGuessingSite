import React from 'react';
import 'tachyons';
import TextBox from './TextBox';


class App extends React.Component {
    render(){
        return(
        <div className='tc'>
            <h1 className='f1'>Guess a number from 1-10</h1>
            <TextBox />
        </div>
            );
    }
}

export default App;