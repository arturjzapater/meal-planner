import React from 'react'
import AddMealForm from './AddMealForm'
import Button from './Button'
import Header from './Header'
import MealSchedule from './MealSchedule'
import printPdf from '../lib/printPdf'

const App: React.FC = () => (
  <>
    <Header />
    <main className='mx-4 md:mx-10 lg:mx-16 bg-purple-200 p-2 md:p-6'>
      <AddMealForm />
      <MealSchedule />
      <Button
        onClick={() => printPdf(document.getElementById('week-schedule'))}
        text='Save as PDF'
        theme='dark'
      />
    </main>
  </>
)

export default App
