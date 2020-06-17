import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Post extends Component {

    state = {
        posts : []
    }

    componentDidMount() {
        axios.get('https://ojjohost.com/robi/wp-json/wp/v2/posts')
         .then(response => {
             this.setState({
                 posts: response.data
             })
         })
         .catch(error => console.log(error))
    }
    render() {
        let { psots } = this.state
        if(this.state.posts === 0){
            return <h2 style={{textAlign: "center"}}> Loading... </h2>
        }else{
            return(
                <div className="container">
                    <ul className="list-group">
                        { psots.map(post => {
                            return <li></li>
                        }) }
                    </ul>
                </div>
            )
        }

    }
}

export default Post;