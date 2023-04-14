import React from "react";

class Mycomponent extends React.Component{

    state ={
        Name :'nguyễn ngọc tú',
        chan :'hanoi'
    }
    handleOnChanName = (event) =>{
        this.setState({
            Name : event.target.value
        })
    }
    handleOnClickButton = ()=>{
        alert('chắc đúng r');
    }
    render(){
        return(
            <>
            <div>
            <input value={this.state.Name} type="text"
            onChange={(event) => this.handleOnChanName(event)}
            />
            
            {this.state.Name}</div>
            <div>{this.state.chan}</div>
            <div>
                <button onClick={() => {this.handleOnClickButton()}}>Click me</button>
            </div>
            </>
        )
    }
}
export default Mycomponent;