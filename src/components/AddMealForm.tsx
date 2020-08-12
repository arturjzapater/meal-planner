import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Button from './Button'
import Heading from './Heading'
import Input from './Input'
import Selector from './Selector'
import TextInput from './TextInput'
import Ingredient from '../types/Ingredient'
import Meals from '../types/Meals'
import actions from '../actions'
import mapStateToProps from '../lib/mapStateToProps'
import { equal, pipe, prop } from '../lib/utils'
import getNextMeal from '../lib/getNextMeal'

interface AddMealFormProps {
  ingredients: Array<Ingredient>,
  meals: Record<string, Meals>,
  addNewMeal: CallableFunction,
}

interface FormState {
  day: string,
  meal: 'breakfast' | 'lunch' | 'supper'
  dish: string,
  ingredients: string
}

const initState: FormState = {
  day: 'monday',
  meal: 'breakfast',
  dish: '',
  ingredients: ''
}

const isRightKey = (key: string) => pipe(
  prop('key'),
  equal(key)
)

const AddMealForm: React.FC<AddMealFormProps> = ({ ingredients, meals, addNewMeal }) => {
  const [formState, setFormState] = useState(initState)

  useEffect(() => {
    const { day, meal } = formState
    setFormState({
      ...formState,
      dish: meals[day][meal],
      ingredients: ingredients
        .filter(isRightKey(`${day}-${meal}`))
        .map(prop('ingredient'))
        .join('\n')
    })
  }, [formState.day, formState.meal])

  const handleChange = (prop: string) =>
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState({
        ...formState,
        [prop]: event.target.value
      })
    }

  const handleReset = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    setFormState(initState)
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()

    const { day, meal, dish, ingredients } = formState
    addNewMeal(day, meal, dish, ingredients)

    const { day: nextDay, meal: nextMeal } = getNextMeal(Object.keys(meals), ['breakfast', 'lunch', 'supper'])(day, meal)
    setFormState({
      day: nextDay,
      meal: nextMeal,
      dish: '',
      ingredients: ''
    })
  }

  return (
    <form className='flex flex-col lg:grid lg:grid-template-colums-2 lg:gap-3 mb-4'>
      <Heading text='Add a New Meal' style='lg:col-span-2' />
      <section className='flex flex-col'>
        <Selector
          id='days'
          title='Day'
          options={Object.keys(meals)}
          value={formState.day}
          onChange={handleChange('day')}
        />
        <Selector
          id='meals'
          title='Meal'
          options={['breakfast', 'lunch', 'supper']}
          value={formState.meal}
          onChange={handleChange('meal')}
        />
        <Input
          title='Dish'
          type='text'
          value={formState.dish}
          onChange={handleChange('dish')}
        />
      </section>
      <section className='flex flex-col'>
        <TextInput
          label='Shopping List'
          value={formState.ingredients}
          onChange={handleChange('ingredients')}
        />
      </section>
      <Button onClick={handleSubmit} text='Add Meal' style='mt-2' />
      <Button onClick={handleReset} text='Reset Form' theme='danger' style='mt-2 border' />
    </form>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addNewMeal: (day: string, meal: string, dish: string, ingredients: Array<Ingredient>) =>
    dispatch(actions.newMeal(day, meal, dish, ingredients))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMealForm)
