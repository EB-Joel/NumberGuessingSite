import React from "react";
import NumberForm from "./NumberForm";

const answer =Math.floor(Math.random()*10)+1;



class GameLogic extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:{value:false,
            guess:undefined}
        }
        this.handleGuess = this.handleGuess.bind(this)
    }
    gameStart(){
        while (this.state.guess !== answer) {
            if (this.state.guess !== answer) {
                this.setState({...this.state.data, value:true});
                return "you guessed incorrectly, try again";
            }else{
                this.setState({...this.state.data, value:true});
                return "you guessed corrrectly, Congratulations";
            }
    }
}
     
    handleGuess(formSubmit){
        this.setState({...this.state.data, guess:formSubmit});
    }

    render(){
        return(
            <div>
               <h1> <NumberForm formSubmit={this.handleGuess} /> </h1>
               <p>{this.gameStart}</p>
               <p> testing {answer}</p>
            </div>
        );
    }
}
export default GameLogic;