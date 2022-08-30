import React from "react";
import NumberForm from "./NumberForm";

const answer =Math.floor(Math.random()*10)+1;

 function gameStart(x){
        while (this.state.data.guess !== answer) {
            if (this.state.data.guess !== answer) {
               console.log('idk')
                return "you guessed incorrectly, try again";
            }else{
                
                return "you guessed corrrectly, Congratulations";
            }
    }
}



class GameLogic extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:{value:false,
            guess:undefined}
        }
        this.handleGuess = this.handleGuess.bind(this)
       
    }
   
     
    handleGuess(formSubmit){
        this.setState({ guess:formSubmit});
    }

    render(){
        return(
            <div>
               <h1> <NumberForm formSubmit={this.handleGuess} /> </h1>
               <p>this{gameStart}, </p>
               <p> testing {answer}</p>
            </div>
        );
    }
}
export default GameLogic;