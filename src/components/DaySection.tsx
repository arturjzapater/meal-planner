import React, { ReactElement } from 'react'

interface DaySectionProps {
  title: string,
  content: string,
  remove: () => void
}

const DaySection = ({ title, content, remove }: DaySectionProps): ReactElement => (
  <section>
    <h2>{title}</h2>
    <p>{content}</p>
    {content && <button onClick={remove}>Remove</button>}
  </section>
)

export default DaySection
