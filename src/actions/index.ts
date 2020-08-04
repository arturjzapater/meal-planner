import Action from '../types/Action'

const increment = (): Action => ({
  type: 'INCREMENT'
})

const decrement = (): Action => ({
  type: 'DECREMENT'
})

export default {
  increment,
  decrement
}
