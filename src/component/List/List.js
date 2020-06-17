import React, { Component } from "react";
import Listitems from './List-items'

class Lists extends Component {
    state = {
        lists : [
            {
                name: 'JavaScript',
                price: 40,
                id : 1
            },
            {
                name: 'React',
                price: 50,
                id : 2
            },
            {
                name: 'PHP',
                price: 80,
                id : 3
            },
            {
                name: 'WordPress',
                price: 60,
                id : 4
            }
        ]
      }

      deleteHandler = (id) => {
          let newLists = this.state.lists.filter(list => list.id != id)
        this.setState({
            lists : newLists
        })
      }

    render(){
        return(
            <Listitems deleteHandler={this.deleteHandler.bind(this)} lists={this.state.lists} />
        );
    }
}

export default Lists;