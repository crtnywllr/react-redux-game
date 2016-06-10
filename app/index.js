import React from 'react';
import ReactDOM from 'react-dom';
import VisibleCardGrid from "./containers/VisibleCardGrid";
import CardGrid from "./components/CardGrid";
import SingleCardDisplay from "./components/SingleCardDisplay";



import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

const routes = (
    <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={VisibleCardGrid}>
            <IndexRoute component={CardGrid}></IndexRoute>
            <Route path='view/:id' component={SingleCardDisplay}></Route>
          </Route>
        </Router>
    </Provider>
    
)

ReactDOM.render(routes, document.getElementById('app'));