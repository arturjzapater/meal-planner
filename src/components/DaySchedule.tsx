import React, { ReactElement } from 'react'
import DaySection from './DaySection'
import Meals from '../types/Meals'
import { capitalise } from '../lib/utils'

interface DayScheduleProps {
    day: string,
    meals: Meals,
    addMeal: CallableFunction
}

const DaySchedule = ({ day, meals, addMeal }: DayScheduleProps): ReactElement => (
  <article>
    <h2>{capitalise(day)}</h2>
    <DaySection title='Breakfast' content={meals.breakfast} addMeal={addMeal('breakfast')} />
    <DaySection title='Lunch' content={meals.lunch} addMeal={addMeal('lunch')} />
    <DaySection title='Supper' content={meals.supper} addMeal={addMeal('supper')} />
  </article>
)

export default DaySchedule
