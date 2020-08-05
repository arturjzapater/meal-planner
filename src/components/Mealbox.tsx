import React, { useState, ReactElement } from 'react'

interface MealboxProps {
    addMeal: CallableFunction
}

const Mealbox = ({ addMeal }: MealboxProps): ReactElement => {
  const [meal, setMeal] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMeal(event.target.value)
  }

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault()
    addMeal(meal)
    setMeal('')
  }

  return (
    <form>
      <input type='text' value={meal} onChange={handleChange} />
      <button onClick={handleSubmit}>Add meal</button>
    </form>
  )
}

export default Mealbox
