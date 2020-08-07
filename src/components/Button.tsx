import React from 'react'

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement> | void) => void,
  text: string
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) =>
  <button onClick={onClick}>{text}</button>

export default Button
