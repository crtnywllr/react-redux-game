function score(state = [], action) {
 // console.log("New points!")
 // console.log(state, action)
  switch(action.type) {
    case 'MARK_COMPLETE' :
      const points = action.points
      const currentScore = action.currentScore
      const newScore = currentScore + points
      //console.log(newScore)
      return (
        Object.assign({}, state.score, {value: newScore})
      )
    default :
      return state;
  }
  
}

export default score;