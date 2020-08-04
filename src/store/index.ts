import { createStore } from 'redux'
import reducer from '../reducer'

const init = {}

const store = () => createStore(reducer, init)
