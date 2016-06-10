import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from '../components/Main';

const getVisibleCards = (cards, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return cards
    case 'SHOW_COMPLETED':
      return cards.filter(card => card.status.completed)
    case 'SHOW_ACTIVE':
      return cards.filter(card => !card.status.completed)
    case 'SHOW_FIVE_POINTS':
      return cards.filter(card => (card.points === 5))
    case 'SHOW_TEN_POINTS':
      return cards.filter(card => (card.points === 10))
    case 'SHOW_FIFTEEN_POINTS':
      return cards.filter(card => (card.points === 15))
    case 'SHOW_TWENTY_POINTS':
      return cards.filter(card => (card.points === 20))
  }
}

function mapStateToProps (state) {
  return {
    cards: getVisibleCards(state.cards, state.visibilityFilter),
    score: state.score
  }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}



const VisibleCardGrid = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default VisibleCardGrid