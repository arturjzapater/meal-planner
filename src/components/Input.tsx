import React from 'react'

interface InputProps {
  title: string,
  type: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ title, type, value, onChange }) => (
  <label className='flex my-1 items-center'>
    <span className='mr-4 flex-grow'>{title}</span>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className='w-3/5 p-1 outline-none border border-white focus:border-purple-800'
    />
  </label>
)

export default Input
