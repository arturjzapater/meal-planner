import React from 'react'
import Input from './Input'
import Selector from './Selector'
import Meals from '../types/Meals'

interface AddMealFormProps {
  meals: Record<string, Meals>,
  newMeal: Record<string, string>,
  addNewMeal: CallableFunction,
  onChange: CallableFunction
}

const AddMealForm: React.FC<AddMealFormProps> = ({ meals, newMeal, addNewMeal, onChange }) => {
  const handleChange = (prop: string) =>
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      onChange(prop, event.target.value)
    }

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault()
    addNewMeal()
  }

  return (
    <form>
      <Selector
        id='days'
        title='Day'
        options={Object.keys(meals)}
        value={newMeal.day}
        onChange={handleChange('day')}
      />
      <Selector
        id='meals'
        title='Meal'
        options={['breakfast', 'lunch', 'supper']}
        value={newMeal.meal}
        onChange={handleChange('meal')}
      />
      <Input
        title='Dish'
        type='text'
        value={newMeal.dish}
        onChange={handleChange('dish')}
      />
      <button onClick={handleSubmit}>Add meal</button>
    </form>
  )
}

export default AddMealForm
