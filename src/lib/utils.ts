const capitalise = (str: string): string => str[0].toUpperCase() + str.slice(1)

const pipe = (...fns: Array<CallableFunction>) => (value: any): any =>
  fns.reduce((x, fn) => fn(x), value)

export {
  capitalise,
  pipe
}
