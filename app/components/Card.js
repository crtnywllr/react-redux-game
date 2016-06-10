import React from 'react';
import { Link } from 'react-router';
import style from '../styles/Card'

const Card = React.createClass({
  render() {
    
    const { cards, card, i } = this.props;
    return (
        <div style={style.grid}>
          <h2 style={style.caption}>{card.caption}</h2>
          <Link style={style.link} to={`/view/${i}`}>
          <div style={style.details}>
            <div >
             
               <strong><p style={style.details.title}>{card.title}</p></strong> 
             
             </div>
             {card.photo !== '' ? <img style={style.details.img} src={card.photo} />: ''}
             <div style={style.details.points}>{card.points}</div>
           </div>
           </Link>
        </div>
      
    )
  }
});

export default Card;
