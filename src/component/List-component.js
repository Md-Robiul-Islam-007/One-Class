import React, { Component } from "react";

export class List extends Component {
    constructor(props){
        super(props);

        this.state = {
            isEdit : false,
            title : props.title,
            description : props.children,
            className : "bg-light",
            btnClass : true,
            textColor : "text-dark"
        }
        this.inputTitle = React.createRef();
        this.inputDesc = React.createRef();
    }
    edit = () => {
        this.setState({
            isEdit : true
        });
    }

    save = (test) => {
        const inputTitle = this.inputTitle.current.value;
        const inputDesc = this.inputDesc.current.value;
        if(test.key === "Enter"){
            this.setState({
                isEdit : false,
                title : inputTitle,
                description : inputDesc
            });
        }
        this.setState({
            isEdit : false,
            title : inputTitle,
            description : inputDesc
        });
    }

    renderEditing() {
        const isEdit = this.state.isEdit;
        const state = this.state;
        const textColor = this.state.textColor;
        if(isEdit === true){
            return(
                <>
                    <input 
                    onKeyPress={this.save}
                    defaultValue={state.title}
                    ref={this.inputTitle}
                    className="form-control"
                    />
                    <input 
                    onKeyPress={this.save}
                    defaultValue={state.description}
                    className="form-control"
                    ref={this.inputDesc}
                    />
                    <button className="btn btn-info" onClick={this.save}>Save</button>
                </>
            )
        }else{
            return(
                <>
                <h3 className={"list-title " + textColor}>{state.title}</h3>
                <p className={"list-detalse " + textColor}> {state.description} </p>
                </>
            )
        }
    }

    delete = () => {
        alert('Edit button clieked!');
    }

    dark = () => {
        this.setState({
            className : "bg-dark",
            btnClass : false,
            textColor : "text-white"
        });
    }
    light = () => {
        this.setState({
            className : "bg-light",
            btnClass : true,
            textColor : "text-dark"
        });
    }

    renderButton = () => {
        const btnClass = this.state.btnClass;
        if(btnClass === false){
            return(
                <button className="btn btn-light mx-1" onClick={this.light}>Light</button>
            )
        }else{
            return(
                <button className="btn btn-dark mx-1" onClick={this.dark}>Dark</button>
            )
        }
    }

    render(){
        const props = this.props;
        const dark = this.state.className;
        const light = this.state.btnClass;
        return(
            <>
                <div className={dark + " col-12 p-3 px-5 my-2 shadow-sm"}>
                    <div className="list-item">
                        {this.renderEditing()}
                    </div>
                    <button className="btn btn-primary mx-1" onClick={this.edit}>Edit</button>
                    <button className="btn btn-danger mx-1" onClick={this.delete}>Delete</button>
                    {this.renderButton()}
                </div>
            </>
        );
    }
}

export class Button extends Component{
    
      constructor(props){
        super(props);

        this.state = {
            title : 'This Is Not Click Now'
          }
    }
      clicked = () => {
        this.setState({
          title : 'This Is Clicked Now'
        });
      }

      render(){
          return(
            <>
                <button className="btn btn-info" onClick={this.props.color}>Change</button>
                <h3> {this.state.title} </h3>
            </>
          );
      }
}