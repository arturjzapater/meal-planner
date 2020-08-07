import React from 'react'

interface DaySectionProps {
  title: string,
  content: string,
  remove: () => void
}

const DaySection: React.FC<DaySectionProps> = ({ title, content, remove }) => (
  <section className='bg-purple-300 p-2 flex justify-between items-start h-24 overflow-y-auto'>
    <h2 className='lg:hidden'>{title}</h2>
    <p>{content}</p>
    {content && <button className='ml-2' onClick={remove}>X</button>}
  </section>
)

export default DaySection
