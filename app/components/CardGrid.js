import React from 'react'
import Card from './Card'
import FilterDisplay from './FilterDisplay'
import style from '../styles/CardGrid'

const CardGrid = React.createClass({
  render() {
   
        return (
          <div style={style}>          
            {this.props.cards.map((card, i) => <Card {... this.props} key={i} i={i} card={card}/>)}
          </div>
        )
    }
})

export default CardGrid;