import React from 'react'
import style from '../styles/CompletedForm'

const CompletedForm = React.createClass({
  render() {
    const { card } = this.props
    
    return (
      <div>
      <h2 style={style.center}>Completed</h2>
          <h3>Date:</h3>
          <h4>{card.status.dateCompleted}</h4>
          <h3>Details:</h3>
          <h4>{card.status.completedDetails}</h4>
          <h3>Rating:</h3>
          <h4>{card.status.experienceRating}</h4>
          <img style={style.img} src='http://i.imgur.com/xUVKSTb.png' alt='Nailed it!'/>
      </div>
    )
  }
})

export default CompletedForm;
