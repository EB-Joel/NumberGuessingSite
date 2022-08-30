import React from "react";
import NumberForm from "./NumberForm";
import "tachyons";


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
                <h1> <NumberForm formSubmit={this.handleForm} /></h1>
               console.log({this.state.guess})
            </div>
        );
    }
}


export default NumberGame;