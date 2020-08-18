import assert from 'assert'
import reducer from '../../src/reducer'

const dailyMeals = {
  breakfast: '',
  lunch: '',
  supper: ''
}

const initState = {
  meals: {
    monday: { ...dailyMeals },
    tuesday: { ...dailyMeals },
    wednesday: { ...dailyMeals },
    thursday: { ...dailyMeals },
    friday: { ...dailyMeals },
    saturday: { ...dailyMeals },
    sunday: { ...dailyMeals }
  },
  title: 'Meal Schedule',
  ingredients: []
}

describe('Reducer', () => {
  it('should return initial state', () => {
    assert.deepStrictEqual(reducer(), initState)
  })

  it('should handle ADD_INGREDIENT', () => {
    const result = reducer(undefined, {
      type: 'ADD_INGREDIENT',
      payload: {
        ingredient: 'potatoes'
      }
    })

    const expected = {
      ...initState,
      ingredients: [{
        key: 'manually-added',
        ingredient: 'Potatoes'
      }]
    }
    assert.deepStrictEqual(result, expected)
  })

  it('should handle CHANGE_TITLE', () => {
    const title = 'Test Title'
    const result = reducer(undefined, {
      type: 'CHANGE_TITLE',
      payload: {
        title
      }
    })

    const expected = {
      ...initState,
      title
    }

    assert.deepStrictEqual(result, expected)
  })

  it('should handle NEW_MEAL', () => {
    const day = 'monday'
    const meal = 'breakfast'
    const dish = 'Test Meal'
    const ingredients = 'test ingredient, test food, test liquid'

    const result = reducer(undefined, {
      type: 'NEW_MEAL',
      payload: {
        day, meal, dish, ingredients
      }
    })

    const expected = {
      ...initState,
      meals: {
        ...initState.meals,
        monday: {
          ...initState.meals.monday,
          breakfast: dish
        }
      },
      ingredients: [{
        key: 'monday-breakfast',
        ingredient: 'Test ingredient'
      }, {
        key: 'monday-breakfast',
        ingredient: 'Test food'
      }, {
        key: 'monday-breakfast',
        ingredient: 'Test liquid'
      }]
    }

    assert.deepStrictEqual(result, expected)
  })

  it('should handle REMOVE_MEAL', () => {
    const result = reducer({
      ...initState,
      meals: {
        ...initState.meals,
        monday: {
          ...initState.meals.monday,
          breakfast: 'Breakfast'
        }
      },
      ingredients: [{
        key: 'monday-breakfast',
        ingredient: 'To go'
      }]
    }, {
      type: 'REMOVE_MEAL',
      payload: {
        day: 'monday',
        meal: 'breakfast'
      }
    })

    const expected = {
      ...initState,
      meals: {
        ...initState.meals,
        monday: {
          ...initState.meals.monday,
          breakfast: ''
        }
      },
      ingredients: []
    }

    assert.deepStrictEqual(result, expected)
  })

  it('should handle REMOVE_INGREDIENT', () => {
    const init = {
      ...initState,
      ingredients: [{
        key: 'a',
        ingredient: '1'
      }, {
        key: 'b',
        ingredient: '1'
      }, {
        key: 'a',
        ingredient: '2'
      }]
    }

    const expected = {
      ...initState,
      ingredients: [{
        key: 'a',
        ingredient: '2'
      }]
    }

    const result = reducer(init, {
      type: 'REMOVE_INGREDIENT',
      payload: {
        ingredient: '1'
      }
    })

    assert.deepStrictEqual(result, expected)
  })

  it('should handle RESET', () => {
    const init = {
      ...initState,
      meals: {
        ...initState.meals,
        monday: {
          breakfast: 'a',
          lunch: 'b',
          supper: 'c'
        }
      },
      ingredients: [{
        key: 'a',
        ingredient: '1'
      }, {
        key: 'b',
        ingredient: '1'
      }, {
        key: 'a',
        ingredient: '2'
      }]
    }

    const result = reducer(init, {
      type: 'RESET'
    })

    assert.deepStrictEqual(result, initState)
  })
})

describe('Reducer: NEW_MEAL', () => {
  const day = 'monday'
  const meal = 'breakfast'
  const dish = 'Test Meal'
  const ingredients = 'new ingredient'

  it('should remove previous ingredients for the same meal', () => {
    const result = reducer({
      ...initState,
      ingredients: [{
        key: 'monday-breakfast',
        ingredient: 'To go'
      }]
    }, {
      type: 'NEW_MEAL',
      payload: {
        day, meal, dish, ingredients
      }
    })

    const expected = {
      ...initState,
      meals: {
        ...initState.meals,
        monday: {
          ...initState.meals.monday,
          breakfast: dish
        }
      },
      ingredients: [{
        key: 'monday-breakfast',
        ingredient: 'New ingredient'
      }]
    }

    assert.deepStrictEqual(result, expected)
  })

  it('should keep previous ingredients for other meals', () => {
    const result = reducer({
      ...initState,
      ingredients: [{
        key: 'monday-lunch',
        ingredient: 'To keep'
      }]
    }, {
      type: 'NEW_MEAL',
      payload: {
        day, meal, dish, ingredients
      }
    })

    const expected = {
      ...initState,
      meals: {
        ...initState.meals,
        monday: {
          ...initState.meals.monday,
          breakfast: dish
        }
      },
      ingredients: [{
        key: 'monday-lunch',
        ingredient: 'To keep'
      }, {
        key: 'monday-breakfast',
        ingredient: 'New ingredient'
      }]
    }

    assert.deepStrictEqual(result, expected)
  })
})
