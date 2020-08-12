import React from 'react'
import Button from './Button'

interface DaySectionProps {
  title: string,
  content: string,
  remove: () => void
}

const DaySection: React.FC<DaySectionProps> = ({ title, content, remove }) => (
  <section className='bg-purple-300 p-2 h-24 overflow-y-auto'>
    <h2 className='italic text-sm mb-2'>{title}</h2>
    <div className='flex justify-between items-center'>
      <p className='ml-2 lg:ml-0'>{content}</p>
      {content && <Button onClick={remove} text='X' theme='danger' />}
    </div>
  </section>
)

export default DaySection
