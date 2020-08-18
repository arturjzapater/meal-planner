import assert from 'assert'
import actions from '../../src/actions'
import Ingredient from '../../src/types/Ingredient'

describe('Action addIngredient', () => {
  it('should create and action with an ingredient to add', () => {
    const ingredient = 'carrots'
    const expected = {
      type: 'ADD_INGREDIENT',
      payload: {
        ingredient
      }
    }

    assert.deepStrictEqual(actions.addIngredient(ingredient), expected)
  })
})

describe('Action changeTitle', () => {
  it('should create an action with a new title', () => {
    const title = 'Test Title'
    const expected = {
      type: 'CHANGE_TITLE',
      payload: {
        title
      }
    }

    assert.deepStrictEqual(actions.changeTitle(title), expected)
  })
})

describe('Action newMeal', () => {
  it('should create an action with a new meal', () => {
    const day = 'monday'
    const meal = 'lunch'
    const dish = 'potatoes'
    const ingredients = [{
      key: 'monday-lunch',
      ingredient: 'potatoes'
    }]
    const expected = {
      type: 'NEW_MEAL',
      payload: {
        day,
        meal,
        dish,
        ingredients
      }
    }

    assert.deepStrictEqual(actions.newMeal(day, meal, dish, ingredients), expected)
  })

  it('should accept empty arrays as ingredients', () => {
    const day = 'monday'
    const meal = 'lunch'
    const dish = 'potatoes'
    const ingredients: Ingredient[] = []
    const expected = {
      type: 'NEW_MEAL',
      payload: {
        day,
        meal,
        dish,
        ingredients
      }
    }

    assert.deepStrictEqual(actions.newMeal(day, meal, dish, ingredients), expected)
  })
})

describe('Action removeMeal', () => {
  it('should create an action with a meal to remove', () => {
    const day = 'monday'
    const meal = 'lunch'
    const expected = {
      type: 'REMOVE_MEAL',
      payload: {
        day,
        meal
      }
    }

    assert.deepStrictEqual(actions.removeMeal(day, meal), expected)
  })
})

describe('Action removeIngredient', () => {
  it('should create an action with an ingredient to remove', () => {
    const ingredient = 'potatoes'
    const expected = {
      type: 'REMOVE_INGREDIENT',
      payload: {
        ingredient
      }
    }

    assert.deepStrictEqual(actions.removeIngredient(ingredient), expected)
  })
})

describe('Action reset', () => {
  it('should create an action to reset state', () => {
    const expected = {
      type: 'RESET'
    }

    assert.deepStrictEqual(actions.reset(), expected)
  })
})
