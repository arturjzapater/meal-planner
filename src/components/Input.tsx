import React, { ReactElement } from 'react'

interface InputProps {
  title: string,
  type: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ title, type, value, onChange }: InputProps): ReactElement => (
  <label>
    {title}
    <input type={type} value={value} onChange={onChange} />
  </label>
)

export default Input
