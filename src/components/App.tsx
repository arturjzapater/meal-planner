import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import AddMealForm from './AddMealForm'
import Header from './Header'
import MealSchedule from './MealSchedule'
import ShoppingList from './ShoppingList'
import actions from '../actions'
import State from '../types/State'

interface AppProps extends State {
  addIngredient: CallableFunction,
  addMeal: CallableFunction,
  changeNew: CallableFunction
}

const App = ({ meals, ingredients, addIngredient, addMeal, changeNew }: AppProps): ReactElement => (
  <div>
    <Header />
    <AddMealForm meals={meals} addMeal={addMeal} onChange={changeNew} />
    <MealSchedule meals={meals} addMeal={addMeal} addIngredient={addIngredient} />
    <div>
      <ShoppingList ingredients={ingredients} />
      <button onClick={() => addIngredient('Potatoes')}>Add Potatoes</button>
    </div>
  </div>
)

const mapStateToProps = (state: State) => ({ ...state })

const mapDispatchToProps = (dispatch: CallableFunction) => ({
  addIngredient: (ingredient: string) => dispatch(actions.addIngredient(ingredient)),
  addMeal: (day: string) => (meal: string) => (dish: string) => dispatch(actions.addMeal(day, meal, dish)),
  changeNew: (prop: string) => (payload: string) => dispatch(actions.changeNew(prop, payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
