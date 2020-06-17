import React, { Component } from 'react';
import axios from 'axios'

class SingleCard extends Component {

    state = {
        imgUrl : '',
        auth : '',
        imgLoading : false
    }

    componentDidMount() {
        const { featured_media, author } = this.props.card;

        axios.get(`https://ojjohost.com/robi/wp-json/wp/v2/media/${featured_media}`)
         .then(res => {
             this.setState({
                 imgUrl : res.data.media_details.sizes.full.source_url,
                 imgLoading : true
             })
         })
         .catch(err => console.log(err))

         axios.get(`https://ojjohost.com/robi/wp-json/wp/v2/users/${author}`)
         .then(res => {
             this.setState({
                 auth : res.data.name,
                 imgLoading : true
             })
         })
         .catch(err => console.log(err))
    }
        
        
    render() {
        console.log(this.state);
        const Loading = this.state.imgLoading;
        return (
            <>
                <div className="col-4">
                    <div className={this.props.color + " card my-3"} key={this.props.card.id}>
                        { Loading ? <img src={this.state.imgUrl} className="card-img-top" alt={this.props.card.title.rendered} /> : <img src='/img/JQlFjsS.gif' alt='Loading...' /> }
                        <div className="card-body">
                            <h5 className="card-title"> {this.props.card.title.rendered} </h5>
                            <small> { this.state.auth } </small>
                            <p className="card-text" dangerouslySetInnerHTML={{ __html: this.props.card.content.rendered}} ></p>
                            <a href={this.props.card.btnhref} target="_blank" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SingleCard;