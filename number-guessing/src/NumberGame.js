import React from "react";
import "tachyons";
import NumberForm from "./NumberForm";


const answer =Math.floor(Math.random()*10)+1;

class NumberGame extends React.Component{
    constructor(props){
    super(props);
    this.state ={guess: 0};

    this.handleForm = this.handleForm.bind(this);
    this.handleChange= this.handleChange.bind(this);

    }

    gameStart(x){
            if (x == answer) {
                alert("you guessed Right!, try Congratulations");
            }else if (x != answer){
                alert("you guessed Incorrrectly, ") ;
            }
    }

    handleChange(event){
        this.setState({guess:event});
    }

    handleForm(formSubmit){
        this.setState({guess: formSubmit});
        setTimeout(()=>{
            this.gameStart(this.state.guess);
    },10) 
    }

    render(){
        return (
            <div className='tc'>
                <h1>testing <NumberForm formSubmit={this.handleForm} formChange={this.handleChange} /></h1>
                <p>testing state:{this.state.guess},correct answer{answer}</p>
            </div>
        );
    }
}



export default NumberGame;