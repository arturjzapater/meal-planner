import React, { ReactElement } from 'react'
import Mealbox from './Mealbox'

interface DaySectionProps {
  title: string,
  content: string,
  addMeal: CallableFunction
}

const DaySection = ({ title, content, addMeal }: DaySectionProps): ReactElement => (
  <section>
    <h2>{title}</h2>
    <p>{content}</p>
    <Mealbox addMeal={addMeal} />
  </section>
)

export default DaySection
