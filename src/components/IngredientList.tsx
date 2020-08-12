import React from 'react'
import { connect } from 'react-redux'
import Heading from './Heading'
import Ingredient from '../types/Ingredient'
import mapStateToProps from '../lib/mapStateToProps'
import { map, pipe, prop, uniq } from '../lib/utils'

interface IngredientListProps {
  ingredients: Array<Ingredient>
}

const makeIngredientList = pipe(
  map(prop('ingredient')),
  uniq,
  map(x => <article>{x}</article>)
)

const IngredientList: React.FC<IngredientListProps> = ({ ingredients }) => (
  <section>
    <Heading text='Shopping List' />
    {makeIngredientList(ingredients)}
  </section>
)

export default connect(
  mapStateToProps
)(IngredientList)
