//update status (will update status object to change completed to true, date to input, details to input, experience to selected smiley)
export function markComplete (id, date, details, rating, points, currentScore) {
  return {
    type: "MARK_COMPLETE",
    id,
    date,
    details,
    rating,
    points,
    currentScore
  }
}

export function setVisibilityFilter (filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}




//for beta version
//edit points amount
//add new cards
//remove cards
//update level in UserScore
//track distance to next level in UserScore