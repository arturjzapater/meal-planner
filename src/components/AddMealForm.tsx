import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Button from './Button'
import Input from './Input'
import Selector from './Selector'
import TextInput from './TextInput'
import Meals from '../types/Meals'
import actions from '../actions'
import mapStateToProps from '../lib/mapStateToProps'

interface AddMealFormProps {
  meals: Record<string, Meals>,
  addNewMeal: CallableFunction,
}

const AddMealForm: React.FC<AddMealFormProps> = ({ meals, addNewMeal }) => {
  const [formState, setFormState] = useState({
    day: 'monday',
    meal: 'breakfast',
    dish: ''
  })

  const handleChange = (prop: string) =>
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      setFormState({
        ...formState,
        [prop]: event.target.value
      })
    }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    addNewMeal(...Object.values(formState))
    setFormState({
      ...formState,
      dish: ''
    })
  }

  return (
    <form className='flex flex-col lg:grid lg:grid-template-colums-2 lg:gap-3 mb-4'>
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
          label='Ingredients'
          value='12'
          onChange={() => {}}
        />
      </section>
      <Button onClick={handleSubmit} text='Add meal' style='mt-2 lg:col-span-2' />
    </form>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addNewMeal: (day: string, meal: string, dish: string) => dispatch(actions.newMeal(day, meal, dish))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMealForm)
