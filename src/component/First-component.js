import React, {Component}  from 'react';

class First extends Component {
        render(){
            return (
                <>
                <h3>Name : {this.props.name} </h3>
                <h3>Email : {this.props.email} </h3>
                <h3>Phone : {this.props.phone} </h3>
                </>
            )
        }
}

export default First