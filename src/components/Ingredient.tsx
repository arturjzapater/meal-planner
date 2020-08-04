import React, { ReactElement } from 'react'

const Ingredient = ({ ingredient }: { ingredient: string }): ReactElement => (
  <article>
    <p>{ingredient}</p>
  </article>
)

export default Ingredient
