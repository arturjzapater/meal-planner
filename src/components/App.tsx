import React from 'react'
import AddMealForm from './AddMealForm'
import Header from './Header'
import IngredientList from './IngredientList'
import MealSchedule from './MealSchedule'

const App: React.FC = () => (
  <>
    <Header />
    <main className='mx-4 md:mx-10 lg:mx-16 bg-purple-200 p-2 md:p-6'>
      <AddMealForm />
      <MealSchedule />
      <IngredientList />
    </main>
  </>
)

export default App
