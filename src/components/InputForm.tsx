import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'

interface InputFormProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: CallableFunction,
  submit: string,
  label: string,
}

const InputForm: React.FC<InputFormProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (): void => {},
  onSubmit,
  label,
  submit
}) => {
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
    onChange(event)
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    onSubmit(value)
    setValue('')
  }

  return (
    <form className='flex my-2'>
      <Input title={label} type='text' value={value} onChange={handleChange} />
      <Button onClick={handleSubmit} text={submit} style='ml-2' />
    </form>
  )
}

export default InputForm
