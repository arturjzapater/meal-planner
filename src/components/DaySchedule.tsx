import React from 'react'
import DaySection from './DaySection'
import Meals from '../types/Meals'

interface DayScheduleProps {
    day: string,
    meals: Meals,
    remove: CallableFunction
}

const DaySchedule: React.FC<DayScheduleProps> = ({ day, meals, remove }) => (
  <>
    <h2 className='bg-purple-400 text-center py-2 capitalize lg:self-end'>{day}</h2>
    <DaySection title='Breakfast' content={meals.breakfast} remove={() => remove('breakfast')} />
    <DaySection title='Lunch' content={meals.lunch} remove={() => remove('lunch')} />
    <DaySection title='Supper' content={meals.supper} remove={() => remove('supper')} />
  </>
)

export default DaySchedule
