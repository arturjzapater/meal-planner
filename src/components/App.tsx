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
  addNewMeal: CallableFunction,
  changeNew: CallableFunction,
  removeMeal: CallableFunction
}

const App = ({
  meals,
  newMeal,
  ingredients,
  addIngredient,
  addNewMeal,
  changeNew,
  removeMeal
}: AppProps): ReactElement => (
  <>
    <Header />
    <main className='mx-4 md:mx-10 lg:mx-16 bg-purple-200 p-2 md:p-6'>
      <AddMealForm
        newMeal={newMeal}
        meals={meals}
        addNewMeal={addNewMeal}
        onChange={changeNew}
      />
      <MealSchedule
        meals={meals}
        remove={removeMeal}
        addIngredient={addIngredient}
      />
      <div>
        <ShoppingList ingredients={ingredients} />
        <button onClick={() => addIngredient('Potatoes')}>Add Potatoes</button>
      </div>
    </main>
  </>
)

const mapStateToProps = (state: State) => ({ ...state })

const mapDispatchToProps = (dispatch: CallableFunction) => ({
  addIngredient: (ingredient: string) => dispatch(actions.addIngredient(ingredient)),
  changeNew: (prop: string, value: string) => dispatch(actions.changeNew(prop, value)),
  addNewMeal: () => dispatch(actions.newMeal()),
  removeMeal: (day: string) => (meal: string) => dispatch(actions.removeMeal(day, meal))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
