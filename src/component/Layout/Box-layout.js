import React, { Component } from 'react';

class BoxLayout extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default BoxLayout;