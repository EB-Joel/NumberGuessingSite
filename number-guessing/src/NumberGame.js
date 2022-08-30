import React from "react";
// import NumberForm from "./NumberForm";
import "tachyons";
import GameLogic from "./GameLogic";

class NumberGame extends React.Component{
    constructor(props){
    super(props);
    this.state ={guess: undefined};

    this.handleForm = this.handleForm.bind(this);

    }

    handleForm(formguess){
        this.setState({guess: formguess});
    }
   
    render(){
        return (
            <div className='tc'>
                <h1>testing <GameLogic /></h1>
            </div>
        );
    }
}


export default NumberGame;