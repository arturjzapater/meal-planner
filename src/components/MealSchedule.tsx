import React, { ReactElement } from 'react'
import Meals from '../types/Meals'

interface MealScheduleProps {
  meals: Record<string, Meals>,
  addMeal: CallableFunction,
  addIngredient: CallableFunction
}

const MealSchedule = ({ meals, addMeal, addIngredient }: MealScheduleProps): ReactElement => (
  <div>Hi</div>
)

export default MealSchedule
