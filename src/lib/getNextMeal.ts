const findNextIndex = <T>(list: Array<T>, value: T): number => list.indexOf(value) + 1
const findNextValue = <T>(list: Array<T>, value: T): T => list[findNextIndex(list, value)] || list[0]

type Meal = 'breakfast' | 'lunch' | 'supper'

interface NextMeal {
  day: string,
  meal: Meal
}

const getNextMeal = (days: Array<string>, meals: Array<Meal>) =>
  (currDay: string, currMeal: Meal): NextMeal => ({
    day: findNextIndex(meals, currMeal) === meals.length
      ? findNextValue(days, currDay)
      : currDay,
    meal: findNextValue(meals, currMeal)
  })

export default getNextMeal
