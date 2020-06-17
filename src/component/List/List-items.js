import React, { Component } from "react";
import Item from './Item';

class Listitems extends Component{

    render(){
        return(
            <>
                {this.props.lists.map(item => {
                    return(
                        <Item deleteHandler={ this.props.deleteHandler } item={item} />
                    )
                })}
            </>
        );
    }
}

export default Listitems;