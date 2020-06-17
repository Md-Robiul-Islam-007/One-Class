import React, { Component } from 'react';
import SingleCard from './Single-card'

class Cards extends Component {
    render() {
        return (
            <>
                { this.props.cards.map(card => {
                    return(
                        <SingleCard key={card.id} card={card} />
                    )
                }) }
            </>
        );
    }
}

export default Cards;