import React from 'react'

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  text: string,
  theme?: 'dark' | 'light' | 'danger',
  style?: string
}

const themes = {
  dark: 'bg-purple-700 text-white hover:bg-purple-300 hover:text-purple-800 px-4',
  light: 'bg-purple-200 border-purple-800 border text-purple-800 hover:bg-purple-800 hover:text-white px-4',
  danger: 'text-red-600'
}

const transition = 'transition duration-300 ease-in'

const Button: React.FC<ButtonProps> = ({ onClick, text, theme = 'light', style = '' }) =>
  <button
    onClick={onClick}
    className={`${themes[theme]} rounded p-1 ${transition} ${style}`}
  >
    {text}
  </button>

export default Button
