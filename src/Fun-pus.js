import React, { Component } from 'react';

class FunPus extends Component {

    state = {
        button : true
    }

    list = () => {
        this.setState({
            button : false
        })
    }

    dark = () => {
        this.setState({
            button : true
        })
    }

    funButton = () => {
        let newButton = this.state.button;
        if(newButton === true){
            return(
                <button className="btn btn-dark"  onClick={this.list}>Dark</button>
            )
        }else{
            return(
                <button className="btn btn-light" onClick={this.dark}>Light</button>
            )
        }
    }
    
    render() {
        const bgDark = this.props.bgDark;
        const bgLight = this.props.bgLight;
        return (
            <div className={bgDark + "bg-dark p-4"}>
                { this.funButton() }
            </div>
        );
    }
}

export default FunPus;