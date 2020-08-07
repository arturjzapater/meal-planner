import React from 'react'

interface GridLeftHeadProps {
  fields: Array<string>
}

const makeCell = (x: string, i:number): React.ReactElement => (
  <div key={`${x}-${i}`} className='font-bold p-2 hidden lg:block'>{x}</div>
)

const GridLeftHead: React.FC<GridLeftHeadProps> = ({ fields }) => (
  <>
    {fields.map(makeCell)}
  </>
)

export default GridLeftHead
