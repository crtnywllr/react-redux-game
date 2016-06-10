function cards(state = [], action) {
  //console.log("Updating!")
  //console.log(state, action)
  switch(action.type) {
    case 'MARK_COMPLETE' :
      const i = parseInt(action.id);
      return [
      ...state.slice(0,i),
      ...state[i], Object.assign({}, state[i], {status: {completed: true, dateCompleted: action.date, completedDetails: action.details, experienceRating: action.rating}}),
      ...state.slice(i+1)
      ]
    default :
      return state;
  
  }
}

export default cards;