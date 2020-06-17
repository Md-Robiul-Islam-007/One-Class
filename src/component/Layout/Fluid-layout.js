import React, { Component } from 'react';

class FluidLayout extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default FluidLayout;