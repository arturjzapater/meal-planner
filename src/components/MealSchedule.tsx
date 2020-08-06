import React, { ReactElement } from 'react'
import DaySchedule from './DaySchedule'
import Meals from '../types/Meals'

interface MealScheduleProps {
  meals: Record<string, Meals>,
  addIngredient: CallableFunction,
  remove: CallableFunction
}

const mapDay = (remove: CallableFunction) =>
  ([key, val]: [string, Meals]): ReactElement =>
    <DaySchedule day={key} meals={val} key={key} remove={remove(key)} />

const MealSchedule = ({ meals, addIngredient, remove }: MealScheduleProps): ReactElement => {
  const days = Object
    .entries(meals)
    .map(mapDay(remove))

  return (
    <section id='week-schedule' className='grid grid-cols-7 gap-4'>
      {days}
    </section>
  )
}

export default MealSchedule
