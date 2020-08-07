import React from 'react'
import { connect } from 'react-redux'
import AddMealForm from './AddMealForm'
import Header from './Header'
import MealSchedule from './MealSchedule'
import ShoppingList from './ShoppingList'
import actions from '../actions'
import mapStateToProps from '../lib/mapStateToProps'
import State from '../types/State'

interface AppProps extends State {
  addIngredient: CallableFunction,
}

const App: React.FC<AppProps> = ({
  ingredients,
  addIngredient
}) => (
  <>
    <Header />
    <main className='mx-4 md:mx-10 lg:mx-16 bg-purple-200 p-2 md:p-6'>
      <AddMealForm />
      <MealSchedule />
      <div>
        <ShoppingList ingredients={ingredients} />
        <button onClick={() => addIngredient('Potatoes')}>Add Potatoes</button>
      </div>
    </main>
  </>
)

const mapDispatchToProps = (dispatch: CallableFunction) => ({
  addIngredient: (ingredient: string) => dispatch(actions.addIngredient(ingredient))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
