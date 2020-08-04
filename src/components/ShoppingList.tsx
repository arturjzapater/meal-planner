import React, { ReactElement } from 'react'
import Ingredient from './Ingredient'

const ShoppingList = ({ ingredients }: { ingredients: Array<string>}): ReactElement => (
  <section>
    <h2 className='font-semibold'>Shopping List</h2>
    {ingredients.map((x, i) => <Ingredient key={`ingredient-${x}-${i}`} ingredient={x} />)}
  </section>
)

export default ShoppingList
