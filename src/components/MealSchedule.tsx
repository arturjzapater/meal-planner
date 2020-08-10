import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import DaySchedule from './DaySchedule'
import GridLeftHead from './GridLeftHead'
import InputForm from './InputForm'
import Meals from '../types/Meals'
import actions from '../actions'
import mapStateToProps from '../lib/mapStateToProps'

interface MealScheduleProps {
  meals: Record<string, Meals>,
  title: string,
  changeTitle: CallableFunction,
  remove: CallableFunction
}

const mapDay = (remove: CallableFunction) =>
  ([key, val]: [string, Meals]): ReactElement =>
    <DaySchedule day={key} meals={val} key={key} remove={remove(key)} />

const MealSchedule: React.FC<MealScheduleProps> = ({ meals, title, changeTitle, remove }) => {
  const days = Object
    .entries(meals)
    .map(mapDay(remove))

  return (
    <section id='week-schedule'>
      <h2 className='text-2xl font-serif font-semibold text-purple-600'>{title}</h2>
      <div className='week-plan'>
        <GridLeftHead fields={['', 'Breakfast', 'Lunch', 'Supper']} />
        {days}
      </div>
      <InputForm label='New Title' submit='Change Title' onSubmit={changeTitle} />
    </section>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeTitle: (title: string) => dispatch(actions.changeTitle(title)),
  remove: (day: string) => (meal: string) => dispatch(actions.removeMeal(day, meal))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealSchedule)
