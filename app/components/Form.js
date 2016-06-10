import React from 'react';
import style from '../styles/Form'

const Form = React.createClass({
   handleSubmit(e) {
    e.preventDefault();
    const { id } = this.props.params;
    const { points } = this.props.cards[id]
    const { score } = this.props
    const currentScore = score.value
    const date = this.refs.date.value;
    const details = this.refs.details.value;
    const rating = this.refs.rating.value;
    this.props.markComplete(id, date, details, rating, points, currentScore);
    this.refs.completeForm.reset();
  },
  
  render() {
    
    return (
      <div>
        <form ref="completeForm" onSubmit={this.handleSubmit}>
          <h2 style={style.center}>Done? </h2>
          <h4>Date: </h4>
          <input style={style.spread} type="date" ref="date" placeholder="mm/dd/yy" required/>
           <h4>Details: </h4>
          <textarea style={style.spread} rows='4' type="text" ref="details" placeholder="Where? When? Who?" required></textarea>
           <h4>Rating: </h4>
          <input style={style.spread} type="number" ref="rating" placeholder="Rating 1-10" required/>
          <div style={style.center}><button style={style.button} type="submit">Complete Challenge </button></div>
        </form>
      </div>
    )
  }
});

export default Form;

