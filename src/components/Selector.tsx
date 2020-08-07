import React, { ReactElement } from 'react'
import { capitalise } from '../lib/utils'

interface SelectorProps {
  id: string,
  title: string,
  options: Array<string>,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const makeOpts = (id: string) => (x: string, i: number): ReactElement =>
  <option key={`${id}:${x}-${i}`} value={x}>{capitalise(x)}</option>

const Selector: React.FC<SelectorProps> = ({ id, title, options, value, onChange }) => (
  <label className='flex my-1 items-center'>
    <span className='mr-4 flex-grow'>{title}</span>
    <select value={value} onChange={onChange} className='w-3/5 p-1'>
      {options.map(makeOpts(id))}
    </select>
  </label>
)

export default Selector
