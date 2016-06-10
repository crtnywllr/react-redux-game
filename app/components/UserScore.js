import React from 'react';
import style from '../styles/UserScore'


const UserScore = React.createClass({
  render() {
    
    return (
      <h3 style={style.h3}> My Score: <span style={style.points}>{this.props.score.value}</span></h3>
    )
  }
})

export default UserScore;