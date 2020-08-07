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
  <label>
    {title}
    <select value={value} onChange={onChange}>
      {options.map(makeOpts(id))}
    </select>
  </label>
)

export default Selector
