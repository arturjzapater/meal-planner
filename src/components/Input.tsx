import React from 'react'

interface InputProps {
  title: string,
  type: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ title, type, value, onChange }) => (
  <label>
    {title}
    <input type={type} value={value} onChange={onChange} />
  </label>
)

export default Input
