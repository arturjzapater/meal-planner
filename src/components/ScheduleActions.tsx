import React from 'react'
import Button from './Button'
import InputForm from './InputForm'
import printPdf from '../lib/printPdf'

interface ScheduleActionsProps {
  changeTitle: CallableFunction
}

const ScheduleActions: React.FC<ScheduleActionsProps> = ({ changeTitle }) => (
  <section className='flex flex-wrap justify-between'>
    <InputForm label='New Title' submit='Change Title' onSubmit={changeTitle} />
    <Button
      onClick={() => printPdf(document.getElementById('week-schedule'))}
      text='Save as PDF'
      theme='dark'
      style='my-2'
    />
  </section>
)

export default ScheduleActions
