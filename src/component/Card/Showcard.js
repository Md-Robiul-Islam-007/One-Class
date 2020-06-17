import React, { Component } from 'react';
import Cards from './Cards'
import Post from '../post';
import { Link } from 'react-router-dom';
import axios from 'axios'

class ShowCode extends Component {

    state = {
        cards : []
    }

    componentDidMount() {
        axios.get('https://ojjohost.com/robi/wp-json/wp/v2/posts')
         .then(response => {
             this.setState({
                cards: response.data
             })
         })
         .catch(error => console.log(error))
    }

    render() {
        
        if(this.state.cards.length == 0){
            return(
                <img src='/img/JQlFjsS.gif' alt="Loading..." width="100%" />
            )
        }else{
            return(
                <Cards cards={this.state.cards} />
            )
        }

    }
}

export default ShowCode;