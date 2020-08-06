import React, { ReactElement, useState } from 'react'
import Input from './Input'
import Selector from './Selector'
import Meals from '../types/Meals'

interface AddMealFormProps {
  meals: Record<string, Meals>,
  new: Record<string. string>,
  addMeal: CallableFunction,
  onChange: CallableFunction
}

const AddMealForm = ({ meals, new, addMeal, onChange }: AddMealFormProps): ReactElement => {
  const handleSubmitInput = (event: React.MouseEvent) => {
    event.preventDefault()
    addMeal(day)(meal)(input)
  }

  return (
    <form>
      <Selector
        id='days'
        title='Day'
        options={Object.keys(meals)}
        value={day}
        onChange={handleChangeDay}
      />
      <Selector
        id='meals'
        title='Meal'
        options={['breakfast', 'lunch', 'supper']}
        value={meal}
        onChange={handleChangeMeal}
      />
      <Input
        title='Dish'
        type='text'
        value={input}
        onChange={handleChangeInput}
      />
      <button onClick={handleSubmitInput}>Add meal</button>
    </form>
  )
}

export default AddMealForm
