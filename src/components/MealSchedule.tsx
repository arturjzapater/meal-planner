import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import DaySchedule from './DaySchedule'
import GridLeftHead from './GridLeftHead'
import Meals from '../types/Meals'
import actions from '../actions'
import mapStateToProps from '../lib/mapStateToProps'

interface MealScheduleProps {
  meals: Record<string, Meals>,
  remove: CallableFunction
}

const mapDay = (remove: CallableFunction) =>
  ([key, val]: [string, Meals]): ReactElement =>
    <DaySchedule day={key} meals={val} key={key} remove={remove(key)} />

const MealSchedule: React.FC<MealScheduleProps> = ({ meals, remove }) => {
  const days = Object
    .entries(meals)
    .map(mapDay(remove))

  return (
    <section id='week-schedule' className='week-plan'>
      <GridLeftHead fields={['', 'Breakfast', 'Lunch', 'Supper']} />
      {days}
    </section>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  remove: (day: string) => (meal: string) => dispatch(actions.removeMeal(day, meal))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealSchedule)
