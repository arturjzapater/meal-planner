import React, { ReactElement, useState } from 'react'
import Input from './Input'
import Selector from './Selector'
import Meals from '../types/Meals'

interface AddMealFormProps {
  meals: Record<string, Meals>,
  addMeal: CallableFunction
}

const AddMealForm = ({ meals, addMeal }: AddMealFormProps): ReactElement => {
  const [day, setDay] = useState('monday')
  const [meal, setMeal] = useState('breakfast')
  const [input, setInput] = useState('')

  const handleChangeDay = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(event.target.value)
  }

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleChangeMeal = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMeal(event.target.value)
  }

  const handleSubmitInput = (event: React.MouseEvent) => {
    event.preventDefault()
    addMeal(day)(meal)(input)
    setInput('')
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
