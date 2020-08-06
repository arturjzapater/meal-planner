import React, { ReactElement } from 'react'

interface DaySectionProps {
  title: string,
  content: string,
}

const DaySection = ({ title, content }: DaySectionProps): ReactElement => (
  <section>
    <h2>{title}</h2>
    <p>{content}</p>
  </section>
)

export default DaySection
