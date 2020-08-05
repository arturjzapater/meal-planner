import React, { ReactElement } from 'react'
import DaySchedule from './DaySchedule'
import Meals from '../types/Meals'

interface MealScheduleProps {
  meals: Record<string, Meals>,
  addMeal: CallableFunction,
  addIngredient: CallableFunction
}

const mapDay = (addMeal: CallableFunction) =>
  ([key, val]: [string, Meals]): ReactElement =>
    <DaySchedule day={key} meals={val} key={key} addMeal={addMeal(key)} />

const MealSchedule = ({ meals, addMeal, addIngredient }: MealScheduleProps): ReactElement => {
  const days = Object
    .entries(meals)
    .map(mapDay(addMeal))

  return (
    <section id='week-schedule'>
      {days}
    </section>
  )
}

export default MealSchedule
