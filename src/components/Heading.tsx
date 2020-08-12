import React from 'react'

interface HeadingProps {
  text: string,
  style?: string
}

const Heading: React.FC<HeadingProps> = ({ text, style = '' }) => (
  <h2 className={`text-2xl font-serif font-semibold text-purple-600 ${style}`}>
    {text}
  </h2>
)

export default Heading
