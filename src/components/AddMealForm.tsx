import React, { useState } from 'react'
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
import { pipe, trim } from '../lib/utils'

interface AddMealFormProps {
  meals: Record<string, Meals>,
  addNewMeal: CallableFunction,
}

const addKey = (key: string) => (ingredient: string) => ({ key, ingredient })

const makeObj = (key: string) => pipe(
  trim,
  addKey(key)
)

const AddMealForm: React.FC<AddMealFormProps> = ({ meals, addNewMeal }) => {
  const [formState, setFormState] = useState({
    day: 'monday',
    meal: 'breakfast',
    dish: '',
    ingredients: ''
  })

  const handleChange = (prop: string) =>
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState({
        ...formState,
        [prop]: event.target.value
      })
    }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    const { day, meal, dish } = formState
    const ingredients = formState.ingredients.length > 0
      ? formState.ingredients
        .split(/\n|,/)
        .map(makeObj(`${day}-${meal}`))
      : []

    addNewMeal(day, meal, dish, ingredients)
    setFormState({
      ...formState,
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
      <Button onClick={handleSubmit} text='Add Meal' style='mt-2 lg:col-span-2' />
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
