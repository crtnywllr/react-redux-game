import React from 'react'
import Form from './Form'
import CompletedForm from './CompletedForm'
import style from '../styles/SingleCardDisplay'


const SingleCardDisplay = React.createClass({
    render() {
      const { id } = this.props.params;
      const card = this.props.cards[id];
      
        return (
          <div style={style.container}>
            <div style={Object.assign({}, style.boxes,style.card)}>
              <h2 style={style.caption}>{card.caption}</h2>
              <div style={style.cardDetails}>
                <h2 style={style.cardDetails.title}>{card.title}</h2>
                <div style={style.cardRules}>{card.rules.map((rule, i) => <h3 style={style.rule}>{rule}</h3>)}
                </div>
                <h2 style={style.cardDetails.points}>{card.points}</h2>
              </div>
            </div>
          
          
          {card.status.completed ?  <div style={Object.assign({}, style.boxes,style.form)}>
          <CompletedForm card={card} />
          {/*<h2 style={style.center}>Completed</h2>
          <h3>Date:</h3>
          <h4>{card.status.dateCompleted}</h4>
          <h3>Details:</h3>
          <h4>{card.status.completedDetails}</h4>
          <h3>Rating:</h3>
          <h4>{card.status.experienceRating}</h4>
          <img style={style.img} src='http://i.imgur.com/xUVKSTb.png' alt='Nailed it!'/>*/}
          </div> 
          : <div style={Object.assign({}, style.boxes,style.form)}><Form {...this.props}/></div>}
          </div>
        )
  }
})

export default SingleCardDisplay;