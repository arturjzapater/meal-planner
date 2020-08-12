import React from 'react'

interface TextInputProps {
  label: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  style?: string
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, style = '' }) => (
  <label className='flex flex-col flex-grow my-1 items-stretch'>
    <span className='mb-2'>{label}</span>
    <textarea
      onChange={onChange}
      className={`flex-grow p-1 outline-none border border-white focus:border-purple-800 resize-none ${style}`}
      value={value}
    />
  </label>
)

export default TextInput
