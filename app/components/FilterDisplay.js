import React from 'react'
import FilterLink from '../containers/FilterLink'
import style from '../styles/FilterDisplay'

const FilterDisplay = () => (
  <p style={style}>
    Filter By:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {" "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {" "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
    {" "}
    <FilterLink filter="SHOW_FIVE_POINTS">
      5
    </FilterLink>
    {" "}
    <FilterLink filter="SHOW_TEN_POINTS">
      10
    </FilterLink>
    {" "}
    <FilterLink filter="SHOW_FIFTEEN_POINTS">
      15
    </FilterLink>
    {" "}
    <FilterLink filter="SHOW_TWENTY_POINTS">
      20 
    </FilterLink>
  </p>
)

export default FilterDisplay