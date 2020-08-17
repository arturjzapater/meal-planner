/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const capitalise = (str: string): string => str[0].toUpperCase() + str.slice(1)

const equal = (x: any) => (y: any): boolean => x === y

const map = (fn: (value: any, index: number, array: Array<any>) => any) =>
  (list: Array<any>): Array<any> =>
    list.map(fn)

const not = (x: any) => (y: any): boolean => x !== y

const pipe = (...fns: Array<CallableFunction>) =>
  (value: any): any =>
    fns.reduce((x, fn) => fn(x), value)

const prop = (prop: string) => (obj: Record<string, any>) => obj[prop]

const sort = (list: Array<any>): Array<any> => list.sort()

const trim = (str: string): string => str.trim()

const uniq = <T>(list: Array<T>): Array<T> => [...new Set(list)]

export {
  capitalise,
  equal,
  map,
  not,
  pipe,
  prop,
  sort,
  trim,
  uniq
}
