import React from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import Input from './Input'
import Selector from './Selector'
import Meals from '../types/Meals'
import actions from '../actions'
import mapStateToProps from '../lib/mapStateToProps'
import { Dispatch } from 'redux'

interface AddMealFormProps {
  meals: Record<string, Meals>,
  newMeal: Record<string, string>,
  addNewMeal: CallableFunction,
  changeNew: CallableFunction
}

const AddMealForm: React.FC<AddMealFormProps> = ({ meals, newMeal, addNewMeal, changeNew }) => {
  const handleChange = (prop: string) =>
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      changeNew(prop, event.target.value)
    }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    addNewMeal()
  }

  return (
    <form className='flex flex-col lg:w-2/5 mb-4'>
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
      <Button onClick={handleSubmit} text='Add meal' style='mt-2' />
    </form>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addNewMeal: () => dispatch(actions.newMeal()),
  changeNew: (prop: string, value: string) => dispatch(actions.changeNew(prop, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMealForm)
