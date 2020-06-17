import React, { Component } from "react";
import BoxLayout from "../Layout/Box-layout";

class Item extends Component {
    render(){
        return(
            <div className='col-12'>
            <li className="list-group-item d-flex my-2">
                <h3> {this.props.item.name} </h3>
                <span className='ml-auto'> {this.props.item.price} </span>
                <div className="mx-3">
                    <span>
                        <button onClick={() => this.props.deleteHandler(this.props.item.id)} className="btn btn-danger">Delete</button>
                    </span>
                </div>
            </li>
            </div>
        )
    }
}

export default Item;