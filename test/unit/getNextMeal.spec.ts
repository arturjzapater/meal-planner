import assert from 'assert'
import getNextMeal from '../../src/lib/getNextMeal'

type Meal = 'breakfast' | 'lunch' | 'supper'

const days = ['a', 'b', 'c']
const meals: Meal[] = ['breakfast', 'lunch', 'supper']

const getNext = getNextMeal(days, meals)

describe('Function getNextMeal', () => {
  it('returns next meal', () => {
    assert.deepStrictEqual(getNext('b', 'breakfast'), { day: 'b', meal: 'lunch' })
    assert.deepStrictEqual(getNext('b', 'lunch'), { day: 'b', meal: 'supper' })
  })

  it('moves onto the next day after supper', () => {
    assert.deepStrictEqual(getNext('b', 'supper'), { day: 'c', meal: 'breakfast' })
  })

  it('goes back to first day after last', () => {
    assert.deepStrictEqual(getNext('c', 'supper'), { day: 'a', meal: 'breakfast' })
  })
})
