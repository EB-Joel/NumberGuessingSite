import React from "react";

class NumberForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={value:undefined}

        this.formSubmitted = this.formSubmitted.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    formSubmitted(numguess){
        this.props.formSubmit(this.state.value);
        numguess.preventDefault();
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    render(){
        return(
            <form>
                <label>
                    Guess a number:
                    <input value={this.state.value} onChange={this.handleChange} type="number" min="1" max="10"/>
                </label>
                <button className="btn btn-primary" onClick={this.formSubmitted}>submit</button>
            </form>
        );
    }

}

export default NumberForm;