import React from 'react'
import { Link } from 'react-router'
import UserScore from './UserScore'
import FilterDisplay from './FilterDisplay'
import style from '../styles/Main'
import { Grid, Row, Col } from 'react-flexbox-grid'


const Main = React.createClass({
    render() {
      
        return (
          <div>
            <h1 style={style.headerDisplay}> 
                <Link to='/' style={style.headerText}><img style={style.logo} src='http://i.imgur.com/zKRkZ5Y.png' alt='ComfortZone'/></Link>
            </h1>
            <div style={style.navBar}>
              <Row>
                <Col xs={6} md={4}><UserScore {...this.props}/></Col>
                <Col xs={6} md={8}>{this.props.params.id ? 
                    <Link style={style.link} to="/"><h3>Back To Cards...</h3></Link>
                : <FilterDisplay />}</Col>
              </Row>
            </div>
            {React.cloneElement(this.props.children, {...this.props})}
          </div>
        )
    }
})

export default Main;