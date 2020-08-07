import React, { ReactElement } from 'react'
import DaySchedule from './DaySchedule'
import GridLeftHead from './GridLeftHead'
import Meals from '../types/Meals'

interface MealScheduleProps {
  meals: Record<string, Meals>,
  addIngredient: CallableFunction,
  remove: CallableFunction
}

const mapDay = (remove: CallableFunction) =>
  ([key, val]: [string, Meals]): ReactElement =>
    <DaySchedule day={key} meals={val} key={key} remove={remove(key)} />

const MealSchedule: React.FC<MealScheduleProps> = ({ meals, addIngredient, remove }) => {
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

export default MealSchedule
