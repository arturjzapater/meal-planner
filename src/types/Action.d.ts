interface Action {
  type: string,
  payload?: Record<string, unknown> | string
}

export default Action
