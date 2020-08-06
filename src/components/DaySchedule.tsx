import React, { ReactElement } from 'react'
import DaySection from './DaySection'
import Meals from '../types/Meals'
import { capitalise } from '../lib/utils'

interface DayScheduleProps {
    day: string,
    meals: Meals
}

const DaySchedule = ({ day, meals }: DayScheduleProps): ReactElement => (
  <article>
    <h2>{capitalise(day)}</h2>
    <DaySection title='Breakfast' content={meals.breakfast} />
    <DaySection title='Lunch' content={meals.lunch} />
    <DaySection title='Supper' content={meals.supper} />
  </article>
)

export default DaySchedule
