import React from 'react'

interface DaySectionProps {
  title: string,
  content: string,
  remove: () => void
}

const DaySection: React.FC<DaySectionProps> = ({ title, content, remove }) => (
  <section>
    <h2>{title}</h2>
    <p>{content}</p>
    {content && <button onClick={remove}>Remove</button>}
  </section>
)

export default DaySection
