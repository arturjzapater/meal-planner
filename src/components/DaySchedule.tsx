import React, { ReactElement } from 'react'
import DaySection from './DaySection'
import Meals from '../types/Meals'
import { capitalise } from '../lib/utils'

interface DayScheduleProps {
    day: string,
    meals: Meals,
    remove: CallableFunction
}

const DaySchedule = ({ day, meals, remove }: DayScheduleProps): ReactElement => (
  <article className='bg-purple-400 px-4 py-2'>
    <h2>{capitalise(day)}</h2>
    <DaySection title='Breakfast' content={meals.breakfast} remove={() => remove('breakfast')} />
    <DaySection title='Lunch' content={meals.lunch} remove={() => remove('lunch')} />
    <DaySection title='Supper' content={meals.supper} remove={() => remove('supper')} />
  </article>
)

export default DaySchedule
